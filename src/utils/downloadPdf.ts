/** Save a file to the user's device */
export function downloadFile(file: Uint8Array, fileName: string) {
  const a = document.createElement('a');
  const fileUrl = URL.createObjectURL(new Blob([file]));

  a.download = fileName;

  a.href = fileUrl;
  a.click();
  a.remove();
  URL.revokeObjectURL(fileUrl);
}
