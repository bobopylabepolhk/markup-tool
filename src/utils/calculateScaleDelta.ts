export function calculateScaleDelta(originalZoom: number, currentZoom: number) {
  const diff = currentZoom - originalZoom;

  return diff;
}
