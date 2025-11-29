export default function DetailsSection() {
  return (
    <details className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <summary className="text-xl md:text-2xl font-semibold text-slate-900 cursor-pointer mb-6 list-none p-3 rounded-lg transition-colors hover:bg-slate-50">
        💡 목표 금액 역산 계산기 자세히 알아보기
      </summary>
      <div className="text-base leading-relaxed text-slate-600 pl-3">
        <h2 className="text-xl mb-4 text-slate-900 font-semibold">
          목표 금액 역산 계산기란?
        </h2>
        <p className="mb-4">
          <strong>목표 금액 역산 계산기</strong>는 원하는 목표 금액을 달성하기 위해 
          필요한 조건을 역으로 계산해주는 도구입니다. 예를 들어, "1억원을 모으려면 
          매월 얼마를 저축해야 하나요?"와 같은 질문에 답을 제공합니다.
        </p>
        <p className="mb-6">
          세 가지 계산 방식을 제공합니다: 매월 납입액 계산, 기간 계산, 초기 예치금 계산.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          계산 방식 설명
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-1">1. 매월 납입액 계산</p>
            <p className="text-sm text-blue-800">
              목표 금액과 기간을 정하면, 매월 얼마를 저축해야 하는지 계산합니다. 
              예: "1억원을 10년 안에 모으려면 매월 얼마를 저축해야 하나요?"
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 mb-1">2. 기간 계산</p>
            <p className="text-sm text-green-800">
              목표 금액과 매월 납입금을 정하면, 목표를 달성하는데 필요한 기간을 계산합니다. 
              예: "매월 50만원씩 저축하면 1억원까지 몇 년이 걸리나요?"
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-900 mb-1">3. 초기 예치금 계산</p>
            <p className="text-sm text-purple-800">
              목표 금액, 기간, 매월 납입금을 정하면, 초기에 얼마를 예치해야 하는지 계산합니다. 
              예: "1억원을 5년 안에 모으려면 초기에 얼마를 넣어야 하나요?"
            </p>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          복리 계산 원리
        </h2>
        <p className="mb-4">
          이 계산기는 <strong>복리 이자</strong>를 적용합니다. 복리는 이자가 이자에 붙는 방식으로, 
          시간이 지날수록 효과가 커집니다. 매월 납입한 금액과 초기 예치금 모두 복리로 계산됩니다.
        </p>
        <p className="mb-6">
          계산 공식: 만기금액 = 초기예치금 × (1 + 월이자율)^기간 + 매월납입금 × [((1 + 월이자율)^기간 - 1) / 월이자율]
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          사용 방법 (Step-by-Step)
        </h2>
        <ol className="ml-5 mb-6 leading-relaxed list-decimal space-y-2">
          <li>
            <strong>계산 방식 선택:</strong> 매월 납입액, 기간, 초기 예치금 중 하나를 선택합니다.
          </li>
          <li>
            <strong>목표 금액 입력:</strong> 달성하고 싶은 목표 금액을 입력합니다.
          </li>
          <li>
            <strong>연 이자율 입력:</strong> 예상 이자율을 입력합니다 (예: 적금 3%, 예금 2.5% 등).
          </li>
          <li>
            <strong>추가 정보 입력:</strong> 선택한 계산 방식에 따라 기간, 매월 납입금, 초기 예치금 등을 입력합니다.
          </li>
          <li>
            <strong>결과 확인:</strong> 필요한 조건과 예상 이자를 확인할 수 있습니다.
          </li>
        </ol>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">예시</h2>
        <div className="mb-6 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">
              예시 1: 매월 납입액 계산
            </p>
            <p className="text-sm text-blue-800 mb-2">
              목표: 1억원, 기간: 10년(120개월), 이자율: 3%
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-blue-800">
              <li>필요한 매월 납입액: 약 70만원</li>
              <li>총 납입금: 약 8,400만원</li>
              <li>예상 이자: 약 1,600만원</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 mb-2">
              예시 2: 기간 계산
            </p>
            <p className="text-sm text-green-800 mb-2">
              목표: 1억원, 매월 납입: 50만원, 이자율: 3%
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-green-800">
              <li>필요한 기간: 약 14년 6개월</li>
              <li>총 납입금: 약 8,700만원</li>
              <li>예상 이자: 약 1,300만원</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-900 mb-2">
              예시 3: 초기 예치금 계산
            </p>
            <p className="text-sm text-purple-800 mb-2">
              목표: 1억원, 기간: 5년(60개월), 매월 납입: 100만원, 이자율: 3%
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-purple-800">
              <li>필요한 초기 예치금: 약 2,500만원</li>
              <li>총 납입금: 약 8,500만원</li>
              <li>예상 이자: 약 1,500만원</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          자주 묻는 질문(FAQ)
        </h2>

        <div className="mt-5 space-y-5">
          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 실제 저축액과 계산 결과가 다를 수 있나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 실제 저축액은 이자율 변동, 세금, 수수료 등에 따라 달라질 수 있습니다. 
              이 계산기는 복리 이자를 기반으로 한 이론적 계산 결과를 보여줍니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 이자율은 어떻게 정해야 하나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 일반 적금은 2~3%, 예금은 2~2.5% 정도를 참고하세요. 
              실제 금리는 은행별, 상품별로 다르므로 최신 금리를 확인하시기 바랍니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 초기 예치금이 음수로 나오면 어떻게 되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 초기 예치금이 음수로 나오면, 매월 납입금만으로도 목표 금액을 달성할 수 있다는 의미입니다. 
              이 경우 초기 예치금 없이 매월 납입만으로도 목표를 달성할 수 있습니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 기간 계산에서 50년 이상이 나오면?
            </strong>
            <p className="text-slate-500 m-0">
              A. 매월 납입금이 너무 적거나 이자율이 낮아서 목표 금액 달성이 어려운 상황입니다. 
              매월 납입금을 늘리거나 이자율이 높은 상품을 고려해보세요.
            </p>
          </div>

          <div>
            <strong className="text-blue-500 block mb-2">
              Q. 세금은 포함되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 아니요, 이 계산기는 세전 금액 기준입니다. 실제 수령액은 이자소득세(일반과세 15.4%)를 
              공제해야 합니다. 세후 실수령액은 예·적금 계산기를 참고하세요.
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

