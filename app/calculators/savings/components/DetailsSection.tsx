export default function DetailsSection() {
  return (
    <details className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <summary className="text-xl md:text-2xl font-semibold text-slate-900 cursor-pointer mb-6 list-none p-3 rounded-lg transition-colors hover:bg-slate-50">
        💡 예금·적금 이자 계산 자세히 알아보기
      </summary>
      <div className="text-base leading-relaxed text-slate-600 pl-3">
        <h2 className="text-xl mb-4 text-slate-900 font-semibold">
          예금과 적금의 차이
        </h2>
        <p className="mb-4">
          <strong>예금</strong>은 한 번에 일정 금액을 예치하고 만기까지 유지하는 방식입니다. 
          예를 들어 100만원을 1년간 예치하면, 그 금액에 대해 이자가 붙습니다. 
          예금은 단리와 복리 두 가지 방식으로 이자를 계산할 수 있습니다.
        </p>
        <p className="mb-6">
          <strong>적금</strong>은 매월 정해진 금액을 납입하는 방식입니다. 
          예를 들어 매월 10만원씩 12개월 동안 납입하면, 총 120만원을 납입하게 되고 
          각 납입금마다 이자가 붙어 복리 효과를 얻을 수 있습니다. 
          적금은 일반적으로 복리 방식으로 계산됩니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          단리와 복리의 차이
        </h2>
        <p className="mb-4">
          <strong>단리</strong>는 원금에만 이자가 붙는 방식입니다. 
          예를 들어 100만원을 연 3%로 1년 예치하면, 1년 후 3만원의 이자를 받게 됩니다. 
          매년 이자가 동일하게 계산됩니다.
        </p>
        <p className="mb-6">
          <strong>복리</strong>는 원금과 이자에 다시 이자가 붙는 방식입니다. 
          같은 조건에서 복리로 계산하면, 첫 해 3만원의 이자를 받고, 
          다음 해에는 103만원에 대해 이자가 붙어 더 많은 이자를 받게 됩니다. 
          시간이 길수록 복리의 효과가 커집니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          세후 이자란?
        </h2>
        <p className="mb-4">
          은행에서 받는 이자에는 <strong>이자소득세</strong>가 부과됩니다. 
          일반과세의 경우 15.4%의 세금이 부과되며, 세제혜택을 받는 경우 9.5%, 
          비과세 상품의 경우 세금이 없습니다.
        </p>
        <p className="mb-6">
          <strong>세전 이자</strong>는 세금을 제하기 전 이자이고, 
          <strong>세후 이자</strong>는 실제로 받게 되는 이자입니다. 
          만기수령액은 원금에 세후 이자를 더한 금액입니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          사용 방법 (Step-by-Step)
        </h2>
        <ol className="ml-5 mb-6 leading-relaxed list-decimal space-y-2">
          <li>
            <strong>예금 계산기:</strong> 예치금액, 금리, 기간, 이자 방식(단리/복리), 
            과세 옵션을 입력하면 세후 이자와 만기수령액을 계산합니다.
          </li>
          <li>
            <strong>적금 계산기:</strong> 매월 납입금, 금리, 기간(개월), 
            과세 옵션을 입력하면 총 납입금, 세후 이자, 만기수령액을 계산합니다.
          </li>
          <li>
            값을 입력하면 자동으로 계산되어 결과를 확인할 수 있습니다.
          </li>
          <li>
            과세 옵션을 변경하면 세후 이자와 만기수령액이 자동으로 업데이트됩니다.
          </li>
        </ol>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">예시</h2>
        <div className="mb-6 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">예금 예시</p>
            <p className="mb-2">100만원을 연 3%로 12개월 예치 (단리, 일반과세)</p>
            <ul className="ml-6 list-disc space-y-1 text-sm">
              <li>세전 이자: 30,000원</li>
              <li>세금 (15.4%): 4,620원</li>
              <li>세후 이자: 25,380원</li>
              <li>만기수령액: 1,025,380원</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 mb-2">적금 예시</p>
            <p className="mb-2">매월 30만원씩 연 3%로 12개월 납입 (일반과세)</p>
            <ul className="ml-6 list-disc space-y-1 text-sm">
              <li>총 납입금: 3,600,000원</li>
              <li>세전 이자: 약 58,000원</li>
              <li>세금 (15.4%): 약 8,900원</li>
              <li>세후 이자: 약 49,100원</li>
              <li>만기수령액: 약 3,649,100원</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          자주 묻는 질문(FAQ)
        </h2>

        <div className="mt-5 space-y-5">
          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 세후 이자란 무엇인가요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 세후 이자는 이자소득세를 제한 후 실제로 받게 되는 이자입니다. 
              일반과세의 경우 15.4%의 세금이 부과되므로, 세전 이자에서 세금을 뺀 금액이 세후 이자입니다. 
              만기수령액은 원금에 세후 이자를 더한 금액입니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 일반과세 15.4%는 어떻게 적용되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 일반과세 15.4%는 이자소득에 부과되는 기본 세율입니다. 
              예를 들어 세전 이자가 10만원이면, 세금은 15,400원이고 세후 이자는 84,600원이 됩니다. 
              세제혜택을 받는 경우 9.5%, 비과세 상품의 경우 세금이 없습니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 적금이 더 유리한 이유는?
            </strong>
            <p className="text-slate-500 m-0">
              A. 적금은 매월 납입하는 방식이므로 복리 효과를 더 크게 받을 수 있습니다. 
              각 납입금마다 이자가 붙어 시간이 지날수록 이자에 이자가 붙는 효과가 커집니다. 
              또한 정기적으로 저축하는 습관을 기를 수 있어 재테크에 유리합니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 중도해지 시 이자는 어떻게 되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 중도해지 시에는 실제 납입 기간에 따라 이자가 계산되며, 
              일부 은행에서는 중도해지 시 약정 금리보다 낮은 금리가 적용될 수 있습니다. 
              이 계산기는 만기까지 유지한다는 가정 하에 계산되므로, 
              중도해지 시 실제 수령액은 다를 수 있습니다.
            </p>
          </div>

          <div>
            <strong className="text-blue-500 block mb-2">
              Q. 단리와 복리 차이는?
            </strong>
            <p className="text-slate-500 m-0">
              A. 단리는 원금에만 이자가 붙는 방식이고, 복리는 원금과 이자에 다시 이자가 붙는 방식입니다. 
              같은 조건이라도 복리가 시간이 지날수록 더 큰 효과를 냅니다. 
              예를 들어 100만원을 연 3%로 3년 예치하면, 단리는 9만원, 복리는 약 9.27만원의 이자를 받게 됩니다.
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}


