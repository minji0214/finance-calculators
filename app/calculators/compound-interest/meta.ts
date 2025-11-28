import type { Metadata } from 'next';

export const compoundInterestMeta: Metadata = {
  title: '복리 계산기 - 금융 초보자도 쉽게 이해하는 투자 수익 예측',
  description:
    '초기 투자금과 매월 납입금, 연 수익률, 투자기간을 입력하면 복리로 얼마가 되는지 계산해 줍니다. 쉬운 설명과 예시 포함.',
  openGraph: {
    title: '복리 계산기 - 금융 초보자도 쉽게 이해하는 투자 수익 예측',
    description:
      '초기 투자금과 매월 납입금, 연 수익률, 투자기간을 입력하면 복리로 얼마가 되는지 계산해 줍니다.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '복리 계산기 - 금융 초보자도 쉽게',
    description:
      '초기 투자금과 매월 납입금, 연 수익률, 투자기간을 입력하면 복리로 얼마가 되는지 계산해 줍니다.',
  },
};

export const compoundInterestSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '복리 계산기',
  url: 'https://yourdomain.com/',
  description: '금융 초보자도 사용할 수 있는 복리 계산기',
  applicationCategory: 'FinanceApplication',
};
