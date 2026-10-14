// src/scripts/animations.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { init3DTilt } from './tilt';

gsap.registerPlugin(ScrollTrigger);

export function initPageAnimations() {
  // Kill prior ScrollTriggers to prevent duplicates on navigation
  ScrollTrigger.getAll().forEach((t) => {
    // Preserve Three.js full-body trigger if active
    if ((t.vars.trigger as any) !== document.body) {
      t.kill();
    }
  });

  // 1. Hero Reveal Animations
  const heroBadge = document.querySelector('.hero-badge, .inline-flex.rounded-full');
  const heroTitle = document.querySelector('h1');
  const heroCta = document.querySelector('.hero-cta, .flex.flex-col.sm\\:flex-row');

  if (heroBadge) {
    gsap.fromTo(
      heroBadge,
      { opacity: 0, scale: 0.9, y: -10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' }
    );
  }

  if (heroTitle) {
    gsap.fromTo(
      heroTitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 }
    );
  }

  if (heroCta) {
    gsap.fromTo(
      heroCta,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.25 }
    );
  }

  // 2. Section Headings Reveal
  const sectionHeadings = document.querySelectorAll<HTMLElement>('section h2, .section-heading');
  sectionHeadings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 3. Staggered Cards (Problem cards, Service cards, Portfolio cards, FAQ cards)
  const cardGrids = document.querySelectorAll<HTMLElement>('.grid');
  cardGrids.forEach((grid) => {
    const cards = grid.querySelectorAll<HTMLElement>('.shadow-card, .tilt-card, [data-tilt], .portfolio-item, .step-card');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  });

  // 4. Comparison Table Rows Staggered Reveal
  const tableRows = document.querySelectorAll<HTMLElement>('table tbody tr');
  if (tableRows.length > 0) {
    gsap.fromTo(
      tableRows,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        stagger: 0.1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: 'table',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // 5. Initialize 3D CSS Perspective Tilt
  init3DTilt();

  ScrollTrigger.refresh();
}
