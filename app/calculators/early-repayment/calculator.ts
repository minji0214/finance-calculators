import type {
  EarlyRepaymentInput,
  EarlyRepaymentResult,
  BeforeEarlyRepaymentResult,
  AfterEarlyRepaymentResult,
  EqualPaymentScheduleItem,
  EqualPrincipalScheduleItem,
  RepaymentType,
} from './types';

/**
 * 대출 중도상환 계산기 - 순수 계산 로직
 * 
 * 원리금균등상환: 매월 동일한 금액 상환
 * 원금균등상환: 매월 동일한 원금 + 이자 상환
 */

/**
 * 원리금균등상환 계산
 */
function calculateEqualPayment(
  principal: number,
  monthlyRate: number,
  period: number
): {
  monthlyPayment: number;
  schedule: EqualPaymentScheduleItem[];
  totalInterest: number;
} {
  const schedule: EqualPaymentScheduleItem[] = [];
  let remainingPrincipal = principal;
  let totalInterest = 0;

  // 월 상환액 계산
  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = principal / period;
  } else {
    const annuityFactor =
      (1 - Math.pow(1 + monthlyRate, -period)) / monthlyRate;
    monthlyPayment = principal / annuityFactor;
  }

  // 스케줄 생성
  for (let month = 1; month <= period; month++) {
    const interestPayment = remainingPrincipal * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingPrincipal -= principalPayment;
    totalInterest += interestPayment;

    schedule.push({
      month,
      principalPayment: Number(principalPayment.toFixed(0)),
      interestPayment: Number(interestPayment.toFixed(0)),
      totalPayment: Number(monthlyPayment.toFixed(0)),
      remainingPrincipal: Number(Math.max(0, remainingPrincipal).toFixed(0)),
    });
  }

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(0)),
    schedule,
    totalInterest: Number(totalInterest.toFixed(0)),
  };
}

/**
 * 원금균등상환 계산
 */
function calculateEqualPrincipal(
  principal: number,
  monthlyRate: number,
  period: number
): {
  schedule: EqualPrincipalScheduleItem[];
  totalInterest: number;
} {
  const schedule: EqualPrincipalScheduleItem[] = [];
  let remainingPrincipal = principal;
  let totalInterest = 0;

  const monthlyPrincipal = principal / period;

  // 스케줄 생성
  for (let month = 1; month <= period; month++) {
    const interestPayment = remainingPrincipal * monthlyRate;
    const totalPayment = monthlyPrincipal + interestPayment;
    remainingPrincipal -= monthlyPrincipal;
    totalInterest += interestPayment;

    schedule.push({
      month,
      principalPayment: Number(monthlyPrincipal.toFixed(0)),
      interestPayment: Number(interestPayment.toFixed(0)),
      totalPayment: Number(totalPayment.toFixed(0)),
      remainingPrincipal: Number(Math.max(0, remainingPrincipal).toFixed(0)),
    });
  }

  return {
    schedule,
    totalInterest: Number(totalInterest.toFixed(0)),
  };
}

/**
 * 중도상환 전 계산
 */
function calculateBeforeRepayment(
  principal: number,
  monthlyRate: number,
  period: number,
  repaymentType: RepaymentType
): BeforeEarlyRepaymentResult {
  if (repaymentType === 'equal-payment') {
    const { monthlyPayment, schedule, totalInterest } = calculateEqualPayment(
      principal,
      monthlyRate,
      period
    );
    return {
      totalInterest,
      totalPayment: principal + totalInterest,
      monthlyPayment,
      schedule,
    };
  } else {
    const { schedule, totalInterest } = calculateEqualPrincipal(
      principal,
      monthlyRate,
      period
    );
    return {
      totalInterest,
      totalPayment: principal + totalInterest,
      monthlyPayment: 0, // 원금균등상환은 월 상환액이 다름
      schedule,
    };
  }
}

/**
 * 중도상환 후 계산
 */
function calculateAfterRepayment(
  remainingPrincipal: number,
  monthlyRate: number,
  remainingPeriod: number,
  repaymentType: RepaymentType
): AfterEarlyRepaymentResult {
  if (repaymentType === 'equal-payment') {
    const { monthlyPayment, schedule, totalInterest } = calculateEqualPayment(
      remainingPrincipal,
      monthlyRate,
      remainingPeriod
    );
    return {
      remainingPrincipal,
      remainingPeriod,
      totalInterest,
      totalPayment: remainingPrincipal + totalInterest,
      monthlyPayment,
      schedule,
    };
  } else {
    const { schedule, totalInterest } = calculateEqualPrincipal(
      remainingPrincipal,
      monthlyRate,
      remainingPeriod
    );
    return {
      remainingPrincipal,
      remainingPeriod,
      totalInterest,
      totalPayment: remainingPrincipal + totalInterest,
      monthlyPayment: 0,
      schedule,
    };
  }
}

/**
 * 대출 중도상환 계산
 */
export function calculateEarlyRepayment(
  input: EarlyRepaymentInput
): EarlyRepaymentResult {
  const {
    principal,
    annualRate,
    period,
    repaymentType,
    earlyRepaymentAmount,
    earlyRepaymentMonth,
  } = input;

  const monthlyRate = annualRate / 100 / 12;

  // 중도상환 전 계산
  const beforeRepayment = calculateBeforeRepayment(
    principal,
    monthlyRate,
    period,
    repaymentType
  );

  // 중도상환 시점까지의 잔여 원금 계산
  let remainingPrincipal = principal;
  if (repaymentType === 'equal-payment') {
    // 원리금균등상환: 스케줄에서 잔여 원금 확인
    const schedule = beforeRepayment.schedule as EqualPaymentScheduleItem[];
    if (earlyRepaymentMonth > 0 && earlyRepaymentMonth <= schedule.length) {
      remainingPrincipal =
        schedule[earlyRepaymentMonth - 1].remainingPrincipal;
    }
  } else {
    // 원금균등상환: 스케줄에서 잔여 원금 확인
    const schedule = beforeRepayment.schedule as EqualPrincipalScheduleItem[];
    if (earlyRepaymentMonth > 0 && earlyRepaymentMonth <= schedule.length) {
      remainingPrincipal =
        schedule[earlyRepaymentMonth - 1].remainingPrincipal;
    }
  }

  // 중도상환 적용
  remainingPrincipal -= earlyRepaymentAmount;
  remainingPrincipal = Math.max(0, remainingPrincipal);

  // 잔여 기간
  const remainingPeriod = period - earlyRepaymentMonth;

  // 중도상환 후 계산
  const afterRepayment = calculateAfterRepayment(
    remainingPrincipal,
    monthlyRate,
    remainingPeriod,
    repaymentType
  );

  // 이자 절감액 계산
  const interestSavings =
    beforeRepayment.totalInterest - afterRepayment.totalInterest;

  return {
    principal,
    annualRate,
    period,
    repaymentType,
    earlyRepaymentAmount,
    earlyRepaymentMonth,
    beforeRepayment,
    afterRepayment,
    interestSavings: Number(interestSavings.toFixed(0)),
    totalSavings: Number(interestSavings.toFixed(0)),
  };
}

