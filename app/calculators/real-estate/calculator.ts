import type {
  RealEstateInput,
  RealEstateResult,
  AcquisitionTaxResult,
  RegistrationTaxResult,
  CapitalGainsTaxResult,
  BrokerageFeeResult,
  LoanCostResult,
} from './types';

/**
 * 부동산 구매 비용 계산기 - 순수 계산 로직
 * 
 * 최근 부동산 규제 반영:
 * - 첫 주택 구매자 혜택 (취득세, 등록세 감면)
 * - 규제지역 추가 세금
 * - 단기매도 양도소득세 (2년 이내)
 * - 실거주 의무
 */

/**
 * 취득세 계산
 */
function calculateAcquisitionTax(
  propertyPrice: number,
  propertyType: string,
  firstTimeBuyer: string,
  regulatedArea: string
): AcquisitionTaxResult {
  let baseAmount = propertyPrice;
  let rate = 0;
  let reduction = 0;

  // 기본 취득세율 (주택 기준)
  if (propertyType === 'apartment' || propertyType === 'house') {
    // 주택 취득세율 (2025년 기준)
    if (baseAmount <= 600000000) {
      // 6억원 이하: 1%
      rate = 1.0;
    } else if (baseAmount <= 1200000000) {
      // 6억원 초과 12억원 이하: 2%
      rate = 2.0;
    } else {
      // 12억원 초과: 4%
      rate = 4.0;
    }

    // 첫 주택 구매자 감면 (1.2억원 이하 주택, 1가구 1주택)
    if (firstTimeBuyer === 'yes' && baseAmount <= 120000000) {
      // 취득세 전액 면제
      reduction = (baseAmount * rate) / 100;
    } else if (firstTimeBuyer === 'yes' && baseAmount <= 600000000) {
      // 6억원 이하: 50% 감면
      reduction = (baseAmount * rate) / 100 / 2;
    }
  } else {
    // 오피스텔, 상업용: 4%
    rate = 4.0;
  }

  // 규제지역 추가 (10% 가산)
  if (regulatedArea === 'yes' && propertyType !== 'commercial') {
    rate = rate * 1.1;
  }

  const taxAmount = (baseAmount * rate) / 100;
  const finalTaxAmount = Math.max(0, taxAmount - reduction);

  return {
    baseAmount,
    rate: Number(rate.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(0)),
    reduction: Number(reduction.toFixed(0)),
    finalTaxAmount: Number(finalTaxAmount.toFixed(0)),
  };
}

/**
 * 등록세 계산
 */
function calculateRegistrationTax(
  propertyPrice: number,
  propertyType: string,
  firstTimeBuyer: string
): RegistrationTaxResult {
  let baseAmount = propertyPrice;
  let rate = 0;
  let reduction = 0;

  // 기본 등록세율
  if (propertyType === 'apartment' || propertyType === 'house') {
    rate = 0.8; // 주택: 0.8%
  } else {
    rate = 0.5; // 오피스텔, 상업용: 0.5%
  }

  // 첫 주택 구매자 감면 (1.2억원 이하 주택)
  if (
    firstTimeBuyer === 'yes' &&
    (propertyType === 'apartment' || propertyType === 'house') &&
    baseAmount <= 120000000
  ) {
    // 등록세 전액 면제
    reduction = (baseAmount * rate) / 100;
  }

  const taxAmount = (baseAmount * rate) / 100;
  const finalTaxAmount = Math.max(0, taxAmount - reduction);

  return {
    baseAmount,
    rate: Number(rate.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(0)),
    reduction: Number(reduction.toFixed(0)),
    finalTaxAmount: Number(finalTaxAmount.toFixed(0)),
  };
}

/**
 * 양도소득세 계산 (단기매도 시)
 */
function calculateCapitalGainsTax(
  propertyPrice: number,
  propertyType: string,
  shortTermSale: string,
  regulatedArea: string,
  actualResidence: string
): CapitalGainsTaxResult {
  if (shortTermSale !== 'yes') {
    return {
      applicable: false,
      rate: 0,
      taxAmount: 0,
      note: '2년 이상 보유 시 양도소득세 없음',
    };
  }

  // 단기매도 양도소득세 (2년 이내)
  let rate = 0;

  if (propertyType === 'apartment' || propertyType === 'house') {
    // 주택 단기매도
    if (regulatedArea === 'yes') {
      // 규제지역: 70%
      rate = 70.0;
    } else {
      // 비규제지역: 60%
      rate = 60.0;
    }

    // 실거주 의무 미이행 시 추가 20% 가산
    if (actualResidence === 'no' && regulatedArea === 'yes') {
      rate = 70.0; // 이미 최대치
    }
  } else {
    // 오피스텔, 상업용: 30%
    rate = 30.0;
  }

  // 양도소득세는 양도차익에 대해 계산 (여기서는 가격의 일정 비율로 추정)
  // 실제로는 (양도가액 - 취득가액 - 필요경비)에 대해 계산
  const estimatedGain = propertyPrice * 0.1; // 추정 차익 (10% 가정)
  const taxAmount = (estimatedGain * rate) / 100;

  return {
    applicable: true,
    rate: Number(rate.toFixed(1)),
    taxAmount: Number(taxAmount.toFixed(0)),
    note: '2년 이내 매도 시 적용 (실제 차익 기준 계산)',
  };
}

/**
 * 중개수수료 계산
 */
function calculateBrokerageFee(propertyPrice: number): BrokerageFeeResult {
  let feeAmount = 0;

  // 중개수수료 (2025년 기준)
  if (propertyPrice <= 50000000) {
    // 5천만원 이하: 0.4% (상한 20만원)
    feeAmount = Math.min((propertyPrice * 0.4) / 100, 200000);
  } else if (propertyPrice <= 200000000) {
    // 5천만원 초과 2억원 이하: 0.3% (상한 60만원)
    feeAmount = Math.min((propertyPrice * 0.3) / 100, 600000);
  } else if (propertyPrice <= 900000000) {
    // 2억원 초과 9억원 이하: 0.2% (상한 120만원)
    feeAmount = Math.min((propertyPrice * 0.2) / 100, 1200000);
  } else {
    // 9억원 초과: 0.1% (상한 200만원)
    feeAmount = Math.min((propertyPrice * 0.1) / 100, 2000000);
  }

  const rate = (feeAmount / propertyPrice) * 100;

  return {
    rate: Number(rate.toFixed(3)),
    feeAmount: Number(feeAmount.toFixed(0)),
  };
}

/**
 * 인지세 계산
 */
function calculateStampTax(propertyPrice: number): number {
  // 인지세는 계약서 작성 시 발생 (부동산 가격 기준)
  // 1억원 이하: 0.1%, 1억원 초과: 0.2%
  if (propertyPrice <= 100000000) {
    return Number(((propertyPrice * 0.1) / 100).toFixed(0));
  } else {
    return Number(((propertyPrice * 0.2) / 100).toFixed(0));
  }
}

/**
 * 대출 비용 계산
 */
function calculateLoanCost(
  loanAmount: number,
  loanRate: number,
  loanPeriod: number
): LoanCostResult {
  if (loanAmount === 0) {
    return {
      loanAmount: 0,
      totalInterest: 0,
      monthlyPayment: 0,
    };
  }

  const monthlyRate = loanRate / 100 / 12;
  const months = loanPeriod * 12;

  // 원리금균등상환 계산
  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / months;
  } else {
    const annuityFactor =
      (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate;
    monthlyPayment = loanAmount / annuityFactor;
  }

  const totalInterest = monthlyPayment * months - loanAmount;

  return {
    loanAmount,
    totalInterest: Number(totalInterest.toFixed(0)),
    monthlyPayment: Number(monthlyPayment.toFixed(0)),
  };
}

/**
 * 부동산 구매 비용 계산
 */
export function calculateRealEstateCost(
  input: RealEstateInput
): RealEstateResult {
  const {
    propertyPrice,
    propertyType,
    regulatedArea,
    firstTimeBuyer,
    actualResidence,
    shortTermSale,
    loanAmount,
    loanRate,
    loanPeriod,
  } = input;

  // 세금 및 수수료 계산
  const acquisitionTax = calculateAcquisitionTax(
    propertyPrice,
    propertyType,
    firstTimeBuyer,
    regulatedArea
  );

  const registrationTax = calculateRegistrationTax(
    propertyPrice,
    propertyType,
    firstTimeBuyer
  );

  const capitalGainsTax = calculateCapitalGainsTax(
    propertyPrice,
    propertyType,
    shortTermSale,
    regulatedArea,
    actualResidence
  );

  const brokerageFee = calculateBrokerageFee(propertyPrice);
  const stampTax = calculateStampTax(propertyPrice);

  // 대출 비용 계산
  const loanCost = calculateLoanCost(loanAmount, loanRate, loanPeriod);

  // 총계 계산
  const totalTaxAndFee =
    acquisitionTax.finalTaxAmount +
    registrationTax.finalTaxAmount +
    brokerageFee.feeAmount +
    stampTax;

  const totalCost = propertyPrice + totalTaxAndFee;
  const downPayment = propertyPrice - loanAmount;
  const totalPayment = downPayment + totalTaxAndFee;

  return {
    propertyPrice,
    propertyType,
    regulatedArea,
    firstTimeBuyer,
    actualResidence,
    shortTermSale,
    acquisitionTax,
    registrationTax,
    capitalGainsTax,
    brokerageFee,
    stampTax,
    loanCost,
    totalTaxAndFee: Number(totalTaxAndFee.toFixed(0)),
    totalCost: Number(totalCost.toFixed(0)),
    downPayment: Number(downPayment.toFixed(0)),
    totalPayment: Number(totalPayment.toFixed(0)),
  };
}


