// Carrossel de Depoimentos
export function initCarousel(container: HTMLDivElement) {
  let current = 0;
  const inner = container.children[0] as HTMLElement;
  const items = inner.children.length;
  const itemWidth = (inner.children[0] as HTMLElement).offsetWidth + 30;

  setInterval(() => {
    current++;
    if (current >= items - 2) {
      current = 0;
      inner.style.transition = 'none';
      inner.style.transform = `translateX(0px)`;
      void inner.offsetWidth; 
      setTimeout(() => {
        inner.style.transition = 'transform 1.5s ease-in-out';
        inner.style.transform = `translateX(-${itemWidth}px)`;
        current = 1;
      }, 50);
    } else {
      inner.style.transition = 'transform 1.5s ease-in-out';
      inner.style.transform = `translateX(-${itemWidth * current}px)`;
    }
  }, 4000);
}
// Carrossel de Depoimentos