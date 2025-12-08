import type { CompoundInterestInput, CompoundInterestResult, ScheduleItem } from './types';

/**
 * 복리 계산기 - 순수 계산 로직
 * 
 * 매월 납입 방식: 매월 monthly를 먼저 더한 뒤 이자 적용(월복리)
 * annualRate는 % 형식 → monthlyRate = annualRate / compoundPerYear / 100
 */
export function calculateCompoundInterest(
  input: CompoundInterestInput
): CompoundInterestResult {
  const {
    principal,
    monthly,
    annualRate,
    years,
    compoundPerYear = 12,
  } = input;

  const months = years * 12;
  const periods = years * compoundPerYear;
  let balance = principal;
  const ratePerPeriod = annualRate / 100 / compoundPerYear;
  const schedule: ScheduleItem[] = [];

  // 매월 계산 (월 복리 기준)
  for (let month = 1; month <= months; month++) {
    // 매월 초에 납입
    balance += monthly;

    // 복리 이자 적용 (월 단위)
    // compoundPerYear가 12면 매월 이자 적용
    if (compoundPerYear === 12) {
      balance *= 1 + ratePerPeriod;
    } else {
      // 다른 복리 주기의 경우, 해당 월이 복리 적용 시점인지 확인
      const periodIndex = Math.floor(((month - 1) * compoundPerYear) / 12);
      const nextPeriodIndex = Math.floor((month * compoundPerYear) / 12);
      if (nextPeriodIndex > periodIndex) {
        balance *= 1 + ratePerPeriod;
      }
    }

    schedule.push({ month, balance: Number(balance.toFixed(2)) });
  }

  const total = Number(balance.toFixed(2));
  const invested = Number((principal + monthly * months).toFixed(2));
  const profit = Number((total - invested).toFixed(2));

  return {
    principal,
    monthly,
    annualRate,
    years,
    compoundPerYear,
    months,
    total,
    invested,
    profit,
    schedule,
  };
}

