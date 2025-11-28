// 계산 입력 파라미터
export interface CompoundInterestInput {
  principal: number;
  monthly: number;
  annualRate: number;
  years: number;
  compoundPerYear?: number;
}

// 스케줄 항목
export interface ScheduleItem {
  month: number;
  balance: number;
}

// 계산 결과
export interface CompoundInterestResult {
  principal: number;
  monthly: number;
  annualRate: number;
  years: number;
  compoundPerYear: number;
  months: number;
  total: number;
  invested: number;
  profit: number;
  schedule: ScheduleItem[];
}

