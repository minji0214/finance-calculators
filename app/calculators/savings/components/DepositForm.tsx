'use client';

import { useState, useEffect } from 'react';
import { calculateDeposit } from '../calculator';
import type { DepositInput, DepositResult, TaxType } from '../types';
import { formatKoreanCurrency, formatNumberWithCommas, parseKoreanInput } from '../utils';
import { DepositResultCard } from './ResultCard';

export default function DepositForm() {
  const [principal, setPrincipal] = useState<number>(0);
  const [annualRate, setAnnualRate] = useState<number>(3);
  const [period, setPeriod] = useState<number>(12);
  const [periodUnit, setPeriodUnit] = useState<'month' | 'year'>('month');
  const [interestType, setInterestType] = useState<'simple' | 'compound'>('simple');
  const [taxType, setTaxType] = useState<TaxType>('general');
  const [result, setResult] = useState<DepositResult | null>(null);
  const [principalInput, setPrincipalInput] = useState<string>('');

  useEffect(() => {
    if (principal === 0) {
      setResult(null);
      return;
    }

    try {
      const calculatedResult = calculateDeposit({
        principal,
        annualRate,
        period,
        periodUnit,
        interestType,
        taxType,
      });
      setResult(calculatedResult);
    } catch (error) {
      console.error('계산 중 오류가 발생했습니다:', error);
    }
  }, [principal, annualRate, period, periodUnit, interestType, taxType]);

  const handleQuickAdd = (amount: number) => {
    const newValue = principal + amount;
    setPrincipal(newValue);
    setPrincipalInput(newValue.toString());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg mb-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
          {/* 예치금액 */}
          <div>
            <label
              htmlFor="deposit-principal"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              예치금액
            </label>
            <div className="relative">
              <input
                id="deposit-principal"
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
              {[100000, 1000000, 10000000].map((amount) => (
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
              htmlFor="deposit-rate"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              금리 (%)
            </label>
            <input
              id="deposit-rate"
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
              htmlFor="deposit-period"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              기간
            </label>
            <div className="flex gap-2">
              <input
                id="deposit-period"
                type="number"
                inputMode="numeric"
                value={period || ''}
                onChange={(e) => setPeriod(Math.max(1, Number(e.target.value)))}
                placeholder="12"
                className="flex-1 px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              <select
                value={periodUnit}
                onChange={(e) => setPeriodUnit(e.target.value as 'month' | 'year')}
                className="px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 bg-white"
              >
                <option value="month">개월</option>
                <option value="year">년</option>
              </select>
            </div>
          </div>

          {/* 이자 방식 */}
          <div>
            <label
              htmlFor="deposit-interest-type"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              이자 방식
            </label>
            <select
              id="deposit-interest-type"
              value={interestType}
              onChange={(e) => setInterestType(e.target.value as 'simple' | 'compound')}
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 bg-white"
            >
              <option value="simple">단리</option>
              <option value="compound">복리</option>
            </select>
          </div>

          {/* 과세 옵션 */}
          <div className="md:col-span-2">
            <label className="block mb-3 font-semibold text-base text-slate-700">
              과세 옵션
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => setTaxType('general')}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  taxType === 'general'
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
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
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
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
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
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
          <DepositResultCard result={result} />
        </div>
      )}
    </div>
  );
}

