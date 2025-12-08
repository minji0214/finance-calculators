// 세율 타입
export type TaxType = 'general' | 'tax-free' | 'tax-benefit';

// 예금 계산 입력 파라미터
export interface DepositInput {
  principal: number; // 예치금액
  annualRate: number; // 금리 (%)
  period: number; // 기간
  periodUnit: 'month' | 'year'; // 기간 단위
  interestType: 'simple' | 'compound'; // 단리/복리
  taxType: TaxType; // 과세 여부
}

// 적금 계산 입력 파라미터
export interface InstallmentInput {
  monthlyDeposit: number; // 매월 납입금
  annualRate: number; // 금리 (%)
  period: number; // 기간 (개월)
  taxType: TaxType; // 과세 여부
}

// 예금 계산 결과
export interface DepositResult {
  principal: number;
  annualRate: number;
  period: number;
  periodUnit: 'month' | 'year';
  interestType: 'simple' | 'compound';
  taxType: TaxType;
  beforeTaxInterest: number; // 세전 이자
  afterTaxInterest: number; // 세후 이자
  maturityAmount: number; // 만기수령액
  taxAmount: number; // 세금
}

// 적금 계산 결과
export interface InstallmentResult {
  monthlyDeposit: number;
  annualRate: number;
  period: number;
  totalDeposit: number; // 총 납입금
  beforeTaxInterest: number; // 세전 이자
  afterTaxInterest: number; // 세후 이자
  maturityAmount: number; // 만기수령액
  taxAmount: number; // 세금
}


