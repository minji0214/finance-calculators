import type {
  DepositInput,
  DepositResult,
  InstallmentInput,
  InstallmentResult,
} from './types';
import { getTaxRate } from './utils';

/**
 * 예금 계산기 - 순수 계산 로직
 * 
 * 단리: 이자 = 예치금 × (금리/100) × (기간(년))
 * 복리: 만기금액 = 예치금 × (1 + 금리/100)^(년)
 */
export function calculateDeposit(input: DepositInput): DepositResult {
  const { principal, annualRate, period, periodUnit, interestType, taxType } = input;

  // 기간을 년 단위로 변환
  const years = periodUnit === 'month' ? period / 12 : period;

  let maturityAmount: number;
  let beforeTaxInterest: number;

  if (interestType === 'simple') {
    // 단리 계산
    beforeTaxInterest = principal * (annualRate / 100) * years;
    maturityAmount = principal + beforeTaxInterest;
  } else {
    // 복리 계산
    maturityAmount = principal * Math.pow(1 + annualRate / 100, years);
    beforeTaxInterest = maturityAmount - principal;
  }

  // 세후 이자 계산
  const taxRate = getTaxRate(taxType);
  const taxAmount = beforeTaxInterest * taxRate;
  const afterTaxInterest = beforeTaxInterest - taxAmount;
  const finalMaturityAmount = principal + afterTaxInterest;

  return {
    principal,
    annualRate,
    period,
    periodUnit,
    interestType,
    taxType,
    beforeTaxInterest: Number(beforeTaxInterest.toFixed(2)),
    afterTaxInterest: Number(afterTaxInterest.toFixed(2)),
    maturityAmount: Number(finalMaturityAmount.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(2)),
  };
}

/**
 * 적금 계산기 - 순수 계산 로직
 * 
 * 월 적립식 적금(복리):
 * 만기금액 = 월납입금 × ((1 + 금리/12/100)^(기간) - 1) / (금리/12/100)
 */
export function calculateInstallment(input: InstallmentInput): InstallmentResult {
  const { monthlyDeposit, annualRate, period, taxType } = input;

  // 총 납입금
  const totalDeposit = monthlyDeposit * period;

  // 월 이자율
  const monthlyRate = annualRate / 100 / 12;

  // 만기금액 계산 (복리 공식)
  let maturityAmount: number;
  if (monthlyRate === 0) {
    // 금리가 0%인 경우
    maturityAmount = totalDeposit;
  } else {
    maturityAmount =
      monthlyDeposit *
      ((Math.pow(1 + monthlyRate, period) - 1) / monthlyRate);
  }

  // 세전 이자
  const beforeTaxInterest = maturityAmount - totalDeposit;

  // 세후 이자 계산
  const taxRate = getTaxRate(taxType);
  const taxAmount = beforeTaxInterest * taxRate;
  const afterTaxInterest = beforeTaxInterest - taxAmount;
  const finalMaturityAmount = totalDeposit + afterTaxInterest;

  return {
    monthlyDeposit,
    annualRate,
    period,
    totalDeposit: Number(totalDeposit.toFixed(2)),
    beforeTaxInterest: Number(beforeTaxInterest.toFixed(2)),
    afterTaxInterest: Number(afterTaxInterest.toFixed(2)),
    maturityAmount: Number(finalMaturityAmount.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(2)),
  };
}


