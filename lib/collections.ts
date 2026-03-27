import { type Collection } from '@/types/collection';
import { PROPERTIES } from './properties';

export const COLLECTIONS: Collection[] = [
  {
    slug: 'villas',
    title: 'Villas',
    subtitle: 'Private. Grounded. Yours alone.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    count: PROPERTIES.filter((p) => p.collections?.includes('villas')).length,
  },
  {
    slug: 'apartments',
    title: 'Apartments',
    subtitle: 'Elevated urban living.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    count: PROPERTIES.filter((p) => p.collections?.includes('apartments')).length,
  },
  {
    slug: 'heritage',
    title: 'Heritage',
    subtitle: 'Stories written into the walls.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    count: PROPERTIES.filter((p) => p.collections?.includes('heritage')).length,
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    subtitle: 'Space that works as hard as you do.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    count: PROPERTIES.filter((p) => p.collections?.includes('commercial')).length,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
