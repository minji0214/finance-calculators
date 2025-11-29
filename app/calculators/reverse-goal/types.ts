// 역산 계산 타입
export type CalculationType = 'monthly-deposit' | 'period' | 'initial-deposit';

// 목표 금액 역산 계산 입력 파라미터
export interface ReverseGoalInput {
  targetAmount: number; // 목표 금액
  annualRate: number; // 연 이자율 (%)
  period?: number; // 기간 (개월) - 매월 납입액 계산 시 필요
  monthlyDeposit?: number; // 매월 납입금 - 기간 계산 시 필요
  initialDeposit?: number; // 초기 예치금 - 매월 납입액 계산 시 선택
  calculationType: CalculationType; // 계산 타입
}

// 매월 납입액 계산 결과
export interface MonthlyDepositResult {
  targetAmount: number;
  annualRate: number;
  period: number;
  initialDeposit: number;
  requiredMonthlyDeposit: number; // 필요한 매월 납입액
  totalDeposit: number; // 총 납입금 (초기 + 월납입 × 기간)
  totalInterest: number; // 총 이자
}

// 기간 계산 결과
export interface PeriodResult {
  targetAmount: number;
  annualRate: number;
  monthlyDeposit: number;
  initialDeposit: number;
  requiredPeriod: number; // 필요한 기간 (개월)
  totalDeposit: number; // 총 납입금
  totalInterest: number; // 총 이자
}

// 초기 예치금 계산 결과
export interface InitialDepositResult {
  targetAmount: number;
  annualRate: number;
  period: number;
  monthlyDeposit: number;
  requiredInitialDeposit: number; // 필요한 초기 예치금
  totalDeposit: number; // 총 납입금
  totalInterest: number; // 총 이자
}

// 통합 결과 타입
export type ReverseGoalResult =
  | MonthlyDepositResult
  | PeriodResult
  | InitialDepositResult;

