import type { Metadata } from 'next';

export const savingsMeta: Metadata = {
  title: '예·적금 이자 계산기 | 세후 이자 자동 계산 (2025 최신)',
  description:
    '예금·적금 이자 쉽게 계산하세요. 세후 이자, 만기수령액 자동 계산. 은행보다 빠른 예·적금 계산기. 단리/복리 선택 가능, 세제혜택 반영.',
  keywords: [
    '예금 계산기',
    '적금 계산기',
    '이자 계산',
    '세후 이자',
    '만기 수령액',
    '단리 계산',
    '복리 계산',
    '이자소득세',
  ],
  openGraph: {
    title: '예·적금 이자 계산기 | 세후 이자 자동 계산',
    description:
      '예금·적금 이자 쉽게 계산하세요. 세후 이자, 만기수령액 자동 계산. 은행보다 빠른 예·적금 계산기.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '예·적금 이자 계산기 | 세후 이자 자동 계산',
    description:
      '예금·적금 이자 쉽게 계산하세요. 세후 이자, 만기수령액 자동 계산.',
  },
};

export const savingsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '예·적금 이자 계산기',
  url: 'https://yourdomain.com/calculators/savings',
  description: '예금과 적금의 세후 이자를 자동으로 계산해주는 계산기',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
};

export const savingsFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '세후 이자란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '세후 이자는 이자소득세를 제한 후 실제로 받게 되는 이자입니다. 일반과세의 경우 15.4%의 세금이 부과되므로, 세전 이자에서 세금을 뺀 금액이 세후 이자입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '일반과세 15.4%는 어떻게 적용되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '일반과세 15.4%는 이자소득에 부과되는 기본 세율입니다. 예를 들어 세전 이자가 10만원이면, 세금은 15,400원이고 세후 이자는 84,600원이 됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '적금이 더 유리한 이유는?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '적금은 매월 납입하는 방식이므로 복리 효과를 더 크게 받을 수 있습니다. 각 납입금마다 이자가 붙어 시간이 지날수록 이자에 이자가 붙는 효과가 커집니다.',
      },
    },
    {
      '@type': 'Question',
      name: '중도해지 시 이자는 어떻게 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '중도해지 시에는 실제 납입 기간에 따라 이자가 계산되며, 일부 은행에서는 중도해지 시 약정 금리보다 낮은 금리가 적용될 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '단리와 복리 차이는?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '단리는 원금에만 이자가 붙는 방식이고, 복리는 원금과 이자에 다시 이자가 붙는 방식입니다. 같은 조건이라도 복리가 시간이 지날수록 더 큰 효과를 냅니다.',
      },
    },
  ],
};

