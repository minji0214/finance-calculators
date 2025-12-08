// 대출 상환 방식
export type RepaymentType = 'equal-payment' | 'equal-principal';

// 대출 중도상환 계산 입력 파라미터
export interface EarlyRepaymentInput {
  principal: number; // 대출 원금
  annualRate: number; // 연 이자율 (%)
  period: number; // 대출 기간 (개월)
  repaymentType: RepaymentType; // 상환 방식
  earlyRepaymentAmount: number; // 중도상환 금액
  earlyRepaymentMonth: number; // 중도상환 시점 (몇 개월째)
}

// 원리금균등상환 스케줄 항목
export interface EqualPaymentScheduleItem {
  month: number;
  principalPayment: number; // 원금 상환액
  interestPayment: number; // 이자 상환액
  totalPayment: number; // 총 상환액
  remainingPrincipal: number; // 잔여 원금
}

// 원금균등상환 스케줄 항목
export interface EqualPrincipalScheduleItem {
  month: number;
  principalPayment: number; // 원금 상환액
  interestPayment: number; // 이자 상환액
  totalPayment: number; // 총 상환액
  remainingPrincipal: number; // 잔여 원금
}

// 중도상환 전 계산 결과
export interface BeforeEarlyRepaymentResult {
  totalInterest: number; // 총 이자
  totalPayment: number; // 총 상환액
  monthlyPayment: number; // 월 상환액 (원리금균등상환의 경우)
  schedule: EqualPaymentScheduleItem[] | EqualPrincipalScheduleItem[];
}

// 중도상환 후 계산 결과
export interface AfterEarlyRepaymentResult {
  remainingPrincipal: number; // 중도상환 후 잔여 원금
  remainingPeriod: number; // 잔여 기간 (개월)
  totalInterest: number; // 총 이자
  totalPayment: number; // 총 상환액
  monthlyPayment: number; // 월 상환액 (원리금균등상환의 경우)
  schedule: EqualPaymentScheduleItem[] | EqualPrincipalScheduleItem[];
}

// 대출 중도상환 전체 계산 결과
export interface EarlyRepaymentResult {
  principal: number;
  annualRate: number;
  period: number;
  repaymentType: RepaymentType;
  earlyRepaymentAmount: number;
  earlyRepaymentMonth: number;
  beforeRepayment: BeforeEarlyRepaymentResult;
  afterRepayment: AfterEarlyRepaymentResult;
  interestSavings: number; // 이자 절감액
  totalSavings: number; // 총 절감액 (이자 절감액)
}


