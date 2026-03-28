'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

const EASE = [0.21, 0.6, 0.35, 1] as const;

/**
 * Scroll-triggered image reveal using Framer Motion clip-path animation.
 * Inner image scales down from 1.15 as the clip-path opens slowly.
 */
export default function ImageReveal({
  src,
  alt,
  aspectRatio = 'aspect-video',
  priority = false,
  fill: shouldFill = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${shouldFill ? 'w-full h-full' : aspectRatio} ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.15 }}
          animate={isInView ? { scale: 1 } : undefined}
          transition={{ duration: 1.6, ease: EASE }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            sizes={sizes}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
