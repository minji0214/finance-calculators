/**
 * 숫자를 한글 단위로 변환하는 함수
 */
export function formatKoreanCurrency(value: number): string {
  if (value === 0) return '0원';

  const units = ['', '만', '억', '조'];
  let result = '';
  let num = value;

  for (let i = 0; i < units.length && num > 0; i++) {
    const part = num % 10000;
    if (part > 0) {
      if (i === 0) {
        result = `${part}${units[i]}` + result;
      } else {
        result = `${part}${units[i]} ` + result;
      }
    }
    num = Math.floor(num / 10000);
  }

  return result.trim() + '원';
}

/**
 * 숫자에 콤마 추가하는 함수
 */
export function formatNumberWithCommas(value: number | string): string {
  if (!value && value !== 0) return '';
  const numStr =
    typeof value === 'number' ? value.toString() : value.replace(/[^0-9]/g, '');
  if (!numStr) return '';
  return parseInt(numStr, 10).toLocaleString();
}

/**
 * 한글 단위를 숫자로 변환하는 함수
 */
export function parseKoreanInput(input: string): number {
  if (!input) return 0;

  // 숫자만 추출 (콤마 제거)
  const num = input.replace(/[^0-9]/g, '');
  return num ? parseInt(num, 10) : 0;
}
