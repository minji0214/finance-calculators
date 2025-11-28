# 금융 계산기 - 복리 계산기

금융 초보자도 쉽게 사용할 수 있는 복리 계산기입니다.

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 기능

- 초기 투자금과 매월 납입금 입력
- 연 수익률과 투자 기간 설정
- 복리 계산 결과 확인
- 연도별 요약 정보 제공

## 페이지 구조

- `/` - 메인 페이지
- `/finance/compound-calculator` - 복리 계산기 페이지
- `/api/compound` - 복리 계산 API

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- React 18
