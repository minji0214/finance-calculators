import type { InsuranceResult } from '../types';
import { formatNumberWithCommas, formatKoreanCurrency } from '../utils';

interface InsuranceResultCardProps {
  result: InsuranceResult;
}

export default function InsuranceResultCard({ result }: InsuranceResultCardProps) {
  const annualNetSalary = result.netSalary * 12; // 연봉 기준 실수령액
  const annualSalary = result.monthlySalary * 12; // 연봉

  return (
    <div className="space-y-6">
      {/* 실수령액 - 강조 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg">
        <div className="text-sm text-slate-600 mb-2">실수령액 (월)</div>
        <div className="text-3xl font-bold text-blue-700 mb-1">
          {formatNumberWithCommas(result.netSalary)}원
        </div>
        <div className="text-xs text-slate-500 mb-3">
          {formatKoreanCurrency(result.netSalary)}
        </div>
        <div className="pt-3 border-t border-blue-200">
          <div className="text-sm text-slate-600 mb-1">실수령액 (연)</div>
          <div className="text-xl font-bold text-blue-800">
            {formatNumberWithCommas(annualNetSalary)}원
          </div>
          <div className="text-xs text-slate-500 mt-1">
            연봉 {formatNumberWithCommas(annualSalary)}원 기준
          </div>
        </div>
      </div>

      {/* 4대보험 상세 */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">4대보험 상세 내역</h3>
        
        <div className="space-y-4">
          {/* 국민연금 */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-900">국민연금</span>
                <span className="text-sm text-slate-500 ml-2">
                  ({result.nationalPension.rate}%)
                </span>
                {result.year >= 2026 && (
                  <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">
                    2025년 개정안 적용
                  </span>
                )}
              </div>
              <span className="text-slate-900 font-medium">
                -{formatNumberWithCommas(result.nationalPension.employeeContribution)}원
              </span>
            </div>
            <div className="text-xs text-slate-500 pl-4">
              본인 부담: {formatNumberWithCommas(result.nationalPension.employeeContribution)}원
              {' · '}
              사업주 부담: {formatNumberWithCommas(result.nationalPension.employerContribution)}원
            </div>
          </div>

          {/* 건강보험 */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-900">건강보험</span>
                <span className="text-sm text-slate-500 ml-2">
                  ({result.healthInsurance.rate}%)
                </span>
              </div>
              <span className="text-slate-900 font-medium">
                -{formatNumberWithCommas(result.healthInsurance.employeeContribution)}원
              </span>
            </div>
            <div className="text-xs text-slate-500 pl-4">
              본인 부담: {formatNumberWithCommas(result.healthInsurance.employeeContribution)}원
              {' · '}
              사업주 부담: {formatNumberWithCommas(result.healthInsurance.employerContribution)}원
            </div>
          </div>

          {/* 고용보험 */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-900">고용보험</span>
                <span className="text-sm text-slate-500 ml-2">
                  ({result.employmentInsurance.rate}%)
                </span>
              </div>
              <span className="text-slate-900 font-medium">
                -{formatNumberWithCommas(result.employmentInsurance.employeeContribution)}원
              </span>
            </div>
            <div className="text-xs text-slate-500 pl-4">
              본인 부담: {formatNumberWithCommas(result.employmentInsurance.employeeContribution)}원
              {' · '}
              사업주 부담: {formatNumberWithCommas(result.employmentInsurance.employerContribution)}원
            </div>
          </div>

          {/* 산재보험 */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-900">산재보험</span>
                <span className="text-sm text-slate-500 ml-2">
                  ({result.industrialAccidentInsurance.rate}%)
                </span>
              </div>
              <span className="text-slate-500 text-sm">본인 부담 없음</span>
            </div>
            <div className="text-xs text-slate-500 pl-4">
              사업주 전액 부담: {formatNumberWithCommas(result.industrialAccidentInsurance.employerContribution)}원
            </div>
          </div>

          {/* 장기요양보험 */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-900">장기요양보험</span>
                <span className="text-sm text-slate-500 ml-2">
                  (건강보험료의 {result.longTermCareInsurance.rate}%)
                </span>
              </div>
              <span className="text-slate-900 font-medium">
                -{formatNumberWithCommas(result.longTermCareInsurance.employeeContribution)}원
              </span>
            </div>
            <div className="text-xs text-slate-500 pl-4">
              본인 부담: {formatNumberWithCommas(result.longTermCareInsurance.employeeContribution)}원
              {' · '}
              사업주 부담: {formatNumberWithCommas(result.longTermCareInsurance.employerContribution)}원
            </div>
          </div>

          {/* 소득세 */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-900">소득세</span>
              </div>
              <span className="text-slate-900 font-medium">
                -{formatNumberWithCommas(result.tax.incomeTax)}원
              </span>
            </div>
            <div className="text-xs text-slate-500 pl-4">
              누진세율 적용 (연봉 기준)
            </div>
          </div>

          {/* 지방소득세 */}
          <div className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold text-slate-900">지방소득세</span>
                <span className="text-sm text-slate-500 ml-2">
                  (소득세의 10%)
                </span>
              </div>
              <span className="text-slate-900 font-medium">
                -{formatNumberWithCommas(result.tax.localIncomeTax)}원
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 요약 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">4대보험 + 장기요양보험 본인 부담</div>
          <div className="text-xl font-bold text-slate-900">
            {formatNumberWithCommas(result.totalInsuranceDeduction)}원
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">소득세 + 지방소득세</div>
          <div className="text-xl font-bold text-slate-900">
            {formatNumberWithCommas(result.tax.totalTax)}원
          </div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <div className="text-sm text-red-700 mb-1">총 공제액</div>
          <div className="text-xl font-bold text-red-900">
            {formatNumberWithCommas(result.totalDeduction)}원
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">사업주 부담 총액</div>
          <div className="text-xl font-bold text-slate-900">
            {formatNumberWithCommas(result.totalEmployerCost)}원
          </div>
        </div>
      </div>

      {/* 총 인건비 정보 */}
      <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
        <div className="text-sm text-amber-800 mb-1">총 인건비 (급여 + 사업주 부담)</div>
        <div className="text-xl font-bold text-amber-900">
          {formatNumberWithCommas(result.totalCost)}원
        </div>
        <div className="text-xs text-amber-700 mt-1">
          월 급여 {formatNumberWithCommas(result.monthlySalary)}원 + 사업주 부담 {formatNumberWithCommas(result.totalEmployerCost)}원
        </div>
      </div>
    </div>
  );
}

