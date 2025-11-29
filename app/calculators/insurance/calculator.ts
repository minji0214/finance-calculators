import type {
  InsuranceInput,
  InsuranceResult,
  NationalPensionResult,
  HealthInsuranceResult,
  EmploymentInsuranceResult,
  IndustrialAccidentInsuranceResult,
  LongTermCareInsuranceResult,
  TaxResult,
} from './types';
import {
  getNationalPensionRate,
  getHealthInsuranceRate,
  getEmploymentInsuranceRate,
  getIndustrialAccidentInsuranceRate,
  getLongTermCareInsuranceRate,
  calculateIncomeTax,
  calculateLocalIncomeTax,
} from './utils';

/**
 * 4대보험 계산기 - 순수 계산 로직
 * 
 * 2025년 국민연금 개정안 반영:
 * - 2025년: 9%
 * - 2026년부터 매년 0.5%p씩 인상
 * - 2033년: 13% 도달
 * 
 * 계산 기준:
 * - 국민연금: 급여 × 보험료율 (본인 50%, 사업주 50%)
 * - 건강보험: 급여 × 3.545% (본인 50%, 사업주 50%)
 * - 고용보험: 급여 × 0.9% (본인 50%, 사업주 50%)
 * - 산재보험: 급여 × 0.7% (사업주 전액 부담)
 */
export function calculateInsurance(input: InsuranceInput): InsuranceResult {
  const { monthlySalary, year } = input;

  // 국민연금 계산
  const npRate = getNationalPensionRate(year);
  const npTotal = (monthlySalary * npRate) / 100;
  const npEmployee = npTotal / 2;
  const npEmployer = npTotal / 2;

  const nationalPension: NationalPensionResult = {
    rate: npRate,
    employeeContribution: Number(npEmployee.toFixed(0)),
    employerContribution: Number(npEmployer.toFixed(0)),
    totalContribution: Number(npTotal.toFixed(0)),
  };

  // 건강보험 계산
  const hiRate = getHealthInsuranceRate();
  const hiTotal = (monthlySalary * hiRate) / 100;
  const hiEmployee = hiTotal / 2;
  const hiEmployer = hiTotal / 2;

  const healthInsurance: HealthInsuranceResult = {
    rate: hiRate,
    employeeContribution: Number(hiEmployee.toFixed(0)),
    employerContribution: Number(hiEmployer.toFixed(0)),
    totalContribution: Number(hiTotal.toFixed(0)),
  };

  // 고용보험 계산
  const eiRate = getEmploymentInsuranceRate();
  const eiTotal = (monthlySalary * eiRate) / 100;
  const eiEmployee = eiTotal / 2;
  const eiEmployer = eiTotal / 2;

  const employmentInsurance: EmploymentInsuranceResult = {
    rate: eiRate,
    employeeContribution: Number(eiEmployee.toFixed(0)),
    employerContribution: Number(eiEmployer.toFixed(0)),
    totalContribution: Number(eiTotal.toFixed(0)),
  };

  // 산재보험 계산 (사업주 전액 부담)
  const iaiRate = getIndustrialAccidentInsuranceRate();
  const iaiTotal = (monthlySalary * iaiRate) / 100;

  const industrialAccidentInsurance: IndustrialAccidentInsuranceResult = {
    rate: iaiRate,
    employeeContribution: 0, // 본인 부담 없음
    employerContribution: Number(iaiTotal.toFixed(0)),
    totalContribution: Number(iaiTotal.toFixed(0)),
  };

  // 장기요양보험 계산 (건강보험료의 12.27%)
  const ltciRate = getLongTermCareInsuranceRate();
  const ltciTotal = (healthInsurance.totalContribution * ltciRate) / 100;
  const ltciEmployee = ltciTotal / 2;
  const ltciEmployer = ltciTotal / 2;

  const longTermCareInsurance: LongTermCareInsuranceResult = {
    rate: ltciRate,
    employeeContribution: Number(ltciEmployee.toFixed(0)),
    employerContribution: Number(ltciEmployer.toFixed(0)),
    totalContribution: Number(ltciTotal.toFixed(0)),
  };

  // 4대보험 + 장기요양보험 본인 부담 총액
  const totalInsuranceDeduction =
    nationalPension.employeeContribution +
    healthInsurance.employeeContribution +
    employmentInsurance.employeeContribution +
    industrialAccidentInsurance.employeeContribution +
    longTermCareInsurance.employeeContribution;

  // 사업주 부담 총액
  const totalEmployerCost =
    nationalPension.employerContribution +
    healthInsurance.employerContribution +
    employmentInsurance.employerContribution +
    industrialAccidentInsurance.employerContribution +
    longTermCareInsurance.employerContribution;

  // 연금보험료 공제용: 국민연금 + 건강보험 + 고용보험 본인 부담금만 (장기요양보험 제외)
  const pensionInsuranceDeduction = 
    nationalPension.employeeContribution +
    healthInsurance.employeeContribution +
    employmentInsurance.employeeContribution;
  
  // 소득세 계산 (간이세액 방식, 월간 기준)
  // 연금보험료 공제는 국민연금, 건강보험, 고용보험만 적용
  const monthlyIncomeTax = calculateIncomeTax(monthlySalary, pensionInsuranceDeduction);
  const monthlyLocalIncomeTax = calculateLocalIncomeTax(monthlyIncomeTax);

  const tax: TaxResult = {
    incomeTax: Number(monthlyIncomeTax.toFixed(0)),
    localIncomeTax: Number(monthlyLocalIncomeTax.toFixed(0)),
    totalTax: Number((monthlyIncomeTax + monthlyLocalIncomeTax).toFixed(0)),
  };

  // 총 공제액 (4대보험 + 장기요양보험 + 소득세 + 지방소득세)
  const totalDeduction = totalInsuranceDeduction + tax.totalTax;

  // 실수령액
  const netSalary = monthlySalary - totalDeduction;
  
  // 총 인건비
  const totalCost = monthlySalary + totalEmployerCost;

  return {
    monthlySalary,
    year,
    nationalPension,
    healthInsurance,
    employmentInsurance,
    industrialAccidentInsurance,
    longTermCareInsurance,
    tax,
    totalInsuranceDeduction: Number(totalInsuranceDeduction.toFixed(0)),
    totalDeduction: Number(totalDeduction.toFixed(0)),
    totalEmployerCost: Number(totalEmployerCost.toFixed(0)),
    netSalary: Number(netSalary.toFixed(0)),
    totalCost: Number(totalCost.toFixed(0)),
  };
}

