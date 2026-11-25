export function rectByCoords(coords: [[number, number], [number, number]]) {
  let topLeft = coords[0];
  let bottomRight = coords[1];

  // flip coordinates if topLeft is lower/more to the tight than bottomRight
  if (topLeft[0] > bottomRight[0] || bottomRight[1] < topLeft[1]) {
    const temp = topLeft;
    topLeft = bottomRight;
    bottomRight = temp;
  }

  const x = topLeft[0];
  const y = topLeft[1];

  const width = Math.abs(bottomRight[0] - x);
  const height = Math.abs(bottomRight[1] - y);

  return { x, y, width, height };
}
