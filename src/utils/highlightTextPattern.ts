export function highlightTextPattern(text: string, pattern: string, className: string) {
  return text.replace(pattern, (value) => `<mark class="${className}">${value}</mark>`);
}
