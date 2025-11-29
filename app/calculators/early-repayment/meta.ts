import type { Metadata } from 'next';

export const earlyRepaymentMeta: Metadata = {
  title: '대출 중도상환 계산기 | 이자 절감액 자동 계산',
  description:
    '대출 중도상환 시 이자 절감액을 계산하세요. 원리금균등상환, 원금균등상환 모두 지원. 중도상환 전/후 이자 비교로 절감 효과를 확인하세요.',
  keywords: [
    '중도상환 계산기',
    '대출 중도상환',
    '이자 절감 계산',
    '원리금균등상환',
    '원금균등상환',
    '대출 이자 계산',
    '중도상환 이자 절감',
    '주택담보대출 중도상환',
  ],
  alternates: {
    canonical: 'https://finance-calculators-mj.vercel.app/calculators/early-repayment',
  },
  openGraph: {
    title: '대출 중도상환 계산기 | 이자 절감액 자동 계산',
    description:
      '대출 중도상환 시 이자 절감액을 계산하세요. 원리금균등상환, 원금균등상환 모두 지원.',
    type: 'website',
    url: 'https://finance-calculators-mj.vercel.app/calculators/early-repayment',
    siteName: '금융 계산기',
  },
  twitter: {
    card: 'summary_large_image',
    title: '대출 중도상환 계산기 | 이자 절감액 자동 계산',
    description:
      '대출 중도상환 시 이자 절감액을 계산하세요. 중도상환 전/후 이자 비교.',
  },
};

export const earlyRepaymentSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '대출 중도상환 계산기',
  url: 'https://finance-calculators-mj.vercel.app/calculators/early-repayment',
  description: '대출 중도상환 시 이자 절감액을 계산해주는 계산기',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
};

export const earlyRepaymentFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '중도상환 계산기란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '중도상환 계산기는 대출 만기 전에 일부를 미리 상환할 때 발생하는 이자 절감액을 계산해주는 도구입니다. 중도상환 전/후 이자를 비교하여 절감 효과를 확인할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '중도상환 수수료는 포함되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아니요, 이 계산기는 이자 절감액만 계산합니다. 실제 중도상환 시에는 중도상환 수수료가 발생할 수 있으므로 은행에 확인하시기 바랍니다.',
      },
    },
    {
      '@type': 'Question',
      name: '중도상환은 언제 하는 것이 좋나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '일반적으로 대출 초기에 중도상환하는 것이 이자 절감 효과가 큽니다. 이는 초기에 이자 비중이 높기 때문입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '원리금균등상환과 원금균등상환의 차이는?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '원리금균등상환은 매월 동일한 금액을 상환하는 방식이고, 원금균등상환은 매월 동일한 원금을 상환하는 방식입니다. 원금균등상환이 총 이자는 적지만 초기 상환액이 높습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '중도상환 후 월 상환액이 줄어드나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '원리금균등상환의 경우, 중도상환 후에도 월 상환액을 유지하면 상환 기간이 단축됩니다. 월 상환액을 줄이려면 재계약이 필요할 수 있습니다.',
      },
    },
  ],
};

