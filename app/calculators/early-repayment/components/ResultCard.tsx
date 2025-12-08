import type { EarlyRepaymentResult } from '../types';
import {
  formatNumberWithCommas,
  formatKoreanCurrency,
  formatPeriod,
} from '../utils';

interface ResultCardProps {
  result: EarlyRepaymentResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="space-y-6">
      {/* 이자 절감액 - 강조 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
        <div className="text-sm text-slate-600 mb-2">이자 절감액</div>
        <div className="text-3xl font-bold text-green-700 mb-1">
          {formatNumberWithCommas(result.interestSavings)}원
        </div>
        <div className="text-xs text-slate-500">
          {formatKoreanCurrency(result.interestSavings)}
        </div>
      </div>

      {/* 비교 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 중도상환 전 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            중도상환 전
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">총 이자</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.beforeRepayment.totalInterest)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">총 상환액</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.beforeRepayment.totalPayment)}원
              </span>
            </div>
            {result.repaymentType === 'equal-payment' && (
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">월 상환액</span>
                <span className="text-slate-900 font-medium">
                  {formatNumberWithCommas(result.beforeRepayment.monthlyPayment)}원
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">상환 기간</span>
              <span className="text-slate-900 font-medium">
                {formatPeriod(result.period)}
              </span>
            </div>
          </div>
        </div>

        {/* 중도상환 후 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            중도상환 후
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">총 이자</span>
              <span className="text-green-600 font-medium">
                {formatNumberWithCommas(result.afterRepayment.totalInterest)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">총 상환액</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.afterRepayment.totalPayment)}원
              </span>
            </div>
            {result.repaymentType === 'equal-payment' && (
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">월 상환액</span>
                <span className="text-slate-900 font-medium">
                  {formatNumberWithCommas(result.afterRepayment.monthlyPayment)}원
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">잔여 기간</span>
              <span className="text-slate-900 font-medium">
                {formatPeriod(result.afterRepayment.remainingPeriod)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">상세 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-slate-600 mb-1">대출 원금</div>
            <div className="text-lg font-semibold text-slate-900">
              {formatNumberWithCommas(result.principal)}원
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 mb-1">중도상환 금액</div>
            <div className="text-lg font-semibold text-slate-900">
              {formatNumberWithCommas(result.earlyRepaymentAmount)}원
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 mb-1">중도상환 시점</div>
            <div className="text-lg font-semibold text-slate-900">
              {result.earlyRepaymentMonth}개월째
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-600 mb-1">중도상환 후 잔여 원금</div>
            <div className="text-lg font-semibold text-slate-900">
              {formatNumberWithCommas(result.afterRepayment.remainingPrincipal)}원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


