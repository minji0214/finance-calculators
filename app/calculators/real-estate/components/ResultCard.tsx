import type { RealEstateResult } from '../types';
import { formatNumberWithCommas, formatKoreanCurrency } from '../utils';

interface ResultCardProps {
  result: RealEstateResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="space-y-6">
      {/* 총 구매 비용 - 강조 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg">
        <div className="text-sm text-slate-600 mb-2">총 구매 비용</div>
        <div className="text-3xl font-bold text-blue-700 mb-1">
          {formatNumberWithCommas(result.totalCost)}원
        </div>
        <div className="text-xs text-slate-500 mb-3">
          {formatKoreanCurrency(result.totalCost)}
        </div>
        <div className="pt-3 border-t border-blue-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-slate-600 mb-1">계약금 필요액</div>
              <div className="text-lg font-semibold text-slate-900">
                {formatNumberWithCommas(result.totalPayment)}원
              </div>
            </div>
            <div>
              <div className="text-slate-600 mb-1">총 세금 및 수수료</div>
              <div className="text-lg font-semibold text-slate-900">
                {formatNumberWithCommas(result.totalTaxAndFee)}원
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 세금 및 수수료 상세 */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          세금 및 수수료 상세
        </h3>
        <div className="space-y-3">
          {/* 취득세 */}
          <div className="border-b border-slate-100 pb-3">
            <div className="flex justify-between items-center mb-1">
              <div>
                <span className="font-semibold text-slate-900">취득세</span>
                <span className="text-sm text-slate-500 ml-2">
                  ({result.acquisitionTax.rate}%)
                </span>
                {result.acquisitionTax.reduction > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                    감면 {formatNumberWithCommas(result.acquisitionTax.reduction)}원
                  </span>
                )}
              </div>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.acquisitionTax.finalTaxAmount)}원
              </span>
            </div>
          </div>

          {/* 등록세 */}
          <div className="border-b border-slate-100 pb-3">
            <div className="flex justify-between items-center mb-1">
              <div>
                <span className="font-semibold text-slate-900">등록세</span>
                <span className="text-sm text-slate-500 ml-2">
                  ({result.registrationTax.rate}%)
                </span>
                {result.registrationTax.reduction > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                    감면 {formatNumberWithCommas(result.registrationTax.reduction)}원
                  </span>
                )}
              </div>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.registrationTax.finalTaxAmount)}원
              </span>
            </div>
          </div>

          {/* 중개수수료 */}
          <div className="border-b border-slate-100 pb-3">
            <div className="flex justify-between items-center mb-1">
              <div>
                <span className="font-semibold text-slate-900">중개수수료</span>
                <span className="text-sm text-slate-500 ml-2">
                  ({result.brokerageFee.rate}%)
                </span>
              </div>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.brokerageFee.feeAmount)}원
              </span>
            </div>
          </div>

          {/* 인지세 */}
          <div className="border-b border-slate-100 pb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-slate-900">인지세</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.stampTax)}원
              </span>
            </div>
          </div>

          {/* 양도소득세 (단기매도 시) */}
          {result.capitalGainsTax.applicable && (
            <div className="pb-3 bg-red-50 p-3 rounded-lg border border-red-200">
              <div className="flex justify-between items-center mb-1">
                <div>
                  <span className="font-semibold text-red-900">양도소득세 (단기매도)</span>
                  <span className="text-sm text-red-700 ml-2">
                    ({result.capitalGainsTax.rate}%)
                  </span>
                </div>
                <span className="text-red-700 font-medium">
                  {formatNumberWithCommas(result.capitalGainsTax.taxAmount)}원
                </span>
              </div>
              <div className="text-xs text-red-600 mt-1">
                {result.capitalGainsTax.note}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 대출 정보 */}
      {result.loanCost.loanAmount > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">대출 정보</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">대출 금액</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.loanCost.loanAmount)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">월 상환액</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.loanCost.monthlyPayment)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">총 이자</span>
              <span className="text-slate-900 font-medium">
                {formatNumberWithCommas(result.loanCost.totalInterest)}원
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 규제 정보 */}
      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">규제 정보</h3>
        <div className="space-y-2 text-sm">
          {result.firstTimeBuyer === 'yes' && (
            <div className="flex items-center text-amber-800">
              <span className="mr-2">✓</span>
              <span>첫 주택 구매자: 취득세, 등록세 감면 적용</span>
            </div>
          )}
          {result.regulatedArea === 'yes' && (
            <div className="flex items-center text-amber-800">
              <span className="mr-2">⚠</span>
              <span>규제지역: 취득세 10% 가산, 단기매도 시 양도소득세 70%</span>
            </div>
          )}
          {result.actualResidence === 'yes' && (
            <div className="flex items-center text-amber-800">
              <span className="mr-2">✓</span>
              <span>실거주 의무: 양도소득세 감면 가능</span>
            </div>
          )}
          {result.shortTermSale === 'yes' && (
            <div className="flex items-center text-red-700">
              <span className="mr-2">⚠</span>
              <span>2년 이내 매도: 양도소득세 {result.capitalGainsTax.rate}% 적용</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


