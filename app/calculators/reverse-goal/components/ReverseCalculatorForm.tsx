'use client';

import { useState, useEffect } from 'react';
import { calculateReverseGoal } from '../calculator';
import type {
  ReverseGoalInput,
  ReverseGoalResult,
  CalculationType,
} from '../types';
import {
  formatNumberWithCommas,
  parseKoreanInput,
  formatKoreanCurrency,
} from '../utils';
import ResultCard from './ResultCard';

export default function ReverseCalculatorForm() {
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [annualRate, setAnnualRate] = useState<number>(3);
  const [period, setPeriod] = useState<number>(12);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(0);
  const [initialDeposit, setInitialDeposit] = useState<number>(0);
  const [calculationType, setCalculationType] =
    useState<CalculationType>('monthly-deposit');
  const [result, setResult] = useState<ReverseGoalResult | null>(null);

  const [targetAmountInput, setTargetAmountInput] = useState<string>('');
  const [monthlyDepositInput, setMonthlyDepositInput] = useState<string>('');
  const [initialDepositInput, setInitialDepositInput] = useState<string>('');

  useEffect(() => {
    if (targetAmount === 0) {
      setResult(null);
      return;
    }

    try {
      const input: ReverseGoalInput = {
        targetAmount,
        annualRate,
        calculationType,
      };

      if (calculationType === 'monthly-deposit') {
        input.period = period;
        input.initialDeposit = initialDeposit;
      } else if (calculationType === 'period') {
        input.monthlyDeposit = monthlyDeposit;
        input.initialDeposit = initialDeposit;
      } else {
        // initial-deposit
        input.period = period;
        input.monthlyDeposit = monthlyDeposit;
      }

      const calculatedResult = calculateReverseGoal(input);
      setResult(calculatedResult);
    } catch (error) {
      console.error('계산 중 오류가 발생했습니다:', error);
    }
  }, [
    targetAmount,
    annualRate,
    period,
    monthlyDeposit,
    initialDeposit,
    calculationType,
  ]);

  const handleQuickAdd = (
    field: 'target' | 'monthly' | 'initial',
    amount: number
  ) => {
    if (field === 'target') {
      const newValue = targetAmount + amount;
      setTargetAmount(newValue);
      setTargetAmountInput(newValue.toString());
    } else if (field === 'monthly') {
      const newValue = monthlyDeposit + amount;
      setMonthlyDeposit(newValue);
      setMonthlyDepositInput(newValue.toString());
    } else {
      const newValue = initialDeposit + amount;
      setInitialDeposit(newValue);
      setInitialDepositInput(newValue.toString());
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg mb-8 border border-slate-200">
        {/* 계산 타입 선택 */}
        <div className="mb-8">
          <label className="block mb-3 font-semibold text-base text-slate-700">
            계산 방식 선택
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={() => setCalculationType('monthly-deposit')}
              className={`px-4 py-3 rounded-xl border-2 transition-all ${
                calculationType === 'monthly-deposit'
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="text-sm font-medium">매월 납입액 계산</div>
              <div className="text-xs text-slate-500 mt-1">
                목표 금액까지 필요한 매월 저축액
              </div>
            </button>
            <button
              onClick={() => setCalculationType('period')}
              className={`px-4 py-3 rounded-xl border-2 transition-all ${
                calculationType === 'period'
                  ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="text-sm font-medium">기간 계산</div>
              <div className="text-xs text-slate-500 mt-1">
                목표 금액까지 필요한 기간
              </div>
            </button>
            <button
              onClick={() => setCalculationType('initial-deposit')}
              className={`px-4 py-3 rounded-xl border-2 transition-all ${
                calculationType === 'initial-deposit'
                  ? 'border-purple-500 bg-purple-50 text-purple-700 font-semibold'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="text-sm font-medium">초기 예치금 계산</div>
              <div className="text-xs text-slate-500 mt-1">
                목표 금액까지 필요한 초기 금액
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
          {/* 목표 금액 */}
          <div>
            <label
              htmlFor="target-amount"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              목표 금액
            </label>
            <div className="relative">
              <input
                id="target-amount"
                type="text"
                inputMode="numeric"
                value={
                  targetAmountInput !== ''
                    ? formatNumberWithCommas(targetAmountInput)
                    : targetAmount > 0
                      ? formatNumberWithCommas(targetAmount)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setTargetAmountInput(e.target.value);
                  setTargetAmount(value);
                }}
                onBlur={() => {
                  setTargetAmountInput(
                    targetAmount > 0 ? targetAmount.toString() : ''
                  );
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {targetAmount > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(targetAmount)}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[10000000, 50000000, 100000000, 500000000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd('target', amount)}
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
              placeholder="3"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
          </div>

          {/* 기간 (매월 납입액, 초기 예치금 계산 시) */}
          {(calculationType === 'monthly-deposit' ||
            calculationType === 'initial-deposit') && (
            <div>
              <label
                htmlFor="period"
                className="block mb-3 font-semibold text-base text-slate-700"
              >
                기간 (개월)
              </label>
              <input
                id="period"
                type="number"
                inputMode="numeric"
                value={period || ''}
                onChange={(e) => setPeriod(Math.max(1, Number(e.target.value)))}
                placeholder="12"
                className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
            </div>
          )}

          {/* 매월 납입금 (기간, 초기 예치금 계산 시) */}
          {(calculationType === 'period' ||
            calculationType === 'initial-deposit') && (
            <div>
              <label
                htmlFor="monthly-deposit"
                className="block mb-3 font-semibold text-base text-slate-700"
              >
                매월 납입금
              </label>
              <div className="relative">
                <input
                  id="monthly-deposit"
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
                {[100000, 200000, 500000, 1000000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleQuickAdd('monthly', amount)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-pointer transition-all hover:bg-slate-200 hover:border-slate-300"
                  >
                    +{formatKoreanCurrency(amount).replace('원', '')}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 초기 예치금 (매월 납입액, 기간 계산 시 선택) */}
          {(calculationType === 'monthly-deposit' ||
            calculationType === 'period') && (
            <div>
              <label
                htmlFor="initial-deposit"
                className="block mb-3 font-semibold text-base text-slate-700"
              >
                초기 예치금 (선택)
              </label>
              <div className="relative">
                <input
                  id="initial-deposit"
                  type="text"
                  inputMode="numeric"
                  value={
                    initialDepositInput !== ''
                      ? formatNumberWithCommas(initialDepositInput)
                      : initialDeposit > 0
                        ? formatNumberWithCommas(initialDeposit)
                        : ''
                  }
                  onChange={(e) => {
                    const value = parseKoreanInput(e.target.value);
                    setInitialDepositInput(e.target.value);
                    setInitialDeposit(value);
                  }}
                  onBlur={() => {
                    setInitialDepositInput(
                      initialDeposit > 0 ? initialDeposit.toString() : ''
                    );
                  }}
                  placeholder="0"
                  className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
                />
                {initialDeposit > 0 && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                    {formatKoreanCurrency(initialDeposit)}
                  </div>
                )}
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                {[1000000, 5000000, 10000000, 50000000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleQuickAdd('initial', amount)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-pointer transition-all hover:bg-slate-200 hover:border-slate-300"
                  >
                    +{formatKoreanCurrency(amount).replace('원', '')}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 결과 카드 */}
      {result && (
        <div className="mb-8">
          <ResultCard result={result} calculationType={calculationType} />
        </div>
      )}
    </div>
  );
}


