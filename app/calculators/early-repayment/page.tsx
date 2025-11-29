import type { Metadata } from 'next';
import Link from 'next/link';
import {
  earlyRepaymentMeta,
  earlyRepaymentSchema,
  earlyRepaymentFAQSchema,
} from './meta';
import EarlyRepaymentForm from './components/EarlyRepaymentForm';
import DetailsSection from './components/DetailsSection';

export const metadata: Metadata = earlyRepaymentMeta;

export default function EarlyRepaymentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(earlyRepaymentSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(earlyRepaymentFAQSchema),
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
              대출 중도상환 계산기 | 이자 절감액 자동 계산
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              대출 중도상환 시 이자 절감액을 계산하세요. 원리금균등상환, 원금균등상환
              모두 지원합니다
            </p>
          </div>

          {/* 계산기 */}
          <EarlyRepaymentForm />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}

