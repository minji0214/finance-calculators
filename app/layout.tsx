import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '금융 계산기',
  description: '복리 계산기와 금융 도구',
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
