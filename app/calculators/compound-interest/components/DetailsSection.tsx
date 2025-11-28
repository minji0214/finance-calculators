export default function DetailsSection() {
  return (
    <details className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <summary className="text-xl md:text-2xl font-semibold text-slate-900 cursor-pointer mb-6 list-none p-3 rounded-lg transition-colors hover:bg-slate-50">
        💡 복리란? 자세히 알아보기
      </summary>
      <div className="text-base leading-relaxed text-slate-600 pl-3">
        <h2 className="text-xl mb-4 text-slate-900 font-semibold">
          복리란 무엇인가?
        </h2>
        <p className="mb-4">
          <strong>복리</strong>는 '이자가 이자에 붙는' 방식으로, 시간이 지날수록
          효과가 커집니다. 단리는 원금에만 이자가 붙는 반면, 복리는 원금과
          이자에 다시 이자가 붙어 시간이 길수록 그 효과가 기하급수적으로
          커집니다.
        </p>
        <p className="mb-6">
          예를 들어, 매월 10만원을 연 7%로 10년 투자하면 단리로는 약 1,200만원이
          되지만, 복리로는 약 1,700만원 이상이 됩니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          복리 계산 방법
        </h2>
        <p className="mb-4">
          복리 계산은 매월 투자금을 납입하고, 그 금액에 이자를 적용하는
          방식입니다. 매월 초에 투자금을 추가하고, 그 달 말에 이자를 적용하여
          다음 달의 원금이 되는 방식으로 계산됩니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          사용 방법 (Step-by-Step)
        </h2>
        <ol className="ml-5 mb-6 leading-relaxed list-decimal space-y-2">
          <li>
            초기 투자금: 처음에 투자할 금액을 입력합니다 (없으면 0)
          </li>
          <li>
            매월 투자금: 매달 정기적으로 투자할 금액을 입력합니다
          </li>
          <li>
            연 수익률: 예상되는 연간 수익률을 %로 입력합니다 (예: 7 입력 시 7%)
          </li>
          <li>투자 기간: 몇 년 동안 투자할지 입력합니다</li>
          <li>
            값을 입력하면 자동으로 계산되어 결과를 확인할 수 있습니다
          </li>
        </ol>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">예시</h2>
        <p className="mb-4">
          예: 초기 100만원, 매월 20만원, 연 7%, 5년 투자 시
        </p>
        <ul className="ml-6 mb-6 leading-relaxed list-disc space-y-1">
          <li>초기 투자금: 100만원</li>
          <li>매월 추가 투자: 20만원 × 60개월 = 1,200만원</li>
          <li>총 투자원금: 1,300만원</li>
          <li>예상 최종 금액: 약 1,600만원 이상 (복리 적용)</li>
          <li>예상 수익: 약 300만원 이상</li>
        </ul>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          자주 묻는 질문(FAQ)
        </h2>

        <div className="mt-5 space-y-5">
          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 수익률은 어떻게 정해야 하나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 과거 평균(예: S&P 500 장기 평균 7~10%)을 참고하되, 미래 수익률은
              보장되지 않습니다. 실제 투자 시에는 수수료, 세금, 시장 변동성 등
              다양한 요인이 영향을 미칩니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 복리와 단리의 차이는?
            </strong>
            <p className="text-slate-500 m-0">
              A. 단리는 원금에만 이자가 붙는 방식이고, 복리는 원금과 이자에 다시
              이자가 붙는 방식입니다. 같은 조건이라도 복리가 시간이 지날수록 더
              큰 효과를 냅니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 계산 결과가 실제 수익과 다를 수 있나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 실제 수익은 수수료, 세금, 시장 변동성, 인플레이션 등에 따라
              달라질 수 있습니다. 이 계산기는 복리 이자를 기반으로 한 이론적
              계산 결과를 보여줍니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 매월 납입하지 않아도 되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 매월 투자금을 0으로 설정하면 초기 투자금만으로 복리 계산을
              할 수 있습니다. 반대로 초기 투자금을 0으로 하고 매월 납입만 설정할
              수도 있습니다.
            </p>
          </div>

          <div>
            <strong className="text-blue-500 block mb-2">
              Q. 어떤 투자 상품이 복리를 활용할 수 있나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 예금, 적금, 채권, 주식, 펀드, ETF 등 다양한 투자 상품에서 복리
              효과를 활용할 수 있습니다. 다만 각 상품마다 수익률과 리스크가
              다르므로 투자 전 충분한 검토가 필요합니다.
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}
