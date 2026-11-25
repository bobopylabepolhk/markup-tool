export function withDecimalPrecision(
  n: number,
  decimalCount: number,
  method: (x: number) => number = Math.floor,
) {
  const factor = Math.pow(10, decimalCount);
  return method(n * factor) / factor;
}
