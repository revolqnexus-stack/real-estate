'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { type Property } from '@/types/property';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
}

/**
 * Animated grid of PropertyCards.
 * Uses AnimatePresence for smooth filter transitions.
 */
export default function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {properties.map((property, i) => (
          <motion.div
            key={property.slug}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
          >
            <PropertyCard property={property} index={i} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
