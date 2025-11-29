import type { Metadata } from 'next';
import Link from 'next/link';
import { savingsMeta, savingsSchema, savingsFAQSchema } from './meta';
import SavingsCalculator from './components/SavingsCalculator';
import DetailsSection from './components/DetailsSection';

export const metadata: Metadata = savingsMeta;

export default function SavingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(savingsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(savingsFAQSchema),
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
              예·적금 이자 계산기 | 세후 이자 자동 계산
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              예금과 적금의 이자를 쉽게 계산하세요. 세후 이자, 만기수령액을
              자동으로 계산해드립니다
            </p>
          </div>

          {/* 안내 문구 */}
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800 text-center">
              ⚠️ 이 계산기는 참고용으로만 사용하세요. 실제 이자율과 세금은 은행별, 상품별로 다를 수 있습니다. 
              정확한 정보는 해당 금융기관에 직접 문의하시기 바랍니다.
            </p>
          </div>

          {/* 계산기 */}
          <SavingsCalculator />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}

