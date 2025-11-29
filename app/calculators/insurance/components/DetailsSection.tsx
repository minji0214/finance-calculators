export default function DetailsSection() {
  return (
    <details className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <summary className="text-xl md:text-2xl font-semibold text-slate-900 cursor-pointer mb-6 list-none p-3 rounded-lg transition-colors hover:bg-slate-50">
        💡 4대보험 자세히 알아보기
      </summary>
      <div className="text-base leading-relaxed text-slate-600 pl-3">
        <h2 className="text-xl mb-4 text-slate-900 font-semibold">
          4대보험이란?
        </h2>
        <p className="mb-4">
          <strong>4대보험</strong>은 근로자와 사업주가 함께 부담하는 사회보험입니다. 
          국민연금, 건강보험, 고용보험, 산재보험으로 구성되어 있으며, 
          급여에서 일정 비율이 공제되어 실수령액이 결정됩니다.
        </p>
        <p className="mb-6">
          각 보험은 본인과 사업주가 각각 50%씩 부담하지만, 산재보험은 사업주가 전액 부담합니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          2025년 국민연금 개정안 주요 내용
        </h2>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-orange-900 mb-2">보험료율 단계적 인상</p>
          <ul className="ml-5 space-y-1 text-sm text-orange-800 list-disc">
            <li>2025년: 9% (현행 유지)</li>
            <li>2026년: 9.5% (0.5%p 인상)</li>
            <li>2027년: 10.0%</li>
            <li>2028년: 10.5%</li>
            <li>2029년: 11.0%</li>
            <li>2030년: 11.5%</li>
            <li>2031년: 12.0%</li>
            <li>2032년: 12.5%</li>
            <li>2033년: 13.0% (최종 목표)</li>
          </ul>
        </div>
        <p className="mb-4">
          국민연금법 개정안이 2025년 3월 국회를 통과하여 2026년부터 단계적으로 시행됩니다. 
          보험료율이 매년 0.5%p씩 인상되어 2033년에는 13%에 도달합니다.
        </p>
        <p className="mb-6">
          또한 소득대체율이 2026년부터 43%로 상향 조정되며, 출산 크레딧과 군 복무 크레딧이 확대됩니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          각 보험의 역할
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-1">국민연금</p>
            <p className="text-sm text-blue-800">
              노후 생활을 위한 연금을 제공합니다. 가입 기간이 길수록 연금액이 증가합니다.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 mb-1">건강보험</p>
            <p className="text-sm text-green-800">
              질병이나 부상 시 의료비를 지원합니다. 본인과 가족 모두 혜택을 받을 수 있습니다.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-900 mb-1">고용보험</p>
            <p className="text-sm text-purple-800">
              실업 시 실업급여를 지급하고, 직업 훈련을 지원합니다.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-900 mb-1">산재보험</p>
            <p className="text-sm text-red-800">
              업무상 재해로 인한 부상이나 질병을 보상합니다. 사업주가 전액 부담합니다.
            </p>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          사용 방법 (Step-by-Step)
        </h2>
        <ol className="ml-5 mb-6 leading-relaxed list-decimal space-y-2">
          <li>
            <strong>연봉 입력:</strong> 본인의 연봉을 입력합니다 (세전 연봉)
          </li>
          <li>
            <strong>계산 연도 선택:</strong> 계산하고자 하는 연도를 선택합니다. 
            2026년 이후를 선택하면 국민연금 개정안이 적용됩니다.
          </li>
          <li>
            <strong>자동 계산:</strong> 입력하면 자동으로 월 급여, 4대보험 공제액, 실수령액이 계산됩니다.
          </li>
          <li>
            <strong>결과 확인:</strong> 월 실수령액, 연 실수령액, 본인 부담금, 사업주 부담금, 총 인건비를 확인할 수 있습니다.
          </li>
        </ol>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">예시</h2>
        <div className="mb-6 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">예시 1: 연봉 3,600만원 (2025년)</p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-blue-800">
              <li>월 급여: 300만원</li>
              <li>국민연금 (9%): 본인 부담 135,000원</li>
              <li>건강보험 (3.545%): 본인 부담 53,175원</li>
              <li>고용보험 (0.9%): 본인 부담 13,500원</li>
              <li>산재보험 (0.7%): 본인 부담 없음</li>
              <li>본인 부담 총액: 약 201,675원</li>
              <li>월 실수령액: 약 2,798,325원</li>
              <li>연 실수령액: 약 33,579,900원</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="font-semibold text-orange-900 mb-2">예시 2: 연봉 3,600만원 (2026년, 개정안 적용)</p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-orange-800">
              <li>월 급여: 300만원</li>
              <li>국민연금 (9.5%): 본인 부담 142,500원 (인상)</li>
              <li>건강보험 (3.545%): 본인 부담 53,175원</li>
              <li>고용보험 (0.9%): 본인 부담 13,500원</li>
              <li>산재보험 (0.7%): 본인 부담 없음</li>
              <li>본인 부담 총액: 약 209,175원</li>
              <li>월 실수령액: 약 2,790,825원 (약 7,500원 감소)</li>
              <li>연 실수령액: 약 33,489,900원 (약 90,000원 감소)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          자주 묻는 질문(FAQ)
        </h2>

        <div className="mt-5 space-y-5">
          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 실수령액은 어떻게 계산되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 실수령액 = 월 급여 - (국민연금 + 건강보험 + 고용보험) 본인 부담금입니다. 
              산재보험은 본인 부담이 없으므로 실수령액에 영향을 주지 않습니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 2025년 국민연금 개정안이 언제부터 적용되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 2026년부터 단계적으로 적용됩니다. 2025년은 현행 9%가 유지되며, 
              2026년부터 매년 0.5%p씩 인상되어 2033년에는 13%에 도달합니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 사업주는 얼마를 부담하나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 국민연금, 건강보험, 고용보험은 본인과 사업주가 각각 50%씩 부담합니다. 
              산재보험은 사업주가 전액 부담합니다. 총 인건비는 급여 + 사업주 부담금입니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 산재보험료는 업종별로 다른가요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 산재보험료는 업종별 위험도에 따라 차등 적용됩니다. 
              일반 사무직은 약 0.7%, 건설업은 약 1.2% 등으로 다릅니다. 
              이 계산기는 일반 업종 기준(0.7%)으로 계산합니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 보험료 계산에 상한선이 있나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 각 보험마다 보험료 계산 상한선이 있습니다. 
              국민연금은 월 5,530,000원, 건강보험은 월 9,621,000원까지 적용됩니다. 
              이 계산기는 상한선을 고려하지 않은 기본 계산입니다.
            </p>
          </div>

          <div>
            <strong className="text-blue-500 block mb-2">
              Q. 소득세와 지방소득세는 포함되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 아니요, 이 계산기는 4대보험만 계산합니다. 
              실제 실수령액은 소득세와 지방소득세를 추가로 공제해야 합니다. 
              소득세는 급여와 공제 항목에 따라 달라집니다.
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

