export function scrollToElement(element?: HTMLElement | null, center = false) {
  element?.scrollIntoView({
    behavior: 'smooth',
    block: center ? 'center' : 'start',
    inline: center ? 'center' : 'nearest',
  });
}
