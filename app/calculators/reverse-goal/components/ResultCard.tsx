import type {
  MonthlyDepositResult,
  PeriodResult,
  InitialDepositResult,
} from '../types';
import { formatNumberWithCommas, formatKoreanCurrency, formatPeriod } from '../utils';

interface ResultCardProps {
  result: MonthlyDepositResult | PeriodResult | InitialDepositResult;
  calculationType: 'monthly-deposit' | 'period' | 'initial-deposit';
}

export default function ResultCard({ result, calculationType }: ResultCardProps) {
  if (calculationType === 'monthly-deposit') {
    const r = result as MonthlyDepositResult;
    return (
      <div className="space-y-6">
        {/* 필요한 매월 납입액 - 강조 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg">
          <div className="text-sm text-slate-600 mb-2">필요한 매월 납입액</div>
          <div className="text-3xl font-bold text-blue-700 mb-1">
            {formatNumberWithCommas(r.requiredMonthlyDeposit)}원
          </div>
          <div className="text-xs text-slate-500">
            {formatKoreanCurrency(r.requiredMonthlyDeposit)}
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">계산 상세</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">목표 금액</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(r.targetAmount)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">기간</span>
              <span className="text-slate-900 font-medium">
                {formatPeriod(r.period)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">연 이자율</span>
              <span className="text-slate-900 font-medium">{r.annualRate}%</span>
            </div>
            {r.initialDeposit > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">초기 예치금</span>
                <span className="text-slate-900 font-medium">
                  {formatNumberWithCommas(r.initialDeposit)}원
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">총 납입금</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(r.totalDeposit)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">예상 이자</span>
              <span className="text-green-600 font-medium">
                +{formatNumberWithCommas(r.totalInterest)}원
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (calculationType === 'period') {
    const r = result as PeriodResult;
    return (
      <div className="space-y-6">
        {/* 필요한 기간 - 강조 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
          <div className="text-sm text-slate-600 mb-2">필요한 기간</div>
          <div className="text-3xl font-bold text-green-700 mb-1">
            {formatPeriod(r.requiredPeriod)}
          </div>
          <div className="text-xs text-slate-500">
            약 {Math.ceil(r.requiredPeriod / 12)}년
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">계산 상세</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">목표 금액</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(r.targetAmount)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">매월 납입금</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(r.monthlyDeposit)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">연 이자율</span>
              <span className="text-slate-900 font-medium">{r.annualRate}%</span>
            </div>
            {r.initialDeposit > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">초기 예치금</span>
                <span className="text-slate-900 font-medium">
                  {formatNumberWithCommas(r.initialDeposit)}원
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">총 납입금</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(r.totalDeposit)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">예상 이자</span>
              <span className="text-green-600 font-medium">
                +{formatNumberWithCommas(r.totalInterest)}원
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // initial-deposit
  const r = result as InitialDepositResult;
  return (
    <div className="space-y-6">
      {/* 필요한 초기 예치금 - 강조 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-lg">
        <div className="text-sm text-slate-600 mb-2">필요한 초기 예치금</div>
        <div className="text-3xl font-bold text-purple-700 mb-1">
          {formatNumberWithCommas(r.requiredInitialDeposit)}원
        </div>
        <div className="text-xs text-slate-500">
          {formatKoreanCurrency(r.requiredInitialDeposit)}
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">계산 상세</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-600">목표 금액</span>
            <span className="text-slate-900 font-medium">
              {formatNumberWithCommas(r.targetAmount)}원
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-600">기간</span>
            <span className="text-slate-900 font-medium">
              {formatPeriod(r.period)}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-600">매월 납입금</span>
            <span className="text-slate-900 font-medium">
              {formatNumberWithCommas(r.monthlyDeposit)}원
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-600">연 이자율</span>
            <span className="text-slate-900 font-medium">{r.annualRate}%</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-600">총 납입금</span>
            <span className="text-slate-900 font-medium">
              {formatNumberWithCommas(r.totalDeposit)}원
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-600">예상 이자</span>
            <span className="text-green-600 font-medium">
              +{formatNumberWithCommas(r.totalInterest)}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


