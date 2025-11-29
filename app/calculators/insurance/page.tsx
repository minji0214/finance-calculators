import type { Metadata } from 'next';
import Link from 'next/link';
import { insuranceMeta, insuranceSchema, insuranceFAQSchema } from './meta';
import InsuranceForm from './components/InsuranceForm';
import DetailsSection from './components/DetailsSection';

export const metadata: Metadata = insuranceMeta;

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(insuranceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(insuranceFAQSchema),
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
              4대보험 계산기 | 실수령액 자동 계산
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              연봉을 입력하면 4대보험료와 실수령액을 자동으로 계산해드립니다. 
              국민연금, 건강보험, 고용보험, 산재보험 공제액을 한눈에 확인하세요
            </p>
            <div className="mt-4 inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              ✨ 2025년 국민연금 개정안 반영
            </div>
          </div>

          {/* 계산기 */}
          <InsuranceForm />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}

