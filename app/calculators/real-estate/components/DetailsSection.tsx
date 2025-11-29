export default function DetailsSection() {
  return (
    <details className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <summary className="text-xl md:text-2xl font-semibold text-slate-900 cursor-pointer mb-6 list-none p-3 rounded-lg transition-colors hover:bg-slate-50">
        💡 부동산 구매 비용 계산기 자세히 알아보기
      </summary>
      <div className="text-base leading-relaxed text-slate-600 pl-3">
        <h2 className="text-xl mb-4 text-slate-900 font-semibold">
          부동산 구매 시 발생하는 비용
        </h2>
        <p className="mb-4">
          부동산을 구매할 때는 부동산 가격 외에도 여러 세금과 수수료가 발생합니다. 
          이 계산기를 통해 구매 전 예상 비용을 미리 확인할 수 있습니다.
        </p>
        <p className="mb-6">
          최근 부동산 규제에 따라 규제지역, 첫 주택 구매자, 실거주 의무 등에 따라 
          세금이 달라질 수 있습니다.
        </p>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          주요 세금 및 수수료
        </h2>
        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-1">취득세</p>
            <p className="text-sm text-blue-800">
              부동산을 취득할 때 부과되는 세금입니다. 주택의 경우 가격에 따라 1~4%가 적용되며, 
              첫 주택 구매자는 감면 혜택을 받을 수 있습니다.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 mb-1">등록세</p>
            <p className="text-sm text-green-800">
              부동산 소유권을 등기할 때 부과되는 세금입니다. 주택은 0.8%, 
              오피스텔은 0.5%가 적용됩니다.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-900 mb-1">중개수수료</p>
            <p className="text-sm text-purple-800">
              부동산 중개업소를 통해 거래할 때 발생하는 수수료입니다. 
              부동산 가격에 따라 상한이 정해져 있습니다.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-900 mb-1">양도소득세 (단기매도)</p>
            <p className="text-sm text-red-800">
              2년 이내에 부동산을 매도할 경우 양도소득세가 부과됩니다. 
              규제지역은 70%, 비규제지역은 60%의 높은 세율이 적용됩니다.
            </p>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          첫 주택 구매자 혜택
        </h2>
        <p className="mb-4">
          생애최초 주택 구매자는 다음과 같은 혜택을 받을 수 있습니다:
        </p>
        <ul className="ml-5 mb-6 leading-relaxed list-disc space-y-2">
          <li>
            <strong>1.2억원 이하 주택:</strong> 취득세, 등록세 전액 면제
          </li>
          <li>
            <strong>6억원 이하 주택:</strong> 취득세 50% 감면
          </li>
          <li>
            <strong>대출 한도:</strong> 규제지역 외 지역에서 LTV 80%까지 가능
          </li>
        </ul>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          대출 한도 제한
        </h2>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
          <p className="font-semibold text-red-900 mb-2">⚠️ 6억원 이상 주택 대출 제한</p>
          <p className="text-sm text-red-800 mb-2">
            주택 가격이 <strong>6억원을 초과</strong>하는 경우, 주택담보대출이 제한됩니다.
          </p>
          <ul className="ml-5 text-sm text-red-800 list-disc space-y-1">
            <li>6억원 초과 주택: 주택담보대출 불가 (전액 현금 구매 필요)</li>
            <li>6억원 이하 주택: 규제지역 LTV 40~50%, 비규제지역 LTV 70~80%</li>
            <li>첫 주택 구매자: 비규제지역에서 LTV 80%까지 가능</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
          <p className="font-semibold text-blue-900 mb-2">대출 한도 기준 (2025년)</p>
          <div className="space-y-2 text-sm text-blue-800">
            <div>
              <strong>규제지역:</strong>
              <ul className="ml-5 mt-1 list-disc space-y-1">
                <li>6억원 이하: LTV 40~50% (은행별 상이)</li>
                <li>6억원 초과: 대출 불가</li>
              </ul>
            </div>
            <div>
              <strong>비규제지역:</strong>
              <ul className="ml-5 mt-1 list-disc space-y-1">
                <li>6억원 이하: LTV 70~80% (첫 주택 구매자 80%)</li>
                <li>6억원 초과: 대출 불가</li>
              </ul>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200">
              <p className="text-xs text-blue-700">
                💡 LTV(Loan to Value): 주택 가격 대비 대출 비율. 
                6억원 초과 주택은 전액 현금 구매가 필요합니다.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          규제지역과 비규제지역
        </h2>
        <p className="mb-4">
          규제지역은 투기과열지구, 투기지역, 조정대상지역 등을 말합니다. 
          규제지역에서는 다음과 같은 제한이 있습니다:
        </p>
        <ul className="ml-5 mb-4 leading-relaxed list-disc space-y-2">
          <li>취득세 10% 가산</li>
          <li>단기매도 시 양도소득세 70% (비규제지역 60%)</li>
          <li>대출 한도 제한 (LTV 40~50%)</li>
          <li>실거주 의무</li>
        </ul>

        <h3 className="text-lg mt-6 mb-3 text-slate-900 font-semibold">
          주요 규제지역 (2025년 기준)
        </h3>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
          <p className="font-semibold text-slate-900 mb-2">투기과열지구:</p>
          <ul className="ml-5 text-sm text-slate-700 list-disc space-y-1 mb-3">
            <li>서울: 강남구, 서초구, 송파구, 강동구 일부</li>
            <li>경기: 성남시 분당구, 용인시 기흥구, 수원시 영통구 등</li>
            <li>부산: 해운대구, 수영구 일부</li>
          </ul>
          
          <p className="font-semibold text-slate-900 mb-2">투기지역:</p>
          <ul className="ml-5 text-sm text-slate-700 list-disc space-y-1 mb-3">
            <li>서울: 강남구, 서초구, 송파구, 강동구, 마포구, 용산구 등</li>
            <li>경기: 성남시, 용인시, 수원시, 고양시, 부천시 등 일부 지역</li>
            <li>인천: 연수구, 남동구 일부</li>
            <li>부산: 해운대구, 수영구, 연제구 등</li>
            <li>세종: 조치원읍 등</li>
          </ul>
          
          <p className="font-semibold text-slate-900 mb-2">조정대상지역:</p>
          <ul className="ml-5 text-sm text-slate-700 list-disc space-y-1">
            <li>서울 전 지역</li>
            <li>경기: 광명시, 과천시, 구리시, 고양시, 성남시, 수원시, 안양시, 용인시, 의정부시, 하남시 등</li>
            <li>인천: 연수구, 남동구, 부평구 등</li>
            <li>부산: 해운대구, 수영구, 연제구, 남구 등</li>
            <li>대구: 수성구 일부</li>
            <li>광주: 광산구 일부</li>
            <li>대전: 유성구 일부</li>
            <li>울산: 남구 일부</li>
            <li>세종: 조치원읍 등</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
          <p className="text-sm text-blue-800">
            <strong>💡 참고:</strong> 규제지역은 정부 정책에 따라 변경될 수 있습니다. 
            정확한 규제지역 여부는 국토교통부 홈페이지(
            <a href="https://www.molit.go.kr" target="_blank" rel="noopener noreferrer" className="underline">
              www.molit.go.kr
            </a>
            ) 또는 해당 지자체 홈페이지에서 확인하시기 바랍니다.
          </p>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          사용 방법 (Step-by-Step)
        </h2>
        <ol className="ml-5 mb-6 leading-relaxed list-decimal space-y-2">
          <li>
            <strong>부동산 가격 입력:</strong> 구매하려는 부동산의 가격을 입력합니다.
          </li>
          <li>
            <strong>부동산 유형 선택:</strong> 아파트, 주택, 오피스텔, 상업용 중 선택합니다.
          </li>
          <li>
            <strong>규제지역 여부 선택:</strong> 해당 부동산이 규제지역에 속하는지 선택합니다.
          </li>
          <li>
            <strong>첫 주택 구매자 여부:</strong> 생애최초 주택 구매자인지 선택합니다.
          </li>
          <li>
            <strong>실거주 의무:</strong> 실제 거주할 예정인지 선택합니다.
          </li>
          <li>
            <strong>단기매도 여부:</strong> 2년 이내 매도 예정인지 선택합니다.
          </li>
          <li>
            <strong>대출 정보 입력:</strong> 대출 금액, 이자율, 기간을 입력합니다 (선택).
          </li>
          <li>
            <strong>결과 확인:</strong> 총 구매 비용, 세금, 수수료를 확인할 수 있습니다.
          </li>
        </ol>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">예시</h2>
        <div className="mb-6 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">
              예시 1: 첫 주택 구매자, 1억원 아파트 (비규제지역)
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-blue-800">
              <li>부동산 가격: 1억원</li>
              <li>취득세: 면제 (첫 주택 구매자)</li>
              <li>등록세: 면제 (첫 주택 구매자)</li>
              <li>중개수수료: 약 30만원</li>
              <li>인지세: 약 10만원</li>
              <li>총 추가 비용: 약 40만원</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-900 mb-2">
              예시 2: 규제지역, 5억원 아파트, 2년 이내 매도 예정
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm text-red-800">
              <li>부동산 가격: 5억원</li>
              <li>취득세: 약 220만원 (2% + 10% 가산)</li>
              <li>등록세: 약 400만원</li>
              <li>중개수수료: 약 100만원</li>
              <li>양도소득세: 약 3,500만원 (2년 이내 매도 시, 추정)</li>
              <li>총 추가 비용: 약 4,220만원</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl mt-8 mb-4 text-slate-900 font-semibold">
          자주 묻는 질문(FAQ)
        </h2>

        <div className="mt-5 space-y-5">
          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 첫 주택 구매자 조건은 무엇인가요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 생애최초로 주택을 구매하는 사람을 말합니다. 본인과 배우자 모두 
              주택을 보유한 적이 없어야 하며, 1가구 1주택 원칙을 지켜야 합니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 규제지역은 어떻게 확인하나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 국토교통부나 해당 지자체 홈페이지에서 확인할 수 있습니다. 
              투기과열지구, 투기지역, 조정대상지역 등이 규제지역에 해당합니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 6억원 이상 주택은 대출이 안 되나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 주택 가격이 6억원을 초과하는 경우 주택담보대출이 제한됩니다. 
              6억원 초과 주택은 전액 현금 구매가 필요합니다. 6억원 이하 주택은 규제지역 LTV 40~50%, 
              비규제지역 LTV 70~80%까지 대출이 가능합니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 양도소득세는 언제 내나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 부동산을 매도할 때 발생합니다. 2년 이내 매도 시 단기매도로 간주되어 
              높은 세율이 적용됩니다. 실제 양도소득세는 (양도가액 - 취득가액 - 필요경비)에 대해 계산됩니다.
            </p>
          </div>

          <div className="pb-5 border-b border-slate-200">
            <strong className="text-blue-500 block mb-2">
              Q. 실거주 의무는 무엇인가요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 규제지역에서 주택을 구매한 경우, 실제로 거주해야 하는 의무입니다. 
              실거주 의무를 위반하면 양도소득세가 추가로 가산될 수 있습니다.
            </p>
          </div>

          <div>
            <strong className="text-blue-500 block mb-2">
              Q. 계산 결과와 실제 비용이 다를 수 있나요?
            </strong>
            <p className="text-slate-500 m-0">
              A. 네, 실제 비용은 지역별 세율, 추가 감면 혜택, 대출 조건 등에 따라 
              달라질 수 있습니다. 이 계산기는 일반적인 기준으로 계산하므로, 
              실제 구매 전에는 세무사나 부동산 전문가와 상담하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

