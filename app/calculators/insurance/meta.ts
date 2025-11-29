import type { Metadata } from 'next';

export const insuranceMeta: Metadata = {
  title: '4대보험 계산기 | 연봉 실수령액 자동 계산 (2025년 개정안 반영)',
  description:
    '연봉을 입력하면 4대보험료와 실수령액을 자동으로 계산합니다. 국민연금, 건강보험, 고용보험, 산재보험 공제액을 한눈에 확인하세요. 2025년 국민연금 개정안 반영.',
  keywords: [
    '4대보험 계산기',
    '연봉 실수령액',
    '실수령액 계산',
    '급여 계산기',
    '연봉 계산기',
    '국민연금 계산',
    '건강보험 계산',
    '고용보험 계산',
    '산재보험 계산',
    '2025년 국민연금 개정안',
  ],
  openGraph: {
    title: '4대보험 계산기 | 연봉 실수령액 자동 계산',
    description:
      '연봉을 입력하면 4대보험료와 실수령액을 자동으로 계산합니다. 국민연금, 건강보험, 고용보험, 산재보험 공제액을 한눈에 확인하세요.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4대보험 계산기 | 연봉 실수령액 자동 계산',
    description:
      '연봉을 입력하면 4대보험료와 실수령액을 자동으로 계산합니다. 2025년 국민연금 개정안 반영.',
  },
};

export const insuranceSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '4대보험 계산기',
  url: 'https://yourdomain.com/calculators/insurance',
  description: '4대보험료와 실수령액을 자동으로 계산해주는 계산기',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
};

export const insuranceFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '실수령액은 어떻게 계산되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '실수령액 = 월 급여 - (국민연금 + 건강보험 + 고용보험) 본인 부담금입니다. 산재보험은 본인 부담이 없으므로 실수령액에 영향을 주지 않습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '2025년 국민연금 개정안이 언제부터 적용되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2026년부터 단계적으로 적용됩니다. 2025년은 현행 9%가 유지되며, 2026년부터 매년 0.5%p씩 인상되어 2033년에는 13%에 도달합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사업주는 얼마를 부담하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '국민연금, 건강보험, 고용보험은 본인과 사업주가 각각 50%씩 부담합니다. 산재보험은 사업주가 전액 부담합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '산재보험료는 업종별로 다른가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 산재보험료는 업종별 위험도에 따라 차등 적용됩니다. 일반 사무직은 약 0.7%, 건설업은 약 1.2% 등으로 다릅니다.',
      },
    },
    {
      '@type': 'Question',
      name: '소득세와 지방소득세는 포함되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아니요, 이 계산기는 4대보험만 계산합니다. 실제 실수령액은 소득세와 지방소득세를 추가로 공제해야 합니다.',
      },
    },
  ],
};

