'use client';

import { useState, useEffect } from 'react';
import { calculateRealEstateCost } from '../calculator';
import type { RealEstateResult, PropertyType } from '../types';
import {
  formatNumberWithCommas,
  parseKoreanInput,
  formatKoreanCurrency,
} from '../utils';
import ResultCard from './ResultCard';

export default function RealEstateForm() {
  const [propertyPrice, setPropertyPrice] = useState<number>(0);
  const [propertyType, setPropertyType] = useState<PropertyType>('apartment');
  const [regulatedArea, setRegulatedArea] = useState<'yes' | 'no'>('no');
  const [firstTimeBuyer, setFirstTimeBuyer] = useState<'yes' | 'no'>('no');
  const [actualResidence, setActualResidence] = useState<'yes' | 'no'>('yes');
  const [shortTermSale, setShortTermSale] = useState<'yes' | 'no'>('no');
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [loanRate, setLoanRate] = useState<number>(3.5);
  const [loanPeriod, setLoanPeriod] = useState<number>(20);
  const [result, setResult] = useState<RealEstateResult | null>(null);

  const [propertyPriceInput, setPropertyPriceInput] = useState<string>('');
  const [loanAmountInput, setLoanAmountInput] = useState<string>('');

  useEffect(() => {
    if (propertyPrice === 0) {
      setResult(null);
      return;
    }

    try {
      const calculatedResult = calculateRealEstateCost({
        propertyPrice,
        propertyType,
        regulatedArea,
        firstTimeBuyer,
        actualResidence,
        shortTermSale,
        loanAmount: Math.min(loanAmount, propertyPrice),
        loanRate,
        loanPeriod,
      });
      setResult(calculatedResult);
    } catch (error) {
      console.error('계산 중 오류가 발생했습니다:', error);
    }
  }, [
    propertyPrice,
    propertyType,
    regulatedArea,
    firstTimeBuyer,
    actualResidence,
    shortTermSale,
    loanAmount,
    loanRate,
    loanPeriod,
  ]);

  const handleQuickAdd = (field: 'property' | 'loan', amount: number) => {
    if (field === 'property') {
      const newValue = propertyPrice + amount;
      setPropertyPrice(newValue);
      setPropertyPriceInput(newValue.toString());
    } else {
      const newValue = loanAmount + amount;
      setLoanAmount(newValue);
      setLoanAmountInput(newValue.toString());
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg mb-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
          {/* 부동산 가격 */}
          <div>
            <label
              htmlFor="property-price"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              부동산 가격
            </label>
            <div className="relative">
              <input
                id="property-price"
                type="text"
                inputMode="numeric"
                value={
                  propertyPriceInput !== ''
                    ? formatNumberWithCommas(propertyPriceInput)
                    : propertyPrice > 0
                      ? formatNumberWithCommas(propertyPrice)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setPropertyPriceInput(e.target.value);
                  setPropertyPrice(value);
                }}
                onBlur={() => {
                  setPropertyPriceInput(
                    propertyPrice > 0 ? propertyPrice.toString() : ''
                  );
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {propertyPrice > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(propertyPrice)}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[100000000, 300000000, 500000000, 1000000000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd('property', amount)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-pointer transition-all hover:bg-slate-200 hover:border-slate-300"
                >
                  +{formatKoreanCurrency(amount).replace('원', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 부동산 유형 */}
          <div>
            <label
              htmlFor="property-type"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              부동산 유형
            </label>
            <select
              id="property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value as PropertyType)}
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 bg-white"
            >
              <option value="apartment">아파트</option>
              <option value="house">주택</option>
              <option value="officetel">오피스텔</option>
              <option value="commercial">상업용</option>
            </select>
          </div>

          {/* 규제지역 여부 */}
          <div>
            <label className="block mb-3 font-semibold text-base text-slate-700">
              규제지역 여부
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRegulatedArea('yes')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  regulatedArea === 'yes'
                    ? 'border-red-500 bg-red-50 text-red-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                규제지역
              </button>
              <button
                onClick={() => setRegulatedArea('no')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  regulatedArea === 'no'
                    ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                비규제지역
              </button>
            </div>
          </div>

          {/* 첫 주택 구매자 */}
          <div>
            <label className="block mb-3 font-semibold text-base text-slate-700">
              첫 주택 구매자
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFirstTimeBuyer('yes')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  firstTimeBuyer === 'yes'
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                예
              </button>
              <button
                onClick={() => setFirstTimeBuyer('no')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  firstTimeBuyer === 'no'
                    ? 'border-slate-500 bg-slate-50 text-slate-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                아니오
              </button>
            </div>
            {firstTimeBuyer === 'yes' && (
              <div className="mt-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
                💡 1.2억원 이하 주택 시 취득세, 등록세 감면
              </div>
            )}
          </div>

          {/* 실거주 의무 */}
          <div>
            <label className="block mb-3 font-semibold text-base text-slate-700">
              실거주 의무
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setActualResidence('yes')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  actualResidence === 'yes'
                    ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                실거주
              </button>
              <button
                onClick={() => setActualResidence('no')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  actualResidence === 'no'
                    ? 'border-red-500 bg-red-50 text-red-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                비실거주
              </button>
            </div>
          </div>

          {/* 단기매도 여부 */}
          <div>
            <label className="block mb-3 font-semibold text-base text-slate-700">
              2년 이내 매도 예정
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShortTermSale('yes')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  shortTermSale === 'yes'
                    ? 'border-red-500 bg-red-50 text-red-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                예
              </button>
              <button
                onClick={() => setShortTermSale('no')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  shortTermSale === 'no'
                    ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                아니오
              </button>
            </div>
            {shortTermSale === 'yes' && (
              <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-lg">
                ⚠️ 단기매도 시 양도소득세 60~70% 적용
              </div>
            )}
          </div>

          {/* 대출 금액 */}
          <div>
            <label
              htmlFor="loan-amount"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              대출 금액 (선택)
            </label>
            <div className="relative">
              <input
                id="loan-amount"
                type="text"
                inputMode="numeric"
                value={
                  loanAmountInput !== ''
                    ? formatNumberWithCommas(loanAmountInput)
                    : loanAmount > 0
                      ? formatNumberWithCommas(loanAmount)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setLoanAmountInput(e.target.value);
                  setLoanAmount(Math.min(value, propertyPrice || Infinity));
                }}
                onBlur={() => {
                  setLoanAmountInput(loanAmount > 0 ? loanAmount.toString() : '');
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {loanAmount > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(loanAmount)}
                </div>
              )}
            </div>
            {propertyPrice > 0 && (
              <div className="mt-2 space-y-1">
                {propertyPrice > 600000000 ? (
                  <div className="text-sm text-red-600 bg-red-50 p-2 rounded-lg">
                    ⚠️ 6억원 초과 주택은 주택담보대출 불가 (전액 현금 구매 필요)
                  </div>
                ) : (
                  <div className="text-sm text-slate-500">
                    최대 대출 가능: {formatNumberWithCommas(propertyPrice)}원
                    {regulatedArea === 'no' && firstTimeBuyer === 'yes' && (
                      <span className="ml-2 text-blue-600">(첫 주택 구매자 LTV 80%)</span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 대출 이자율 */}
          {loanAmount > 0 && (
            <div>
              <label
                htmlFor="loan-rate"
                className="block mb-3 font-semibold text-base text-slate-700"
              >
                대출 이자율 (%)
              </label>
              <input
                id="loan-rate"
                type="number"
                inputMode="numeric"
                step="0.1"
                value={loanRate || ''}
                onChange={(e) => setLoanRate(Math.max(0, Number(e.target.value)))}
                placeholder="3.5"
                className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
            </div>
          )}

          {/* 대출 기간 */}
          {loanAmount > 0 && (
            <div>
              <label
                htmlFor="loan-period"
                className="block mb-3 font-semibold text-base text-slate-700"
              >
                대출 기간 (년)
              </label>
              <input
                id="loan-period"
                type="number"
                inputMode="numeric"
                value={loanPeriod || ''}
                onChange={(e) => setLoanPeriod(Math.max(1, Number(e.target.value)))}
                placeholder="20"
                className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
            </div>
          )}
        </div>
      </div>

      {/* 결과 카드 */}
      {result && (
        <div className="mb-8">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}

