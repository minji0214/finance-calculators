// 부동산 유형
export type PropertyType = 'apartment' | 'house' | 'officetel' | 'commercial';

// 규제지역 여부
export type RegulatedArea = 'yes' | 'no';

// 첫 주택 구매자 여부
export type FirstTimeBuyer = 'yes' | 'no';

// 실거주 의무 여부
export type ActualResidence = 'yes' | 'no';

// 단기매도 여부 (2년 이내 매도)
export type ShortTermSale = 'yes' | 'no';

// 부동산 구매 비용 계산 입력 파라미터
export interface RealEstateInput {
  propertyPrice: number; // 부동산 가격
  propertyType: PropertyType; // 부동산 유형
  regulatedArea: RegulatedArea; // 규제지역 여부
  firstTimeBuyer: FirstTimeBuyer; // 첫 주택 구매자 여부
  actualResidence: ActualResidence; // 실거주 의무 여부
  shortTermSale: ShortTermSale; // 단기매도 여부 (2년 이내)
  loanAmount: number; // 대출 금액
  loanRate: number; // 대출 이자율 (%)
  loanPeriod: number; // 대출 기간 (년)
}

// 취득세 계산 결과
export interface AcquisitionTaxResult {
  baseAmount: number; // 기준 금액
  rate: number; // 세율 (%)
  taxAmount: number; // 세금
  reduction: number; // 감면액 (첫 주택 구매자 등)
  finalTaxAmount: number; // 최종 세금
}

// 등록세 계산 결과
export interface RegistrationTaxResult {
  baseAmount: number; // 기준 금액
  rate: number; // 세율 (%)
  taxAmount: number; // 세금
  reduction: number; // 감면액
  finalTaxAmount: number; // 최종 세금
}

// 양도소득세 계산 결과
export interface CapitalGainsTaxResult {
  applicable: boolean; // 적용 여부
  rate: number; // 세율 (%)
  taxAmount: number; // 세금
  note: string; // 비고
}

// 중개수수료 계산 결과
export interface BrokerageFeeResult {
  rate: number; // 수수료율 (%)
  feeAmount: number; // 수수료
}

// 대출 비용 계산 결과
export interface LoanCostResult {
  loanAmount: number; // 대출 금액
  totalInterest: number; // 총 이자
  monthlyPayment: number; // 월 상환액
}

// 부동산 구매 전체 계산 결과
export interface RealEstateResult {
  propertyPrice: number;
  propertyType: PropertyType;
  regulatedArea: RegulatedArea;
  firstTimeBuyer: FirstTimeBuyer;
  actualResidence: ActualResidence;
  shortTermSale: ShortTermSale;
  
  // 세금 및 수수료
  acquisitionTax: AcquisitionTaxResult;
  registrationTax: RegistrationTaxResult;
  capitalGainsTax: CapitalGainsTaxResult;
  brokerageFee: BrokerageFeeResult;
  stampTax: number; // 인지세
  
  // 대출 정보
  loanCost: LoanCostResult;
  
  // 총계
  totalTaxAndFee: number; // 총 세금 및 수수료
  totalCost: number; // 총 구매 비용 (부동산 가격 + 세금 + 수수료)
  downPayment: number; // 계약금 (부동산 가격 - 대출 금액)
  totalPayment: number; // 총 지출 (계약금 + 세금 + 수수료)
}

