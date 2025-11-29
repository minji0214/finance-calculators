import type { Metadata } from 'next';
import Link from 'next/link';
import { realEstateMeta, realEstateSchema, realEstateFAQSchema } from './meta';
import RealEstateForm from './components/RealEstateForm';
import DetailsSection from './components/DetailsSection';

export const metadata: Metadata = realEstateMeta;

export default function RealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateFAQSchema),
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
              부동산 구매 비용 계산기 | 취득세 등록세 자동 계산
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              부동산 구매 시 발생하는 총 비용을 계산하세요. 취득세, 등록세, 중개수수료,
              양도소득세를 한눈에 확인할 수 있습니다
            </p>
            <div className="mt-4 inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              ✨ 2025년 부동산 규제 반영
            </div>
          </div>

          {/* 안내 문구 */}
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800 text-center">
              ⚠️ 이 계산기는 참고용으로만 사용하세요. 실제 세금과 수수료는 지역별, 상품별로 다를 수 있으며, 
              정책 변경에 따라 달라질 수 있습니다. 부동산 구매 전에는 세무사나 부동산 전문가와 상담하시기 바랍니다.
            </p>
          </div>

          {/* 계산기 */}
          <RealEstateForm />

          {/* 설명 섹션 */}
          <DetailsSection />
        </div>
      </main>
    </>
  );
}

