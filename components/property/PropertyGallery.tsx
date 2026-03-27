'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ImageReveal from '@/components/shared/ImageReveal';

interface PropertyGalleryProps {
  images: string[];
}

const EASE = [0.25, 0, 0, 1] as const;

/**
 * Masonry-style gallery with a lightbox.
 * Alternates between tall and square aspect ratios.
 */
export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const openLightbox = useCallback((src: string) => setLightbox(src), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  if (!images.length) return null;

  return (
    <section className="px-6 md:px-12 pb-20">
      <p className="t-label mb-12" style={{ letterSpacing: '0.4em' }}>
        Gallery
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <ImageReveal
              src={image}
              alt={`Gallery image ${i + 1}`}
              aspectRatio={i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[500] flex items-center justify-center p-6 md:p-12"
            style={{ backgroundColor: 'rgba(10,8,6,0.92)', cursor: 'pointer' }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-8 right-8 z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: '2rem',
                color: 'var(--cream)',
                lineHeight: 1,
              }}
            >
              ×
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery detail"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
