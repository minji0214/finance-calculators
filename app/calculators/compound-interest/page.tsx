import type { Metadata } from 'next';
import {
  compoundInterestMeta,
  compoundInterestSchema,
  compoundInterestBreadcrumbSchema,
  compoundInterestFAQSchema,
  compoundInterestHowToSchema,
} from './meta';
import CompoundInterestCalculator from './components/Calculator';
import DetailsSection from './components/DetailsSection';
import Link from 'next/link';

export const metadata: Metadata = compoundInterestMeta;

export default function CompoundInterestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(compoundInterestSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(compoundInterestBreadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(compoundInterestFAQSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(compoundInterestHowToSchema),
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
              복리 계산기 | 자동 복리 수익 계산
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              초기 투자금과 매월 납입금을 입력하면 복리로 얼마가 되는지
              계산해드립니다
            </p>
          </div>

          {/* 안내 문구 */}
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800 text-center">
              ⚠️ 이 계산기는 참고용으로만 사용하세요. 실제 수익률은 시장 변동, 수수료, 세금 등에 따라 달라질 수 있습니다. 
              중요한 금융 결정 전에는 전문가와 상담하시기 바랍니다.
            </p>
          </div>

          {/* 계산기 */}
          <CompoundInterestCalculator />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}

