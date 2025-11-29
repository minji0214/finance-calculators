'use client';

import { useState, useEffect } from 'react';
import { calculateEarlyRepayment } from '../calculator';
import type { EarlyRepaymentResult, RepaymentType } from '../types';
import {
  formatNumberWithCommas,
  parseKoreanInput,
  formatKoreanCurrency,
} from '../utils';
import ResultCard from './ResultCard';

export default function EarlyRepaymentForm() {
  const [principal, setPrincipal] = useState<number>(0);
  const [annualRate, setAnnualRate] = useState<number>(3.5);
  const [period, setPeriod] = useState<number>(120);
  const [repaymentType, setRepaymentType] =
    useState<RepaymentType>('equal-payment');
  const [earlyRepaymentAmount, setEarlyRepaymentAmount] = useState<number>(0);
  const [earlyRepaymentMonth, setEarlyRepaymentMonth] = useState<number>(12);
  const [result, setResult] = useState<EarlyRepaymentResult | null>(null);

  const [principalInput, setPrincipalInput] = useState<string>('');
  const [earlyRepaymentInput, setEarlyRepaymentInput] = useState<string>('');

  useEffect(() => {
    if (principal === 0 || earlyRepaymentAmount === 0) {
      setResult(null);
      return;
    }

    if (earlyRepaymentMonth >= period) {
      setResult(null);
      return;
    }

    try {
      const calculatedResult = calculateEarlyRepayment({
        principal,
        annualRate,
        period,
        repaymentType,
        earlyRepaymentAmount,
        earlyRepaymentMonth,
      });
      setResult(calculatedResult);
    } catch (error) {
      console.error('계산 중 오류가 발생했습니다:', error);
    }
  }, [
    principal,
    annualRate,
    period,
    repaymentType,
    earlyRepaymentAmount,
    earlyRepaymentMonth,
  ]);

  const handleQuickAdd = (
    field: 'principal' | 'earlyRepayment',
    amount: number
  ) => {
    if (field === 'principal') {
      const newValue = principal + amount;
      setPrincipal(newValue);
      setPrincipalInput(newValue.toString());
    } else {
      const newValue = earlyRepaymentAmount + amount;
      setEarlyRepaymentAmount(newValue);
      setEarlyRepaymentInput(newValue.toString());
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg mb-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
          {/* 대출 원금 */}
          <div>
            <label
              htmlFor="principal"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              대출 원금
            </label>
            <div className="relative">
              <input
                id="principal"
                type="text"
                inputMode="numeric"
                value={
                  principalInput !== ''
                    ? formatNumberWithCommas(principalInput)
                    : principal > 0
                      ? formatNumberWithCommas(principal)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setPrincipalInput(e.target.value);
                  setPrincipal(value);
                }}
                onBlur={() => {
                  setPrincipalInput(principal > 0 ? principal.toString() : '');
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {principal > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(principal)}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[10000000, 50000000, 100000000, 300000000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd('principal', amount)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-pointer transition-all hover:bg-slate-200 hover:border-slate-300"
                >
                  +{formatKoreanCurrency(amount).replace('원', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 연 이자율 */}
          <div>
            <label
              htmlFor="annual-rate"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              연 이자율 (%)
            </label>
            <input
              id="annual-rate"
              type="number"
              inputMode="numeric"
              step="0.1"
              value={annualRate || ''}
              onChange={(e) => setAnnualRate(Math.max(0, Number(e.target.value)))}
              placeholder="3.5"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
          </div>

          {/* 대출 기간 */}
          <div>
            <label
              htmlFor="period"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              대출 기간 (개월)
            </label>
            <input
              id="period"
              type="number"
              inputMode="numeric"
              value={period || ''}
              onChange={(e) => setPeriod(Math.max(1, Number(e.target.value)))}
              placeholder="120"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
            <div className="mt-2 text-sm text-slate-500">
              {Math.floor(period / 12)}년 {period % 12}개월
            </div>
          </div>

          {/* 상환 방식 */}
          <div>
            <label
              htmlFor="repayment-type"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              상환 방식
            </label>
            <select
              id="repayment-type"
              value={repaymentType}
              onChange={(e) =>
                setRepaymentType(e.target.value as RepaymentType)
              }
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 bg-white"
            >
              <option value="equal-payment">원리금균등상환</option>
              <option value="equal-principal">원금균등상환</option>
            </select>
          </div>

          {/* 중도상환 금액 */}
          <div>
            <label
              htmlFor="early-repayment-amount"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              중도상환 금액
            </label>
            <div className="relative">
              <input
                id="early-repayment-amount"
                type="text"
                inputMode="numeric"
                value={
                  earlyRepaymentInput !== ''
                    ? formatNumberWithCommas(earlyRepaymentInput)
                    : earlyRepaymentAmount > 0
                      ? formatNumberWithCommas(earlyRepaymentAmount)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setEarlyRepaymentInput(e.target.value);
                  setEarlyRepaymentAmount(value);
                }}
                onBlur={() => {
                  setEarlyRepaymentInput(
                    earlyRepaymentAmount > 0
                      ? earlyRepaymentAmount.toString()
                      : ''
                  );
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {earlyRepaymentAmount > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(earlyRepaymentAmount)}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[1000000, 5000000, 10000000, 50000000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd('earlyRepayment', amount)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-pointer transition-all hover:bg-slate-200 hover:border-slate-300"
                >
                  +{formatKoreanCurrency(amount).replace('원', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 중도상환 시점 */}
          <div>
            <label
              htmlFor="early-repayment-month"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              중도상환 시점 (개월)
            </label>
            <input
              id="early-repayment-month"
              type="number"
              inputMode="numeric"
              value={earlyRepaymentMonth || ''}
              onChange={(e) => {
                const value = Math.max(1, Math.min(period - 1, Number(e.target.value)));
                setEarlyRepaymentMonth(value);
              }}
              placeholder="12"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
            <div className="mt-2 text-sm text-slate-500">
              {Math.floor(earlyRepaymentMonth / 12)}년{' '}
              {earlyRepaymentMonth % 12}개월째
            </div>
            {earlyRepaymentMonth >= period && (
              <div className="mt-2 text-sm text-red-600">
                중도상환 시점은 대출 기간보다 작아야 합니다.
              </div>
            )}
          </div>
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

