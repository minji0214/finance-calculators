// 4대보험 계산 입력 파라미터
export interface InsuranceInput {
  monthlySalary: number; // 월 급여
  year: number; // 계산 연도 (2025, 2026 등)
}

// 국민연금 계산 결과
export interface NationalPensionResult {
  rate: number; // 보험료율 (%)
  employeeContribution: number; // 본인 부담금
  employerContribution: number; // 사업주 부담금
  totalContribution: number; // 총 부담금
}

// 건강보험 계산 결과
export interface HealthInsuranceResult {
  rate: number; // 보험료율 (%)
  employeeContribution: number; // 본인 부담금
  employerContribution: number; // 사업주 부담금
  totalContribution: number; // 총 부담금
}

// 고용보험 계산 결과
export interface EmploymentInsuranceResult {
  rate: number; // 보험료율 (%)
  employeeContribution: number; // 본인 부담금
  employerContribution: number; // 사업주 부담금
  totalContribution: number; // 총 부담금
}

// 산재보험 계산 결과
export interface IndustrialAccidentInsuranceResult {
  rate: number; // 보험료율 (%)
  employeeContribution: number; // 본인 부담금 (산재보험은 사업주 전액 부담)
  employerContribution: number; // 사업주 부담금
  totalContribution: number; // 총 부담금
}

// 소득세 계산 결과
export interface TaxResult {
  incomeTax: number; // 소득세 (월간)
  localIncomeTax: number; // 지방소득세 (월간)
  totalTax: number; // 총 세금 (월간)
}

// 장기요양보험 계산 결과
export interface LongTermCareInsuranceResult {
  rate: number; // 보험료율 (%)
  employeeContribution: number; // 본인 부담금
  employerContribution: number; // 사업주 부담금
  totalContribution: number; // 총 부담금
}

// 4대보험 전체 계산 결과
export interface InsuranceResult {
  monthlySalary: number;
  year: number;
  nationalPension: NationalPensionResult;
  healthInsurance: HealthInsuranceResult;
  employmentInsurance: EmploymentInsuranceResult;
  industrialAccidentInsurance: IndustrialAccidentInsuranceResult;
  longTermCareInsurance: LongTermCareInsuranceResult; // 장기요양보험
  tax: TaxResult; // 소득세 및 지방소득세
  totalInsuranceDeduction: number; // 본인 부담 총액 (4대보험 + 장기요양보험)
  totalDeduction: number; // 총 공제액 (4대보험 + 장기요양보험 + 소득세 + 지방소득세)
  totalEmployerCost: number; // 사업주 부담 총액
  netSalary: number; // 실수령액 (급여 - 총 공제액)
  totalCost: number; // 총 인건비 (급여 + 사업주 부담금)
}

