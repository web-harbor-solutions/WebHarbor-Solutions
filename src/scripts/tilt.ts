// src/scripts/tilt.ts
// Interactive 3D CSS perspective tilt based on cursor position

export function init3DTilt() {
  // Only apply tilt on desktop pointers (hover capable)
  if (window.matchMedia('(hover: none)').matches) return;

  const tiltCards = document.querySelectorAll<HTMLElement>('[data-tilt], .tilt-card');

  tiltCards.forEach((card) => {
    let bounds: DOMRect | null = null;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease-out';
      card.style.willChange = 'transform';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const halfW = bounds.width / 2;
      const halfH = bounds.height / 2;

      // Max tilt angle in degrees
      const maxAngle = 7;
      const rotX = -((mouseY - halfH) / halfH) * maxAngle;
      const rotY = ((mouseX - halfW) / halfW) * maxAngle;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px) scale3d(1.015, 1.015, 1.015)`;
    };

    const onMouseLeave = () => {
      bounds = null;
      card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease-out';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}
