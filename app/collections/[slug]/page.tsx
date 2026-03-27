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
      <section className="px-6 md:px-12" style={{ paddingTop: '18vh', paddingBottom: '4rem' }}>
        <TextReveal>
          <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
            {collection.title} Collection
          </p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="t-heading">
            <em>{HEADLINES[slug] || collection.subtitle}</em>
          </h1>
        </TextReveal>
        <TextReveal delay={0.15}>
          <p className="t-body mt-4">
            {properties.length} properties in this collection.
          </p>
        </TextReveal>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <PropertyCard key={property.slug} property={property} index={i} />
          ))}
        </div>

        {properties.length === 0 && (
          <p className="t-body text-center py-20" style={{ color: 'var(--dim)' }}>
            No properties in this collection yet.
          </p>
        )}
      </section>
    </>
  );
}
