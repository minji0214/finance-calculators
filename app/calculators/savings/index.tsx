import type { Metadata } from 'next';
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

          {/* 계산기 */}
          <SavingsCalculator />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}


