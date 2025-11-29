import type { Metadata } from 'next';

export const realEstateMeta: Metadata = {
  title: '부동산 구매 비용 계산기 | 취득세 등록세 자동 계산 (2025년 규제 반영)',
  description:
    '부동산 구매 시 발생하는 총 비용을 계산하세요. 취득세, 등록세, 중개수수료, 양도소득세를 한눈에 확인. 첫 주택 구매자 혜택, 규제지역, 실거주 의무 반영.',
  keywords: [
    '부동산 구매 비용 계산기',
    '취득세 계산',
    '등록세 계산',
    '부동산 세금 계산',
    '첫 주택 구매자',
    '규제지역',
    '양도소득세 계산',
    '부동산 구매 총 비용',
    '중개수수료 계산',
  ],
  alternates: {
    canonical: 'https://finance-calculators-mj.vercel.app/calculators/real-estate',
  },
  openGraph: {
    title: '부동산 구매 비용 계산기 | 취득세 등록세 자동 계산',
    description:
      '부동산 구매 시 발생하는 총 비용을 계산하세요. 취득세, 등록세, 중개수수료, 양도소득세를 한눈에 확인.',
    type: 'website',
    url: 'https://finance-calculators-mj.vercel.app/calculators/real-estate',
    siteName: '금융 계산기',
  },
  twitter: {
    card: 'summary_large_image',
    title: '부동산 구매 비용 계산기 | 취득세 등록세 자동 계산',
    description:
      '부동산 구매 시 발생하는 총 비용을 계산하세요. 2025년 규제 반영.',
  },
};

export const realEstateSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '부동산 구매 비용 계산기',
  url: 'https://finance-calculators-mj.vercel.app/calculators/real-estate',
  description: '부동산 구매 시 발생하는 총 비용을 계산해주는 계산기',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
};

export const realEstateFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '부동산 구매 시 어떤 비용이 발생하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '부동산 가격 외에도 취득세, 등록세, 중개수수료, 인지세 등이 발생합니다. 2년 이내 매도 시 양도소득세도 부과됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '첫 주택 구매자 혜택은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '생애최초 주택 구매자는 1.2억원 이하 주택의 경우 취득세와 등록세를 전액 면제받을 수 있습니다. 6억원 이하 주택은 취득세 50% 감면 혜택을 받습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '규제지역과 비규제지역의 차이는?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '규제지역은 취득세 10% 가산, 단기매도 시 양도소득세 70% 적용, 대출 한도 제한 등의 규제가 있습니다. 비규제지역은 단기매도 시 양도소득세 60%가 적용됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '양도소득세는 언제 내나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '부동산을 매도할 때 발생합니다. 2년 이내 매도 시 단기매도로 간주되어 규제지역은 70%, 비규제지역은 60%의 높은 세율이 적용됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '실거주 의무는 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '규제지역에서 주택을 구매한 경우 실제로 거주해야 하는 의무입니다. 실거주 의무를 위반하면 양도소득세가 추가로 가산될 수 있습니다.',
      },
    },
  ],
};

