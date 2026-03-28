import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import Image from 'next/image';
import TextReveal from '@/components/shared/TextReveal';
import PropertyCard from '@/components/property/PropertyCard';
import { getAllPostSlugs, getPostBySlug } from '@/lib/journal';
import { PROPERTIES } from '@/lib/properties';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage }],
    },
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = PROPERTIES.slice(0, 2);
  const sections = post.content.split('\n\n').filter((s) => s.trim());

  return (
    <>
      <section className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,8,6,0.1)' }} />
      </section>

      <article className="mx-auto px-6 md:px-[10vw] lg:px-[15vw] py-32" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] gap-20">
          
          {/* Header Area (Left on Desktop) */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <TextReveal>
              <p className="t-label mb-8" style={{ fontSize: '0.62rem', letterSpacing: '0.4em', color: 'var(--dim)' }}>
                {post.category.toUpperCase()} ✧ {post.date}
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1
                className="mb-10"
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                }}
              >
                {post.title}
              </h1>
            </TextReveal>
            <div className="w-16 h-[1px] bg-ink/20 mb-10" />
            <TextReveal delay={0.15}>
              <p className="t-body" style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--muted)' }}>
                {post.readTime}
              </p>
            </TextReveal>
          </div>

          {/* Body Area (Right on Desktop) */}
          <div className="flex flex-col gap-10 pt-2 border-t border-[var(--line)] lg:border-t-0 lg:pt-0">
            {sections.map((section, i) => {
              const trimmed = section.trim();

              if (trimmed.startsWith('## ')) {
                return (
                  <TextReveal key={i} delay={0.05}>
                    <h2
                      className="mt-12 mb-2"
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontWeight: 300,
                        fontSize: '1.8rem',
                        color: 'var(--ink)',
                        lineHeight: 1.2,
                      }}
                    >
                      {trimmed.replace('## ', '')}
                    </h2>
                  </TextReveal>
                );
              }

              if (trimmed.startsWith('### ')) {
                return (
                  <TextReveal key={i} delay={0.05}>
                    <h3
                      className="mt-8 mb-2"
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontWeight: 300,
                        fontSize: '1.4rem',
                        color: 'var(--ink)',
                        lineHeight: 1.3,
                      }}
                    >
                      {trimmed.replace('### ', '')}
                    </h3>
                  </TextReveal>
                );
              }

              if (trimmed.startsWith('> ')) {
                return (
                  <TextReveal key={i} delay={0.05}>
                    <blockquote
                      className="my-10"
                      style={{
                        borderLeft: '1px solid var(--ink)',
                        paddingLeft: '2.5rem',
                        fontFamily: 'var(--font-serif), serif',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: '1.5rem',
                        lineHeight: 1.6,
                        color: 'var(--ink)',
                      }}
                    >
                      {trimmed.replace('> ', '')}
                    </blockquote>
                  </TextReveal>
                );
              }

              return (
                <TextReveal key={i} delay={0.03}>
                  <p className="t-body" style={{ fontSize: '1.15rem', lineHeight: 2, color: 'var(--muted)' }}>
                    {trimmed}
                  </p>
                </TextReveal>
              );
            })}
          </div>
        </div>
      </article>

      {/* Related Properties */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[30%_65%] gap-12 lg:gap-20">
          <div>
            <TextReveal>
              <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                02 ✧ PORTFOLIO
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Featured <em>Residences</em>
              </h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-end">
            {related.map((property, i) => (
              <PropertyCard key={property.slug} property={property} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
