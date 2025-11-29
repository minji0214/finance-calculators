/**
 * 숫자를 한글 단위로 변환하는 함수
 */
export function formatKoreanCurrency(value: number): string {
  if (value === 0) return '0원';

  const units = ['', '만', '억', '조'];
  let result = '';
  let num = value;

  for (let i = 0; i < units.length && num > 0; i++) {
    const part = num % 10000;
    if (part > 0) {
      if (i === 0) {
        result = `${part}${units[i]}` + result;
      } else {
        result = `${part}${units[i]} ` + result;
      }
    }
    num = Math.floor(num / 10000);
  }

  return result.trim() + '원';
}

/**
 * 숫자에 콤마 추가하는 함수
 */
export function formatNumberWithCommas(value: number | string): string {
  if (!value && value !== 0) return '';
  const numStr =
    typeof value === 'number' ? value.toString() : value.replace(/[^0-9]/g, '');
  if (!numStr) return '';
  return parseInt(numStr, 10).toLocaleString();
}

/**
 * 한글 단위를 숫자로 변환하는 함수
 */
export function parseKoreanInput(input: string): number {
  if (!input) return 0;

  // 숫자만 추출 (콤마 제거)
  const num = input.replace(/[^0-9]/g, '');
  return num ? parseInt(num, 10) : 0;
}

/**
 * 연도별 국민연금 보험료율 계산
 * 2025년: 9%
 * 2026년부터 매년 0.5%p씩 인상, 2033년 13% 도달
 */
export function getNationalPensionRate(year: number): number {
  if (year < 2025) {
    return 9.0; // 2025년 이전은 9%
  }
  if (year < 2026) {
    return 9.0; // 2025년
  }
  
  // 2026년부터 매년 0.5%p씩 인상
  const increase = (year - 2026) * 0.5;
  const rate = 9.0 + increase;
  
  // 2033년 이후는 13%로 고정
  return Math.min(rate, 13.0);
}

/**
 * 건강보험 보험료율 (2025년 기준)
 */
export function getHealthInsuranceRate(): number {
  return 3.545; // 2025년 기준
}

/**
 * 고용보험 보험료율 (2025년 기준)
 */
export function getEmploymentInsuranceRate(): number {
  return 0.9; // 2025년 기준
}

/**
 * 산재보험 보험료율 (업종별 차등, 기본값)
 */
export function getIndustrialAccidentInsuranceRate(): number {
  return 0.7; // 일반 업종 기준 (실제로는 업종별 차등)
}

/**
 * 장기요양보험료율 (건강보험료의 일정 비율)
 */
export function getLongTermCareInsuranceRate(): number {
  return 12.95; // 건강보험료의 12.95% (2025년 기준)
}

/**
 * 소득세 계산 (간이세액 방식, 2025년 기준)
 * 네이버 계산기와 동일한 간이세액 계산 방식 사용
 * @param monthlySalary 월 급여
 * @param insuranceDeduction 4대보험 + 장기요양보험 본인 부담금 (월간)
 * @param nonTaxableAmount 비과세액 (월간, 기본값 20만원)
 * @returns 소득세 (월간)
 */
export function calculateIncomeTax(
  monthlySalary: number,
  insuranceDeduction: number,
  nonTaxableAmount: number = 200000
): number {
  // 연봉 계산
  const annualSalary = monthlySalary * 12;
  
  // 연간 비과세액
  const annualNonTaxableAmount = nonTaxableAmount * 12;
  
  // 근로소득금액 = 연봉 - 연간 비과세액
  const earnedIncome = annualSalary - annualNonTaxableAmount;
  
  // 근로소득공제 계산 (2025년 기준)
  let earnedIncomeDeduction = 0;
  if (earnedIncome <= 5000000) {
    earnedIncomeDeduction = earnedIncome * 0.7;
  } else if (earnedIncome <= 15000000) {
    earnedIncomeDeduction = 5000000 * 0.7 + (earnedIncome - 5000000) * 0.4;
  } else if (earnedIncome <= 45000000) {
    earnedIncomeDeduction = 5000000 * 0.7 + 10000000 * 0.4 + (earnedIncome - 15000000) * 0.15;
  } else if (earnedIncome <= 100000000) {
    earnedIncomeDeduction = 5000000 * 0.7 + 10000000 * 0.4 + 30000000 * 0.15 + (earnedIncome - 45000000) * 0.05;
  } else {
    earnedIncomeDeduction = 5000000 * 0.7 + 10000000 * 0.4 + 30000000 * 0.15 + 55000000 * 0.05 + Math.min((earnedIncome - 100000000) * 0.02, 12000000);
  }
  
  // 종합소득금액 = 근로소득금액 - 근로소득공제
  const comprehensiveIncome = Math.max(0, earnedIncome - earnedIncomeDeduction);
  
  // 연금보험료 공제: 국민연금, 건강보험, 고용보험 본인 부담금 (연간)
  // 장기요양보험료는 연금보험료 공제 대상이 아님
  const annualInsuranceDeduction = insuranceDeduction * 12;
  
  // 연금보험료 공제 적용 (종합소득금액에서 차감)
  const incomeAfterInsuranceDeduction = Math.max(0, comprehensiveIncome - annualInsuranceDeduction);
  
  // 기본공제: 연 1,056만원 (월 88만원, 부양가족 1명 기준)
  const basicDeduction = 10560000;
  
  // 소득공제: 연금보험료 공제 후 금액의 20% (최대 200만원)
  const incomeDeduction = Math.min(incomeAfterInsuranceDeduction * 0.2, 2000000);
  
  // 과세표준 = 연금보험료 공제 후 금액 - 기본공제 - 소득공제
  const taxableIncome = Math.max(0, incomeAfterInsuranceDeduction - basicDeduction - incomeDeduction);
  
  if (taxableIncome <= 0) {
    return 0;
  }
  
  // 누진세율 적용 (2025년 기준)
  let annualTax = 0;
  
  if (taxableIncome <= 12000000) {
    // 1,200만원 이하: 6%
    annualTax = taxableIncome * 0.06;
  } else if (taxableIncome <= 46000000) {
    // 4,600만원 이하: 15%
    annualTax = 12000000 * 0.06 + (taxableIncome - 12000000) * 0.15;
  } else if (taxableIncome <= 88000000) {
    // 8,800만원 이하: 24%
    annualTax = 12000000 * 0.06 + 34000000 * 0.15 + (taxableIncome - 46000000) * 0.24;
  } else if (taxableIncome <= 150000000) {
    // 1억 5천만원 이하: 35%
    annualTax = 12000000 * 0.06 + 34000000 * 0.15 + 42000000 * 0.24 + (taxableIncome - 88000000) * 0.35;
  } else if (taxableIncome <= 300000000) {
    // 3억원 이하: 38%
    annualTax = 12000000 * 0.06 + 34000000 * 0.15 + 42000000 * 0.24 + 62000000 * 0.35 + (taxableIncome - 150000000) * 0.38;
  } else if (taxableIncome <= 500000000) {
    // 5억원 이하: 40%
    annualTax = 12000000 * 0.06 + 34000000 * 0.15 + 42000000 * 0.24 + 62000000 * 0.35 + 150000000 * 0.38 + (taxableIncome - 300000000) * 0.40;
  } else {
    // 5억원 초과: 42%
    annualTax = 12000000 * 0.06 + 34000000 * 0.15 + 42000000 * 0.24 + 62000000 * 0.35 + 150000000 * 0.38 + 200000000 * 0.40 + (taxableIncome - 500000000) * 0.42;
  }
  
  // 월간 소득세로 변환 (반올림)
  return Math.round(annualTax / 12);
}

/**
 * 지방소득세 계산 (소득세의 10%)
 */
export function calculateLocalIncomeTax(incomeTax: number): number {
  return Math.round(incomeTax * 0.1);
}

