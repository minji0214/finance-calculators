import type { Metadata } from 'next';
import Link from 'next/link';
import { reverseGoalMeta, reverseGoalSchema, reverseGoalFAQSchema } from './meta';
import ReverseCalculatorForm from './components/ReverseCalculatorForm';
import DetailsSection from './components/DetailsSection';

export const metadata: Metadata = reverseGoalMeta;

export default function ReverseGoalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reverseGoalSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reverseGoalFAQSchema),
        }}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-5">
          {/* 네비게이션 */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span className="mr-2">←</span>
              <span>홈으로 돌아가기</span>
            </Link>
          </div>

          {/* 헤더 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3 text-slate-900 font-bold tracking-tight">
              목표 금액 역산 계산기 | 매월 저축액 자동 계산
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              목표 금액을 달성하기 위해 필요한 매월 저축액, 기간, 초기 예치금을
              역산 계산해드립니다
            </p>
          </div>

          {/* 안내 문구 */}
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800 text-center">
              ⚠️ 이 계산기는 참고용으로만 사용하세요. 실제 이자율 변동, 세금, 수수료 등에 따라 결과가 달라질 수 있습니다. 
              중요한 저축 계획 수립 시에는 전문가와 상담하시기 바랍니다.
            </p>
          </div>

          {/* 계산기 */}
          <ReverseCalculatorForm />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}

