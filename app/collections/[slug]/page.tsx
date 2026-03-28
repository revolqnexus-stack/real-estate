import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import TextReveal from '@/components/shared/TextReveal';
import PropertyCard from '@/components/property/PropertyCard';
import { getPropertiesByCollection } from '@/lib/properties';
import { COLLECTIONS, getCollectionBySlug } from '@/lib/collections';

interface Props {
  params: Promise<{ slug: string }>;
}

const HEADLINES: Record<string, string> = {
  villas: 'Private spaces, carefully chosen.',
  apartments: 'Elevated by design.',
  heritage: 'Properties that remember.',
  commercial: 'Built for ambition.',
};

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: `${collection.title} Collection`,
    description: `${collection.subtitle} — Curated ${collection.title.toLowerCase()} properties across Kerala.`,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const properties = getPropertiesByCollection(slug);

  return (
    <>
      <section className="px-6 md:px-[10vw] lg:px-[15vw]" style={{ paddingTop: '22vh', paddingBottom: '6rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-2/3">
            <TextReveal>
              <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                01 ✧ {collection.title.toUpperCase()}
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="t-display" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
                <em>{HEADLINES[slug] || collection.subtitle}</em>
              </h1>
            </TextReveal>
          </div>
          <div className="w-full lg:w-1/3 pt-4">
            <TextReveal delay={0.15}>
              <p
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontWeight: 300,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'var(--muted)',
                  borderLeft: '1px solid var(--line)',
                  paddingLeft: '2rem'
                }}
              >
                Curating {properties.length} exceptional properties in the {collection.title.toLowerCase()} series.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-[10vw] lg:px-[15vw] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-16">
          {properties.map((property, i) => (
            <PropertyCard key={property.slug} property={property} index={i} />
          ))}
        </div>

        {properties.length === 0 && (
          <p className="t-body text-center py-32" style={{ color: 'var(--dim)', fontStyle: 'italic' }}>
            No properties in this collection yet.
          </p>
        )}
      </section>
    </>
  );
}
