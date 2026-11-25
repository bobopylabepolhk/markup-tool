export async function getBase64Image(blob: Blob) {
  const reader = new FileReader();
  await new Promise((resolve, reject) => {
    reader.onload = resolve;
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  return (reader.result as string) ?? '';
}
