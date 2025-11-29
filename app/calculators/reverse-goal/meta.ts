import type { Metadata } from 'next';

export const reverseGoalMeta: Metadata = {
  title: '목표 금액 역산 계산기 | 매월 저축액 자동 계산',
  description:
    '목표 금액을 달성하기 위해 필요한 매월 저축액, 기간, 초기 예치금을 역산 계산합니다. 1억원 모으기, 목표 저축액 계산 등에 활용하세요.',
  keywords: [
    '목표 금액 계산기',
    '저축 목표 계산기',
    '역산 계산기',
    '매월 저축액 계산',
    '1억원 모으기',
    '저축 기간 계산',
    '초기 예치금 계산',
    '목표 금액 달성',
  ],
  openGraph: {
    title: '목표 금액 역산 계산기 | 매월 저축액 자동 계산',
    description:
      '목표 금액을 달성하기 위해 필요한 매월 저축액, 기간, 초기 예치금을 역산 계산합니다.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '목표 금액 역산 계산기 | 매월 저축액 자동 계산',
    description:
      '목표 금액을 달성하기 위해 필요한 매월 저축액을 역산 계산합니다.',
  },
};

export const reverseGoalSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '목표 금액 역산 계산기',
  url: 'https://yourdomain.com/calculators/reverse-goal',
  description: '목표 금액을 달성하기 위해 필요한 조건을 역산 계산해주는 계산기',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
};

export const reverseGoalFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '목표 금액 역산 계산기란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '목표 금액 역산 계산기는 원하는 목표 금액을 달성하기 위해 필요한 조건을 역으로 계산해주는 도구입니다. 매월 납입액, 기간, 초기 예치금을 계산할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '1억원을 모으려면 매월 얼마를 저축해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '목표 금액과 기간, 이자율을 입력하면 필요한 매월 저축액을 계산할 수 있습니다. 예를 들어 1억원을 10년 안에 모으려면 연 3% 이자율 기준 약 70만원을 매월 저축해야 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '실제 저축액과 계산 결과가 다를 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 실제 저축액은 이자율 변동, 세금, 수수료 등에 따라 달라질 수 있습니다. 이 계산기는 복리 이자를 기반으로 한 이론적 계산 결과를 보여줍니다.',
      },
    },
    {
      '@type': 'Question',
      name: '이자율은 어떻게 정해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '일반 적금은 2~3%, 예금은 2~2.5% 정도를 참고하세요. 실제 금리는 은행별, 상품별로 다르므로 최신 금리를 확인하시기 바랍니다.',
      },
    },
    {
      '@type': 'Question',
      name: '세금은 포함되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아니요, 이 계산기는 세전 금액 기준입니다. 실제 수령액은 이자소득세(일반과세 15.4%)를 공제해야 합니다.',
      },
    },
  ],
};

