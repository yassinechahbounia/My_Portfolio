import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animFrame;

    const moveDot = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animFrame = requestAnimationFrame(animateRing);
    };

    const onHoverIn = () => ring.classList.add('hover');
    const onHoverOut = () => ring.classList.remove('hover');

    window.addEventListener('mousemove', moveDot);
    animFrame = requestAnimationFrame(animateRing);

    // Add hover effect to interactive elements
    const interactables = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onHoverIn);
      el.addEventListener('mouseleave', onHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveDot);
      cancelAnimationFrame(animFrame);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onHoverIn);
        el.removeEventListener('mouseleave', onHoverOut);
      });
    };
  }, []);

  return { dotRef, ringRef };
}
