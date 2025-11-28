'use client';

import { useState, useEffect } from 'react';
import { calculateCompoundInterest } from '../calculator';
import type { CompoundInterestResult } from '../types';
import {
  formatKoreanCurrency,
  formatNumberWithCommas,
  parseKoreanInput,
} from '../utils';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<number>(0);
  const [monthly, setMonthly] = useState<number>(0);
  const [rate, setRate] = useState<number>(7);
  const [years, setYears] = useState<number>(5);
  const [result, setResult] = useState<CompoundInterestResult | null>(null);
  const [loading, setLoading] = useState(false);

  // 입력 중인 값들 (포맷팅 전 원본)
  const [principalInput, setPrincipalInput] = useState<string>('');
  const [monthlyInput, setMonthlyInput] = useState<string>('');

  useEffect(() => {
    const calc = () => {
      // 모든 값이 유효할 때만 계산
      if (principal === 0 && monthly === 0) {
        setResult(null);
        return;
      }

      setLoading(true);
      try {
        const calculatedResult = calculateCompoundInterest({
          principal,
          monthly,
          annualRate: rate,
          years,
          compoundPerYear: 12,
        });
        setResult(calculatedResult);
      } catch (error) {
        console.error('계산 중 오류가 발생했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    // 디바운싱: 300ms 후에 계산 실행
    const timeoutId = setTimeout(() => {
      calc();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [principal, monthly, rate, years]);

  const handleQuickAdd = (field: 'principal' | 'monthly', amount: number) => {
    if (field === 'principal') {
      const newValue = principal + amount;
      setPrincipal(newValue);
      setPrincipalInput(newValue.toString());
    } else {
      const newValue = monthly + amount;
      setMonthly(newValue);
      setMonthlyInput(newValue.toString());
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* 계산기 입력 섹션 */}
      <div className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg mb-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
          {/* 초기 투자금 */}
          <div>
            <label
              htmlFor="principal"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              초기 투자금
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
              {[100000, 1000000, 10000000].map((amount) => (
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

          {/* 매월 투자금 */}
          <div>
            <label
              htmlFor="monthly"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              매월 투자금
            </label>
            <div className="relative">
              <input
                id="monthly"
                type="text"
                inputMode="numeric"
                value={
                  monthlyInput !== ''
                    ? formatNumberWithCommas(monthlyInput)
                    : monthly > 0
                      ? formatNumberWithCommas(monthly)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setMonthlyInput(e.target.value);
                  setMonthly(value);
                }}
                onBlur={() => {
                  setMonthlyInput(monthly > 0 ? monthly.toString() : '');
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {monthly > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(monthly)}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[100000, 200000, 500000].map((amount) => (
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

          {/* 연 수익률 */}
          <div>
            <label
              htmlFor="rate"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              연 수익률(%)
            </label>
            <input
              id="rate"
              type="number"
              inputMode="numeric"
              step="0.1"
              value={rate || ''}
              onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
              placeholder="7"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
          </div>

          {/* 투자 기간 */}
          <div>
            <label
              htmlFor="years"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              투자 기간(년)
            </label>
            <input
              id="years"
              type="number"
              inputMode="numeric"
              step="1"
              value={years || ''}
              onChange={(e) => setYears(Math.max(0, Number(e.target.value)))}
              placeholder="5"
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
            />
          </div>
        </div>

        {loading && (
          <div className="text-center py-5 text-slate-500 text-base">
            계산 중...
          </div>
        )}
      </div>

      {/* 결과 섹션 */}
      {result && !loading && (
        <div
          id="result-section"
          className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg border border-slate-200 animate-fade-in"
        >
          <h3 className="mb-8 text-2xl md:text-3xl text-slate-900 font-bold">
            📊 계산 결과
          </h3>

          {/* 주요 결과 카드 */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-9 rounded-2xl mb-8 text-white shadow-[0_8px_24px_rgba(102,126,234,0.3)]">
            <div className="text-sm md:text-base mb-3 opacity-95">
              {result.years}년 후 예상 최종 금액
            </div>
            <div className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {result.total.toLocaleString()}원
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-7 pt-7 border-t border-white/20">
              <div>
                <div className="text-sm opacity-90 mb-2">투자원금</div>
                <div className="text-xl font-bold">
                  {result.invested.toLocaleString()}원
                </div>
              </div>
              <div>
                <div className="text-sm opacity-90 mb-2">예상 수익</div>
                <div
                  className={`text-xl font-bold ${
                    result.profit >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {result.profit >= 0 ? '+' : ''}
                  {result.profit.toLocaleString()}원
                </div>
              </div>
            </div>
          </div>

          {/* 연도별 요약 */}
          <div>
            <h4 className="mb-5 text-xl text-slate-900 font-semibold">
              📈 연도별 금액 변화
            </h4>
            <div className="grid gap-4">
              {result.schedule
                .filter((s) => s.month % 12 === 0)
                .map((s, idx) => {
                  const prevBalance =
                    idx > 0
                      ? result.schedule.filter((sch) => sch.month % 12 === 0)[
                          idx - 1
                        ]?.balance || 0
                      : result.invested || 0;
                  const increase = Number(s.balance) - Number(prevBalance);
                  const increasePercent =
                    prevBalance > 0
                      ? ((increase / prevBalance) * 100).toFixed(1)
                      : '0';
                  const progressPercent =
                    result.total > 0
                      ? ((Number(s.balance) / result.total) * 100).toFixed(0)
                      : '0';

                  return (
                    <div
                      key={idx}
                      className="p-5 md:p-6 bg-slate-50 rounded-xl border-2 border-slate-200 transition-all relative hover:bg-slate-100 hover:border-blue-500 hover:translate-x-1"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-bold text-slate-900">
                          {s.month / 12}년차
                        </span>
                        <span className="text-xl md:text-2xl font-extrabold text-blue-500">
                          {Number(s.balance).toLocaleString()}원
                        </span>
                      </div>

                      {/* 진행 바 */}
                      <div className="w-full h-2 bg-slate-200 rounded mb-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded transition-[width] duration-300 ease-in-out"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">
                          {idx === 0 ? '초기 투자' : `전년 대비`}
                        </span>
                        {idx > 0 && (
                          <span
                            className={`font-semibold ${
                              increase >= 0 ? 'text-emerald-500' : 'text-red-500'
                            }`}
                          >
                            {increase >= 0 ? '+' : ''}
                            {increase.toLocaleString()}원 ({increasePercent}%)
                          </span>
                        )}
                        {idx === 0 && (
                          <span className="text-slate-500">
                            {Number(prevBalance).toLocaleString()}원
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mt-8 p-5 bg-yellow-100 rounded-xl border border-yellow-300">
            <p className="text-sm text-yellow-900 leading-relaxed m-0">
              ⚠️ 참고: 실제 수익은 수수료, 세금, 시장 변동성 등에 따라 달라질
              수 있습니다. 이 계산 결과는 참고용이며, 실제 투자 전 전문가와
              상담하시기 바랍니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
