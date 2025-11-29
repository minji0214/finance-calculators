import type { Metadata } from 'next';

export const compoundInterestMeta: Metadata = {
  title: '복리 계산기 | 자동 복리 수익 계산 - 금융 초보자도 쉽게',
  description:
    '초기 투자금과 매월 납입금, 연 수익률, 투자기간을 입력하면 복리로 얼마가 되는지 계산해 줍니다. 쉬운 설명과 예시 포함. 복리 효과를 한눈에 확인하세요.',
  keywords: [
    '복리 계산기',
    '복리 이자 계산',
    '투자 수익 계산',
    '복리 효과',
    '매월 투자 계산',
    '장기 투자 수익',
    '복리 투자',
    '수익률 계산',
  ],
  alternates: {
    canonical: 'https://finance-calculators-mj.vercel.app/calculators/compound-interest',
  },
  openGraph: {
    title: '복리 계산기 | 자동 복리 수익 계산',
    description:
      '초기 투자금과 매월 납입금, 연 수익률, 투자기간을 입력하면 복리로 얼마가 되는지 계산해 줍니다.',
    type: 'website',
    url: 'https://finance-calculators-mj.vercel.app/calculators/compound-interest',
    siteName: '금융 계산기',
  },
  twitter: {
    card: 'summary_large_image',
    title: '복리 계산기 | 자동 복리 수익 계산',
    description:
      '초기 투자금과 매월 납입금, 연 수익률, 투자기간을 입력하면 복리로 얼마가 되는지 계산해 줍니다.',
  },
};

export const compoundInterestSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '복리 계산기',
  url: 'https://finance-calculators-mj.vercel.app/calculators/compound-interest',
  description: '금융 초보자도 사용할 수 있는 복리 계산기',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
};

export const compoundInterestBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '홈',
      item: 'https://finance-calculators-mj.vercel.app',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '복리 계산기',
      item: 'https://finance-calculators-mj.vercel.app/calculators/compound-interest',
    },
  ],
};

export const compoundInterestFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '수익률은 어떻게 정해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '과거 평균(예: S&P 500 장기 평균 7~10%)을 참고하되, 미래 수익률은 보장되지 않습니다. 실제 투자 시에는 수수료, 세금, 시장 변동성 등 다양한 요인이 영향을 미칩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '복리와 단리의 차이는?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '단리는 원금에만 이자가 붙는 방식이고, 복리는 원금과 이자에 다시 이자가 붙는 방식입니다. 같은 조건이라도 복리가 시간이 지날수록 더 큰 효과를 냅니다.',
      },
    },
    {
      '@type': 'Question',
      name: '계산 결과가 실제 수익과 다를 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 실제 수익은 수수료, 세금, 시장 변동성, 인플레이션 등에 따라 달라질 수 있습니다. 이 계산기는 복리 이자를 기반으로 한 이론적 계산 결과를 보여줍니다.',
      },
    },
    {
      '@type': 'Question',
      name: '매월 납입하지 않아도 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 매월 투자금을 0으로 설정하면 초기 투자금만으로 복리 계산을 할 수 있습니다. 반대로 초기 투자금을 0으로 하고 매월 납입만 설정할 수도 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '어떤 투자 상품이 복리를 활용할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '예금, 적금, 채권, 주식, 펀드, ETF 등 다양한 투자 상품에서 복리 효과를 활용할 수 있습니다. 다만 각 상품마다 수익률과 리스크가 다르므로 투자 전 충분한 검토가 필요합니다.',
      },
    },
  ],
};

export const compoundInterestHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '복리 계산기 사용 방법',
  description: '복리 계산기를 사용하여 투자 수익을 계산하는 방법',
  step: [
    {
      '@type': 'HowToStep',
      name: '초기 투자금 입력',
      text: '처음에 투자할 금액을 입력합니다 (없으면 0)',
    },
    {
      '@type': 'HowToStep',
      name: '매월 투자금 입력',
      text: '매달 정기적으로 투자할 금액을 입력합니다',
    },
    {
      '@type': 'HowToStep',
      name: '연 수익률 입력',
      text: '예상되는 연간 수익률을 %로 입력합니다 (예: 7 입력 시 7%)',
    },
    {
      '@type': 'HowToStep',
      name: '투자 기간 입력',
      text: '몇 년 동안 투자할지 입력합니다',
    },
    {
      '@type': 'HowToStep',
      name: '결과 확인',
      text: '값을 입력하면 자동으로 계산되어 결과를 확인할 수 있습니다',
    },
  ],
};
