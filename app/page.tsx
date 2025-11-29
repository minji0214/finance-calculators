import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-5">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-slate-900 font-bold tracking-tight">
            금융 계산기
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            금융 초보자도 쉽게 사용할 수 있는 다양한 금융 계산기
          </p>
        </div>

        {/* 계산기 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 복리 계산기 */}
          <Link
            href="/calculators/compound-interest"
            className="block bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:border-blue-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                복리 계산기
              </h2>
              <span className="text-blue-500 text-2xl">→</span>
            </div>
            <p className="text-slate-600 mb-4">
              초기 투자금과 매월 납입금을 입력하면 복리로 얼마가 되는지 계산해드립니다
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                투자 수익
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                복리 효과
              </span>
            </div>
          </Link>

          {/* 예·적금 계산기 */}
          <Link
            href="/calculators/savings"
            className="block bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:border-green-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                예·적금 이자 계산기
              </h2>
              <span className="text-green-500 text-2xl">→</span>
            </div>
            <p className="text-slate-600 mb-4">
              예금과 적금의 이자를 쉽게 계산하세요. 세후 이자, 만기수령액을 자동으로 계산해드립니다
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                예금 계산
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                적금 계산
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                세후 이자
              </span>
            </div>
          </Link>

          {/* 4대보험 계산기 */}
          <Link
            href="/calculators/insurance"
            className="block bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:border-orange-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                4대보험 계산기
              </h2>
              <span className="text-orange-500 text-2xl">→</span>
            </div>
            <p className="text-slate-600 mb-4">
              4대보험료와 실수령액을 쉽게 계산하세요. 2025년 국민연금 개정안을 반영합니다
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                실수령액 계산
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                2025년 개정안
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                급여 계산
              </span>
            </div>
          </Link>

          {/* 목표 금액 역산 계산기 */}
          <Link
            href="/calculators/reverse-goal"
            className="block bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:border-purple-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                목표 금액 역산 계산기
              </h2>
              <span className="text-purple-500 text-2xl">→</span>
            </div>
            <p className="text-slate-600 mb-4">
              목표 금액을 달성하기 위해 필요한 매월 저축액, 기간, 초기 예치금을 역산 계산합니다
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                매월 저축액
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                기간 계산
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                목표 달성
              </span>
            </div>
          </Link>

          {/* 대출 중도상환 계산기 */}
          <Link
            href="/calculators/early-repayment"
            className="block bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:border-red-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                대출 중도상환 계산기
              </h2>
              <span className="text-red-500 text-2xl">→</span>
            </div>
            <p className="text-slate-600 mb-4">
              대출 중도상환 시 이자 절감액을 계산하세요. 원리금균등상환, 원금균등상환 모두 지원합니다
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                이자 절감
              </span>
              <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                중도상환
              </span>
              <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                대출 계산
              </span>
            </div>
          </Link>

          {/* 부동산 구매 비용 계산기 */}
          <Link
            href="/calculators/real-estate"
            className="block bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:border-amber-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                부동산 구매 비용 계산기
              </h2>
              <span className="text-amber-500 text-2xl">→</span>
            </div>
            <p className="text-slate-600 mb-4">
              부동산 구매 시 발생하는 총 비용을 계산하세요. 취득세, 등록세, 양도소득세를 한눈에 확인합니다
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                취득세 계산
              </span>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                첫 주택 혜택
              </span>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                2025년 규제
              </span>
            </div>
          </Link>
        </div>

        {/* 추가 안내 */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            더 많은 계산기가 곧 추가될 예정입니다
          </p>
        </div>
      </div>
    </main>
  );
}
