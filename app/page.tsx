import HomeHero from '@/components/home/HomeHero';
import StatsBar from '@/components/home/StatsBar';
import FeaturedProperty from '@/components/home/FeaturedProperty';
import Marquee from '@/components/ui/Marquee';
import PropertyCard from '@/components/property/PropertyCard';
import CollectionsPreview from '@/components/home/CollectionsPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import JournalPreview from '@/components/home/JournalPreview';
import TextReveal from '@/components/shared/TextReveal';
import { PROPERTIES, getFeaturedProperties } from '@/lib/properties';
import Link from 'next/link';

export default function HomePage() {
  const featured = getFeaturedProperties()[0];
  const gridProperties = PROPERTIES.slice(0, 6);

  return (
    <>
      <HomeHero />
      <StatsBar />

      {featured && <FeaturedProperty property={featured} />}

      <Marquee />

      {/* Property Grid Preview */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] py-16 pb-24">
        <div className="flex justify-between items-baseline mb-12">
          <TextReveal>
            <p className="t-label" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
              All Properties
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <Link
              href="/properties"
              className="group"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '0.9rem',
                color: 'var(--muted)',
              }}
            >
              view all{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProperties.map((property, i) => (
            <PropertyCard key={property.slug} property={property} index={i} />
          ))}
        </div>
      </section>

      <CollectionsPreview />
      <TestimonialsSection />
      <JournalPreview />
    </>
  );
}
