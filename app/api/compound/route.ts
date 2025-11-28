import { NextResponse } from 'next/server';
import { calculateCompoundInterest } from '@/app/calculators/compound-interest/calculator';

function toNumber(x: string | null, fallback = 0): number {
  const n = Number(x);
  return Number.isFinite(n) ? n : fallback;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams;

  const principal = Math.max(0, toNumber(q.get('principal'), 0));
  const monthly = Math.max(0, toNumber(q.get('monthly'), 0));
  const annualRate = toNumber(q.get('annualRate'), 5);
  const years = Math.max(0, toNumber(q.get('years'), 1));
  const compoundPerYear = Math.max(
    1,
    Math.floor(toNumber(q.get('compoundPerYear'), 12))
  );

  try {
    const result = calculateCompoundInterest({
      principal,
      monthly,
      annualRate,
      years,
      compoundPerYear,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Calculation error:', error);
    return NextResponse.json(
      { error: '계산 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}