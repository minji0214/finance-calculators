import type { Metadata } from 'next';
import { compoundInterestMeta, compoundInterestSchema } from './meta';
import CompoundInterestCalculator from './components/Calculator';
import DetailsSection from './components/DetailsSection';

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
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-5">
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

          {/* 계산기 */}
          <CompoundInterestCalculator />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}
