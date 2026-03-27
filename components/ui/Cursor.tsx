'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * Custom Cursor — lerp-based ring that trails a dot.
 * Reacts to cards ([data-project-card]), links, and buttons.
 * Hidden on touch devices via CSS.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  const [mode, setMode] = useState<'default' | 'card' | 'link' | 'button'>('default');

  const lerp = useCallback((a: number, b: number, t: number) => a + (b - a) * t, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };

      // Instant dot position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      // Determine hover target
      const el = e.target as HTMLElement;
      if (el.closest('[data-project-card]')) {
        setMode('card');
      } else if (el.closest('button') || el.closest('[data-cursor-button]')) {
        setMode('button');
      } else if (el.closest('a')) {
        setMode('link');
      } else {
        setMode('default');
      }
    };

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.10);
      current.current.y = lerp(current.current.y, target.current.y, 0.10);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, [lerp]);

  // Ring size & style based on mode
  const ringClasses = (() => {
    switch (mode) {
      case 'card':
        return 'w-20 h-20 border-[var(--ink)] opacity-100';
      case 'button':
        return 'w-12 h-12 border-[var(--gold)] opacity-100';
      case 'link':
        return 'w-0 h-0 opacity-0';
      default:
        return 'w-9 h-9 border-[var(--ink)]/35 opacity-100';
    }
  })();

  return (
    <div data-cursor className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--ink)',
          opacity: mode === 'card' || mode === 'link' ? 0 : 1,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full border flex items-center justify-center transition-all duration-300 ease-out ${ringClasses}`}
      >
        {mode === 'card' && (
          <span
            ref={textRef}
            className="text-[0.55rem] tracking-wider uppercase"
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontStyle: 'italic',
              color: 'var(--ink)',
            }}
          >
            view
          </span>
        )}
      </div>
    </div>
  );
}
