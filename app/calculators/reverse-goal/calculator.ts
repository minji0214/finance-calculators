import type {
  ReverseGoalInput,
  MonthlyDepositResult,
  PeriodResult,
  InitialDepositResult,
  ReverseGoalResult,
} from './types';

/**
 * 목표 금액 역산 계산기 - 순수 계산 로직
 * 
 * 복리 공식: FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]
 * 
 * 역산:
 * 1. 매월 납입액 계산: PMT = (FV - PV(1+r)^n) / [((1+r)^n - 1) / r]
 * 2. 기간 계산: n = log((FV × r + PMT) / (PV × r + PMT)) / log(1+r)
 * 3. 초기 예치금 계산: PV = (FV - PMT × [((1+r)^n - 1) / r]) / (1+r)^n
 */

/**
 * 매월 납입액 역산 계산
 * 목표 금액을 달성하기 위해 매월 얼마를 저축해야 하는지 계산
 */
export function calculateMonthlyDeposit(
  input: ReverseGoalInput
): MonthlyDepositResult {
  const { targetAmount, annualRate, period = 12, initialDeposit = 0 } = input;

  const monthlyRate = annualRate / 100 / 12;
  const months = period;

  // 초기 예치금의 미래가치
  const futureValueOfInitial = initialDeposit * Math.pow(1 + monthlyRate, months);

  // 목표 금액에서 초기 예치금의 미래가치를 뺀 금액
  const remainingAmount = targetAmount - futureValueOfInitial;

  // 매월 납입액 계산
  let requiredMonthlyDeposit: number;
  if (monthlyRate === 0) {
    // 이자율이 0%인 경우
    requiredMonthlyDeposit = remainingAmount / months;
  } else {
    const annuityFactor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    requiredMonthlyDeposit = remainingAmount / annuityFactor;
  }

  // 총 납입금
  const totalDeposit = initialDeposit + requiredMonthlyDeposit * months;

  // 총 이자
  const totalInterest = targetAmount - totalDeposit;

  return {
    targetAmount,
    annualRate,
    period: months,
    initialDeposit,
    requiredMonthlyDeposit: Number(requiredMonthlyDeposit.toFixed(0)),
    totalDeposit: Number(totalDeposit.toFixed(0)),
    totalInterest: Number(totalInterest.toFixed(0)),
  };
}

/**
 * 기간 역산 계산
 * 목표 금액을 달성하기 위해 몇 개월이 필요한지 계산
 */
export function calculatePeriod(input: ReverseGoalInput): PeriodResult {
  const {
    targetAmount,
    annualRate,
    monthlyDeposit = 0,
    initialDeposit = 0,
  } = input;

  const monthlyRate = annualRate / 100 / 12;

  // 이자율이 0%인 경우
  if (monthlyRate === 0) {
    const requiredPeriod = Math.ceil(
      (targetAmount - initialDeposit) / monthlyDeposit
    );
    const totalDeposit = initialDeposit + monthlyDeposit * requiredPeriod;
    const totalInterest = targetAmount - totalDeposit;

    return {
      targetAmount,
      annualRate,
      monthlyDeposit,
      initialDeposit,
      requiredPeriod,
      totalDeposit: Number(totalDeposit.toFixed(0)),
      totalInterest: Number(totalInterest.toFixed(0)),
    };
  }

  // 복리 공식으로 기간 역산
  // FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r]
  // 이를 n에 대해 풀기
  let requiredPeriod = 0;
  let balance = initialDeposit;

  // 반복 계산으로 근사치 구하기
  for (let month = 1; month <= 600; month++) {
    // 매월 초에 납입
    balance += monthlyDeposit;
    // 복리 이자 적용
    balance *= 1 + monthlyRate;

    if (balance >= targetAmount) {
      requiredPeriod = month;
      break;
    }
  }

  // 정확한 계산을 위해 이분법 사용
  if (requiredPeriod === 0) {
    // 600개월(50년)을 넘어가면 계산 불가
    requiredPeriod = 600;
  } else {
    // 이분법으로 정확한 기간 찾기
    let low = Math.max(1, requiredPeriod - 12);
    let high = requiredPeriod + 12;

    for (let i = 0; i < 20; i++) {
      const mid = Math.floor((low + high) / 2);
      let testBalance = initialDeposit;
      for (let m = 1; m <= mid; m++) {
        testBalance += monthlyDeposit;
        testBalance *= 1 + monthlyRate;
      }

      if (testBalance >= targetAmount) {
        high = mid;
        requiredPeriod = mid;
      } else {
        low = mid + 1;
      }

      if (low >= high) break;
    }
  }

  const totalDeposit = initialDeposit + monthlyDeposit * requiredPeriod;
  const totalInterest = targetAmount - totalDeposit;

  return {
    targetAmount,
    annualRate,
    monthlyDeposit,
    initialDeposit,
    requiredPeriod,
    totalDeposit: Number(totalDeposit.toFixed(0)),
    totalInterest: Number(totalInterest.toFixed(0)),
  };
}

/**
 * 초기 예치금 역산 계산
 * 목표 금액을 달성하기 위해 초기에 얼마를 예치해야 하는지 계산
 */
export function calculateInitialDeposit(
  input: ReverseGoalInput
): InitialDepositResult {
  const { targetAmount, annualRate, period = 12, monthlyDeposit = 0 } = input;

  const monthlyRate = annualRate / 100 / 12;
  const months = period;

  // 매월 납입금의 미래가치
  let futureValueOfMonthly: number;
  if (monthlyRate === 0) {
    futureValueOfMonthly = monthlyDeposit * months;
  } else {
    const annuityFactor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    futureValueOfMonthly = monthlyDeposit * annuityFactor;
  }

  // 목표 금액에서 매월 납입금의 미래가치를 뺀 금액
  const remainingAmount = targetAmount - futureValueOfMonthly;

  // 초기 예치금 계산
  const requiredInitialDeposit = remainingAmount / Math.pow(1 + monthlyRate, months);

  // 총 납입금
  const totalDeposit = requiredInitialDeposit + monthlyDeposit * months;

  // 총 이자
  const totalInterest = targetAmount - totalDeposit;

  return {
    targetAmount,
    annualRate,
    period: months,
    monthlyDeposit,
    requiredInitialDeposit: Number(requiredInitialDeposit.toFixed(0)),
    totalDeposit: Number(totalDeposit.toFixed(0)),
    totalInterest: Number(totalInterest.toFixed(0)),
  };
}

/**
 * 통합 역산 계산 함수
 */
export function calculateReverseGoal(
  input: ReverseGoalInput
): ReverseGoalResult {
  switch (input.calculationType) {
    case 'monthly-deposit':
      return calculateMonthlyDeposit(input);
    case 'period':
      return calculatePeriod(input);
    case 'initial-deposit':
      return calculateInitialDeposit(input);
    default:
      return calculateMonthlyDeposit(input);
  }
}

