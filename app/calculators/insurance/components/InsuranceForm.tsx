'use client';

import { useState, useEffect } from 'react';
import { calculateInsurance } from '../calculator';
import type { InsuranceResult } from '../types';
import { formatNumberWithCommas, parseKoreanInput, formatKoreanCurrency } from '../utils';
import InsuranceResultCard from './ResultCard';

export default function InsuranceForm() {
  const [annualSalary, setAnnualSalary] = useState<number>(0); // 연봉
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [result, setResult] = useState<InsuranceResult | null>(null);
  const [salaryInput, setSalaryInput] = useState<string>('');

  // 연봉을 월 급여로 변환
  const monthlySalary = annualSalary / 12;

  useEffect(() => {
    if (annualSalary === 0) {
      setResult(null);
      return;
    }

    try {
      const calculatedResult = calculateInsurance({
        monthlySalary,
        year,
      });
      setResult(calculatedResult);
    } catch (error) {
      console.error('계산 중 오류가 발생했습니다:', error);
    }
  }, [annualSalary, year, monthlySalary]);

  const handleQuickAdd = (amount: number) => {
    const newValue = annualSalary + amount;
    setAnnualSalary(newValue);
    setSalaryInput(newValue.toString());
  };

  // 연도 옵션 생성 (2020~2035)
  const yearOptions = Array.from({ length: 16 }, (_, i) => 2020 + i);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-12 rounded-[20px] shadow-lg mb-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
          {/* 연봉 */}
          <div>
            <label
              htmlFor="insurance-salary"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              연봉
            </label>
            <div className="relative">
              <input
                id="insurance-salary"
                type="text"
                inputMode="numeric"
                value={
                  salaryInput !== ''
                    ? formatNumberWithCommas(salaryInput)
                    : annualSalary > 0
                      ? formatNumberWithCommas(annualSalary)
                      : ''
                }
                onChange={(e) => {
                  const value = parseKoreanInput(e.target.value);
                  setSalaryInput(e.target.value);
                  setAnnualSalary(value);
                }}
                onBlur={() => {
                  setSalaryInput(annualSalary > 0 ? annualSalary.toString() : '');
                }}
                placeholder="0"
                className="w-full px-4 pr-32 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(0,112,243,0.1)]"
              />
              {annualSalary > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium pointer-events-none whitespace-nowrap">
                  {formatKoreanCurrency(annualSalary)}
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[30000000, 40000000, 50000000, 60000000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd(amount)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-pointer transition-all hover:bg-slate-200 hover:border-slate-300"
                >
                  +{formatKoreanCurrency(amount).replace('원', '')}
                </button>
              ))}
            </div>
            {annualSalary > 0 && (
              <div className="mt-2 text-sm text-slate-500">
                월 급여: {formatNumberWithCommas(Math.round(monthlySalary))}원
              </div>
            )}
          </div>

          {/* 계산 연도 */}
          <div>
            <label
              htmlFor="insurance-year"
              className="block mb-3 font-semibold text-base text-slate-700"
            >
              계산 연도
            </label>
            <select
              id="insurance-year"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl transition-all outline-none focus:border-blue-500 bg-white"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}년
                </option>
              ))}
            </select>
            {year >= 2026 && (
              <div className="mt-2 text-sm text-orange-600 bg-orange-50 p-2 rounded-lg">
                💡 2025년 국민연금 개정안이 적용됩니다. 보험료율이 단계적으로 인상됩니다.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 결과 카드 */}
      {result && (
        <div className="mb-8">
          <InsuranceResultCard result={result} />
        </div>
      )}
    </div>
  );
}

