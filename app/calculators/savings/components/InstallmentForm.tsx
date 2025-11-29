'use client';

import { useState, useEffect } from 'react';
import { calculateInstallment } from '../calculator';
import type { InstallmentResult, TaxType } from '../types';
import { formatKoreanCurrency, formatNumberWithCommas, parseKoreanInput } from '../utils';
import { InstallmentResultCard } from './ResultCard';

export default function InstallmentForm() {
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(0);
  const [annualRate, setAnnualRate] = useState<number>(3);
  const [period, setPeriod] = useState<number>(12);
  const [taxType, setTaxType] = useState<TaxType>('general');
  const [result, setResult] = useState<InstallmentResult | null>(null);
  const [monthlyDepositInput, setMonthlyDepositInput] = useState<string>('');

  useEffect(() => {
    if (monthlyDeposit === 0) {
      setResult(null);
      return;
    }

    try {
      const calculatedResult = calculateInstallment({
        monthlyDeposit,
        annualRate,
        period,
        taxType,
      });
      setResult(calculatedResult);
    } catch (error) {
      console.error('계산 중 오류가 발생했습니다:', error);
    }
  }, [monthlyDeposit, annualRate, period, taxType]);

  const handleQuickAdd = (amount: number) => {
    const newValue = monthlyDeposit + amount;
    setMonthlyDeposit(newValue);
    setMonthlyDepositInput(newValue.toString());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg mb-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
          {/* 매월 납입금 */}
          <div>
            <label
              htmlFor="installment-monthly"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              매월 납입금
            </label>
            <div className="relative">
              <input
                id="installment-monthly"
                type="text"
                inputMode="numeric"
                value={
                  monthlyDepositInput !== ''
                    ? formatNumberWithCommas(monthlyDepositInput)
                    : monthlyDeposit > 0
                      ? formatNumberWithCommas(monthlyDeposit)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setMonthlyDepositInput(e.target.value);
                  setMonthlyDeposit(value);
                }}
                onBlur={() => {
                  setMonthlyDepositInput(
                    monthlyDeposit > 0 ? monthlyDeposit.toString() : ''
                  );
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {monthlyDeposit > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(monthlyDeposit)}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[100000, 200000, 500000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd(amount)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-pointer transition-all hover:bg-slate-200 hover:border-slate-300"
                >
                  +{formatKoreanCurrency(amount).replace('원', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 금리 */}
          <div>
            <label
              htmlFor="installment-rate"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              금리 (%)
            </label>
            <input
              id="installment-rate"
              type="number"
              inputMode="numeric"
              step="0.1"
              value={annualRate || ''}
              onChange={(e) => setAnnualRate(Math.max(0, Number(e.target.value)))}
              placeholder="3"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
          </div>

          {/* 기간 */}
          <div>
            <label
              htmlFor="installment-period"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              기간 (개월)
            </label>
            <input
              id="installment-period"
              type="number"
              inputMode="numeric"
              value={period || ''}
              onChange={(e) => setPeriod(Math.max(1, Number(e.target.value)))}
              placeholder="12"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
          </div>

          {/* 과세 옵션 */}
          <div>
            <label className="block mb-3 font-semibold text-base text-slate-700">
              과세 옵션
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTaxType('general')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  taxType === 'general'
                    ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-sm font-medium">일반과세</div>
                <div className="text-xs text-slate-500 mt-1">15.4%</div>
              </button>
              <button
                onClick={() => setTaxType('tax-benefit')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  taxType === 'tax-benefit'
                    ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-sm font-medium">세제혜택</div>
                <div className="text-xs text-slate-500 mt-1">9.5%</div>
              </button>
              <button
                onClick={() => setTaxType('tax-free')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  taxType === 'tax-free'
                    ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-sm font-medium">비과세</div>
                <div className="text-xs text-slate-500 mt-1">0%</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 결과 카드 */}
      {result && (
        <div className="mb-8">
          <InstallmentResultCard result={result} />
        </div>
      )}
    </div>
  );
}

