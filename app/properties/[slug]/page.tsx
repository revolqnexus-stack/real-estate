import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import Link from 'next/link';
import { PROPERTIES, getPropertyBySlug, getAllPropertySlugs } from '@/lib/properties';
import PropertyHero from '@/components/property/PropertyHero';
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

      {/* Breadcrumb replacement — sleek back link */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] pt-12">
        <Link href="/properties" className="t-label group flex items-center gap-4" style={{ color: 'var(--ink)' }}>
          <span className="transition-transform duration-300 group-hover:-translate-x-2">←</span>
          BACK TO PORTFOLIO
        </Link>
      </section>

      {/* Asymmetrical Details Layout */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20">
          
          {/* Left Column: Numbered Anchor & Price */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <TextReveal>
              <p className="t-label mb-12" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                01 ✧ DETAILS
              </p>
            </TextReveal>
            
            <PropertySpecs property={property} />

            <div className="mt-16 pt-12" style={{ borderTop: '1px solid var(--line)' }}>
              <p className="t-label mb-4" style={{ letterSpacing: '0.4em' }}>VALUATION</p>
              <p className="t-price" style={{ fontSize: '3rem', color: 'var(--ink)', lineHeight: 1 }}>{property.price}</p>
              {property.priceNote && (
                <p style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                  {property.priceNote}
                </p>
              )}
            </div>

            <EnquireButton />
          </div>

          {/* Right Column: Flowing Description */}
          <div className="pt-2">
            <TextReveal>
              <p 
                style={{ 
                  fontFamily: 'var(--font-serif), serif', 
                  fontSize: '1.25rem', 
                  lineHeight: 1.85, 
                  fontWeight: 300, 
                  color: 'var(--ink)',
                  marginBottom: '5rem' 
                }}
              >
                {property.fullDescription}
              </p>
            </TextReveal>

            {/* Highlights */}
            <div className="mb-20">
              <TextReveal>
                <p className="t-label mb-8" style={{ letterSpacing: '0.4em' }}>
                  02 ✧ HIGHLIGHTS
                </p>
              </TextReveal>
              <div className="flex flex-col">
                {property.highlights.map((h, i) => (
                  <TextReveal key={h} delay={i * 0.05}>
                    <p
                      className="py-5"
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontWeight: 300,
                        fontSize: '1.1rem',
                        color: 'var(--muted)',
                        borderBottom: '1px solid var(--line2)',
                        display: 'flex',
                        gap: '1.5rem'
                      }}
                    >
                      <span className="t-label" style={{ opacity: 0.5 }}>0{i + 1}</span>
                      {h}
                    </p>
                  </TextReveal>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <TextReveal>
                <p className="t-label mb-8" style={{ letterSpacing: '0.4em' }}>
                  03 ✧ AMENITIES
                </p>
              </TextReveal>
              <div className="flex flex-wrap gap-4">
                {property.amenities.map((a, i) => (
                  <TextReveal key={a} delay={i * 0.05}>
                    <span
                      className="px-5 py-3"
                      style={{
                        border: '1px solid var(--line)',
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontWeight: 200,
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--ink)',
                      }}
                    >
                      {a}
                    </span>
                  </TextReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PropertyGallery images={property.gallery} />
      <PropertyMap district={property.district} location={property.location} />
      <PropertyEnquiry propertyName={property.title} />

      {/* Cinematic Next/Prev */}
      <section
        className="px-6 md:px-[10vw] lg:px-[15vw] py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        style={{ borderTop: '1px solid var(--line)' }}
      >
        {prevProperty ? (
          <Link href={`/properties/${prevProperty.slug}`} className="group block w-full md:w-1/2">
            <p className="t-label mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--muted)' }}>
              ← PREVIOUS
            </p>
            <p
              className="transition-colors duration-400 group-hover:text-muted"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'var(--ink)',
                lineHeight: 1.1
              }}
            >
              {prevProperty.title}
            </p>
          </Link>
        ) : <div className="w-full md:w-1/2" />}

        {nextProperty ? (
          <Link href={`/properties/${nextProperty.slug}`} className="group block w-full md:w-1/2 text-left md:text-right">
            <p className="t-label mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--muted)' }}>
              NEXT →
            </p>
            <p
              className="transition-colors duration-400 group-hover:text-muted"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'var(--ink)',
                lineHeight: 1.1
              }}
            >
              {nextProperty.title}
            </p>
          </Link>
        ) : <div className="w-full md:w-1/2" />}
      </section>
    </>
  );
}
