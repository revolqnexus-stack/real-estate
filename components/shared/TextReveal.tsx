'use client';

import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3';
}

const EASE = [0.21, 0.6, 0.35, 1] as const;

/**
 * Fade + rise text reveal triggered by scroll intersection.
 * Runs once. Configurable delay for staggered reveals.
 */
export default function TextReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1.0, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
}
