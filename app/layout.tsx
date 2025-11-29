import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '금융 계산기 | 복리, 예적금, 4대보험, 부동산 계산기 모음',
    template: '%s | 금융 계산기',
  },
  description:
    '금융 초보자도 쉽게 사용할 수 있는 다양한 금융 계산기. 복리 계산기, 예·적금 이자 계산기, 4대보험 계산기, 부동산 구매 비용 계산기, 대출 중도상환 계산기 등',
  keywords: [
    '금융 계산기',
    '복리 계산기',
    '예금 계산기',
    '적금 계산기',
    '4대보험 계산기',
    '부동산 계산기',
    '대출 계산기',
    '이자 계산',
  ],
  alternates: {
    canonical: 'https://finance-calculators-mj.vercel.app',
  },
  openGraph: {
    title: '금융 계산기 | 복리, 예적금, 4대보험, 부동산 계산기 모음',
    description:
      '금융 초보자도 쉽게 사용할 수 있는 다양한 금융 계산기. 복리, 예적금, 4대보험, 부동산 등 모든 금융 계산을 한 곳에서',
    type: 'website',
    url: 'https://finance-calculators-mj.vercel.app',
    siteName: '금융 계산기',
  },
  twitter: {
    card: 'summary_large_image',
    title: '금융 계산기 | 복리, 예적금, 4대보험, 부동산 계산기',
    description: '금융 초보자도 쉽게 사용할 수 있는 다양한 금융 계산기',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
