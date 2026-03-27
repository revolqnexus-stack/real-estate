import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import Link from 'next/link';
import { PROPERTIES, getPropertyBySlug, getAllPropertySlugs } from '@/lib/properties';
import PropertyHero from '@/components/property/PropertyHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import PropertySpecs from '@/components/property/PropertySpecs';
import PropertyGallery from '@/components/property/PropertyGallery';
import PropertyMap from '@/components/property/PropertyMap';
import PropertyEnquiry from '@/components/property/PropertyEnquiry';
import EnquireButton from '@/components/property/EnquireButton';
import TextReveal from '@/components/shared/TextReveal';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: property.title,
    description: property.shortDescription,
    openGraph: {
      title: property.title,
      description: property.shortDescription,
      images: [{ url: property.heroImage }],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  // Next/Prev navigation
  const currentIndex = PROPERTIES.findIndex((p) => p.slug === slug);
  const prevProperty = currentIndex > 0 ? PROPERTIES[currentIndex - 1] : null;
  const nextProperty = currentIndex < PROPERTIES.length - 1 ? PROPERTIES[currentIndex + 1] : null;

  return (
    <>
      <PropertyHero property={property} />

      <Breadcrumb
        items={[
          { label: 'Properties', href: '/properties' },
          { label: property.title },
        ]}
      />

      {/* Details Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-24">
          {/* Left — Specs (sticky on desktop) */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <PropertySpecs property={property} />

            <div className="mt-10">
              <p className="t-label mb-3" style={{ letterSpacing: '0.4em' }}>Price</p>
              <p className="t-price" style={{ fontSize: '2.5rem' }}>{property.price}</p>
              {property.priceNote && (
                <p style={{ fontFamily: 'var(--font-serif), serif', fontSize: '0.75rem', color: 'var(--dim)', marginTop: '0.25rem' }}>
                  {property.priceNote}
                </p>
              )}
            </div>

            <EnquireButton />
          </div>

          {/* Right — Description, Highlights, Amenities */}
          <div>
            <TextReveal>
              <p className="t-body" style={{ fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '3rem' }}>
                {property.fullDescription}
              </p>
            </TextReveal>

            {/* Highlights */}
            <TextReveal delay={0.1}>
              <div className="mb-12">
                <p className="t-label mb-6" style={{ letterSpacing: '0.4em' }}>Key Highlights</p>
                <div className="flex flex-col">
                  {property.highlights.map((h) => (
                    <p
                      key={h}
                      className="py-3"
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontWeight: 300,
                        fontSize: '1rem',
                        color: 'var(--ink)',
                        borderBottom: '1px solid var(--line2)',
                      }}
                    >
                      → {h}
                    </p>
                  ))}
                </div>
              </div>
            </TextReveal>

            {/* Amenities */}
            <TextReveal delay={0.15}>
              <div>
                <p className="t-label mb-6" style={{ letterSpacing: '0.4em' }}>Amenities</p>
                <div className="flex flex-wrap gap-3">
                  {property.amenities.map((a) => (
                    <span
                      key={a}
                      className="px-4 py-2"
                      style={{
                        border: '1px solid var(--line)',
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontWeight: 200,
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      <PropertyGallery images={property.gallery} />
      <PropertyMap district={property.district} location={property.location} />
      <PropertyEnquiry propertyName={property.title} />

      {/* Next/Prev Navigation */}
      <section
        className="px-6 md:px-12 py-12 flex justify-between items-start"
        style={{ borderTop: '1px solid var(--line)' }}
      >
        {prevProperty ? (
          <Link href={`/properties/${prevProperty.slug}`} className="group">
            <p className="t-label" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--dim)' }}>
              ← Previous Property
            </p>
            <p
              className="mt-2 transition-colors duration-200 group-hover:text-ink"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.2rem',
                color: 'var(--muted)',
              }}
            >
              {prevProperty.title}
            </p>
          </Link>
        ) : <div />}

        {nextProperty ? (
          <Link href={`/properties/${nextProperty.slug}`} className="group text-right">
            <p className="t-label" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--dim)' }}>
              Next Property →
            </p>
            <p
              className="mt-2 transition-colors duration-200 group-hover:text-ink"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.2rem',
                color: 'var(--muted)',
              }}
            >
              {nextProperty.title}
            </p>
          </Link>
        ) : <div />}
      </section>
    </>
  );
}
