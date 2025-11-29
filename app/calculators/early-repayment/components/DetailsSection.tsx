export default function DetailsSection() {
  return (
    <details className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <summary className="text-xl md:text-2xl font-semibold text-slate-900 cursor-pointer mb-6 list-none p-3 rounded-lg transition-colors hover:bg-slate-50">
        💡 대출 중도상환 계산기 자세히 알아보기
      </summary>
      <div className="text-base leading-relaxed text-slate-600 pl-3">
        <h2 className="text-xl mb-4 text-slate-900 font-semibold">
          대출 중도상환이란?
        </h2>
        <p className="mb-4">
          <strong>중도상환</strong>은 대출 만기 전에 일부 또는 전액을 미리 상환하는 것을 말합니다. 
          중도상환을 하면 남은 원금이 줄어들어 총 이자 부담이 감소합니다.
        </p>
        <p className="mb-6">
          이 계산기를 통해 중도상환 시 얼마나 이자를 절감할 수 있는지 미리 확인할 수 있습니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          상환 방식 설명
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-1">원리금균등상환</p>
            <p className="text-sm text-blue-800">
              매월 동일한 금액을 상환하는 방식입니다. 초기에는 이자 비중이 높고, 
              후기에는 원금 비중이 높아집니다. 주택담보대출에서 가장 많이 사용됩니다.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 mb-1">원금균등상환</p>
            <p className="text-sm text-green-800">
              매월 동일한 원금을 상환하고, 이자는 남은 원금에 대해 계산하는 방식입니다. 
              초기 상환액이 높지만 총 이자는 원리금균등상환보다 적을 수 있습니다.
            </p>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          중도상환의 장점
        </h2>
        <ul className="ml-5 mb-6 leading-relaxed list-disc space-y-2">
          <li>
            <strong>이자 절감:</strong> 남은 원금이 줄어들어 총 이자 부담이 감소합니다.
          </li>
          <li>
            <strong>상환 기간 단축:</strong> 원리금균등상환의 경우, 중도상환 후에도 
            월 상환액을 유지하면 상환 기간이 단축됩니다.
          </li>
          <li>
            <strong>심리적 부담 감소:</strong> 빚이 줄어들어 심리적 부담이 감소합니다.
          </li>
        </ul>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          사용 방법 (Step-by-Step)
        </h2>
        <ol className="ml-5 mb-6 leading-relaxed list-decimal space-y-2">
          <li>
            <strong>대출 원금 입력:</strong> 대출받은 원금을 입력합니다.
          </li>
          <li>
            <strong>연 이자율 입력:</strong> 대출 이자율을 입력합니다.
          </li>
          <li>
            <strong>대출 기간 입력:</strong> 대출 기간을 개월 단위로 입력합니다.
          </li>
          <li>
            <strong>상환 방식 선택:</strong> 원리금균등상환 또는 원금균등상환을 선택합니다.
          </li>
          <li>
            <strong>중도상환 금액 입력:</strong> 중도상환할 금액을 입력합니다.
          </li>
          <li>
            <strong>중도상환 시점 입력:</strong> 몇 개월째에 중도상환할지 입력합니다.
          </li>
          <li>
            <strong>결과 확인:</strong> 중도상환 전/후 이자 비교와 절감액을 확인할 수 있습니다.
          </li>
        </ol>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">예시</h2>
        <div className="mb-6 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">
              예시: 주택담보대출 3억원, 연 3.5%, 20년(240개월), 원리금균등상환
            </p>
            <p className="text-sm text-blue-800 mb-2">
              12개월째 1천만원 중도상환 시:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-blue-800">
              <li>중도상환 전 총 이자: 약 1억 2천만원</li>
              <li>중도상환 후 총 이자: 약 1억 1천만원</li>
              <li>이자 절감액: 약 1천만원</li>
              <li>월 상환액: 약 174만원 → 약 170만원 (감소)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 mb-2">
              예시: 신용대출 5천만원, 연 5%, 5년(60개월), 원금균등상환
            </p>
            <p className="text-sm text-green-800 mb-2">
              6개월째 500만원 중도상환 시:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-green-800">
              <li>중도상환 전 총 이자: 약 6,500만원</li>
              <li>중도상환 후 총 이자: 약 5,200만원</li>
              <li>이자 절감액: 약 1,300만원</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          자주 묻는 질문(FAQ)
        </h2>

        <div className="mt-5 space-y-5">
          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 중도상환 수수료는 포함되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 아니요, 이 계산기는 이자 절감액만 계산합니다. 실제 중도상환 시에는 
              중도상환 수수료가 발생할 수 있으므로 은행에 확인하시기 바랍니다. 
              일반적으로 주택담보대출은 중도상환 수수료가 없거나 낮은 편입니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 중도상환은 언제 하는 것이 좋나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 일반적으로 대출 초기에 중도상환하는 것이 이자 절감 효과가 큽니다. 
              이는 초기에 이자 비중이 높기 때문입니다. 다만, 여유 자금이 있을 때 
              중도상환하는 것이 좋습니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 원리금균등상환과 원금균등상환 중 어떤 것이 유리한가요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 원금균등상환이 총 이자는 적지만, 초기 상환액이 높아 부담이 큽니다. 
              원리금균등상환은 매월 상환액이 일정해 계획하기 쉽습니다. 
              중도상환 시에는 두 방식 모두 이자 절감 효과가 있습니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 중도상환 후 월 상환액이 줄어드나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 원리금균등상환의 경우, 중도상환 후에도 월 상환액을 유지하면 상환 기간이 단축됩니다. 
              월 상환액을 줄이려면 재계약이 필요할 수 있습니다. 원금균등상환의 경우, 
              원금이 줄어들어 이자 부분이 감소합니다.
            </p>
          </div>

          <div>
            <strong className="text-blue-500 block mb-2">
              Q. 계산 결과와 실제 절감액이 다를 수 있나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 실제 절감액은 중도상환 수수료, 이자율 변동, 상환 방식 등에 따라 
              달라질 수 있습니다. 이 계산기는 이론적 계산 결과를 보여주므로, 
              실제 중도상환 전에는 은행에 정확한 금액을 확인하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

