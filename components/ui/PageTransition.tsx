'use client';

import { type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

const EASE = [0.25, 0, 0, 1] as const;

/**
 * Wraps page content for route-change animations.
 * Uses a cream-colored curtain wipe + fade/slide.
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {children}

        {/* Exit curtain */}
        <motion.div
          className="fixed inset-0 z-[1000] pointer-events-none"
          style={{ background: 'var(--cream)', transformOrigin: 'top' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
        />

        {/* Enter curtain (reveals page) */}
        <motion.div
          className="fixed inset-0 z-[1000] pointer-events-none"
          style={{ background: 'var(--cream)', transformOrigin: 'bottom' }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
