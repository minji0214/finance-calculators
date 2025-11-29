import type { DepositResult, InstallmentResult } from '../types';
import { formatKoreanCurrency, formatNumberWithCommas } from '../utils';

interface DepositResultCardProps {
  result: DepositResult;
}

interface InstallmentResultCardProps {
  result: InstallmentResult;
}

export function DepositResultCard({ result }: DepositResultCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">계산 결과</h3>
      
      <div className="space-y-4">
        {/* 만기수령액 - 강조 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
          <div className="text-sm text-slate-600 mb-1">만기수령액</div>
          <div className="text-2xl font-bold text-blue-700">
            {formatNumberWithCommas(result.maturityAmount)}원
          </div>
          <div className="text-xs text-slate-500 mt-1">
            {formatKoreanCurrency(result.maturityAmount)}
          </div>
        </div>

        {/* 세전 이자 */}
        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-600">세전 이자</span>
          <span className="text-slate-900 font-medium">
            {formatNumberWithCommas(result.beforeTaxInterest)}원
          </span>
        </div>

        {/* 세후 이자 */}
        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-600">세후 이자</span>
          <span className="text-slate-900 font-medium">
            {formatNumberWithCommas(result.afterTaxInterest)}원
          </span>
        </div>

        {/* 세금 */}
        {result.taxAmount > 0 && (
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-600">세금</span>
            <span className="text-red-600 font-medium">
              -{formatNumberWithCommas(result.taxAmount)}원
            </span>
          </div>
        )}

        {/* 원금 */}
        <div className="pt-2 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-slate-600">예치금액</span>
            <span className="text-slate-700">
              {formatNumberWithCommas(result.principal)}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstallmentResultCard({ result }: InstallmentResultCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">계산 결과</h3>
      
      <div className="space-y-4">
        {/* 만기수령액 - 강조 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
          <div className="text-sm text-slate-600 mb-1">만기수령액</div>
          <div className="text-2xl font-bold text-green-700">
            {formatNumberWithCommas(result.maturityAmount)}원
          </div>
          <div className="text-xs text-slate-500 mt-1">
            {formatKoreanCurrency(result.maturityAmount)}
          </div>
        </div>

        {/* 총 납입금 */}
        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-600">총 납입금</span>
          <span className="text-slate-900 font-medium">
            {formatNumberWithCommas(result.totalDeposit)}원
          </span>
        </div>

        {/* 세전 이자 */}
        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-600">세전 이자</span>
          <span className="text-slate-900 font-medium">
            {formatNumberWithCommas(result.beforeTaxInterest)}원
          </span>
        </div>

        {/* 세후 이자 */}
        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-600">세후 이자</span>
          <span className="text-slate-900 font-medium">
            {formatNumberWithCommas(result.afterTaxInterest)}원
          </span>
        </div>

        {/* 세금 */}
        {result.taxAmount > 0 && (
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-600">세금</span>
            <span className="text-red-600 font-medium">
              -{formatNumberWithCommas(result.taxAmount)}원
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

