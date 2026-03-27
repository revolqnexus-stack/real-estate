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

  // Related properties (pick 3 random)
  const related = PROPERTIES.slice(0, 3);

  // Process markdown content into HTML-safe paragraphs
  const sections = post.content.split('\n\n').filter((s) => s.trim());

  return (
    <>
      {/* Hero Image */}
      <section className="relative w-full overflow-hidden" style={{ height: '60vh' }}>
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,8,6,0.15)' }} />
      </section>

      {/* Article */}
      <article className="mx-auto px-6 md:px-12 py-16" style={{ maxWidth: '720px' }}>
        {/* Header */}
        <TextReveal>
          <p className="t-label mb-6" style={{ fontSize: '0.62rem', letterSpacing: '0.3em', color: 'var(--dim)' }}>
            {post.category.toUpperCase()} · {post.date} · {post.readTime}
          </p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1
            className="mb-16"
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
              color: 'var(--ink)',
            }}
          >
            {post.title}
          </h1>
        </TextReveal>

        {/* Body */}
        <div className="flex flex-col gap-6">
          {sections.map((section, i) => {
            const trimmed = section.trim();

            // Heading
            if (trimmed.startsWith('## ')) {
              return (
                <TextReveal key={i} delay={0.05}>
                  <h2
                    className="mt-8"
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: '1.6rem',
                      color: 'var(--ink)',
                      lineHeight: 1.3,
                    }}
                  >
                    {trimmed.replace('## ', '')}
                  </h2>
                </TextReveal>
              );
            }

            // H3
            if (trimmed.startsWith('### ')) {
              return (
                <TextReveal key={i} delay={0.05}>
                  <h3
                    className="mt-6"
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: '1.3rem',
                      color: 'var(--ink)',
                      lineHeight: 1.3,
                    }}
                  >
                    {trimmed.replace('### ', '')}
                  </h3>
                </TextReveal>
              );
            }

            // Pull quote (lines starting with >)
            if (trimmed.startsWith('> ')) {
              return (
                <TextReveal key={i} delay={0.05}>
                  <blockquote
                    className="my-8"
                    style={{
                      borderLeft: '2px solid var(--gold)',
                      paddingLeft: '2rem',
                      fontFamily: 'var(--font-serif), serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '1.3rem',
                      lineHeight: 1.6,
                      color: 'var(--ink)',
                    }}
                  >
                    {trimmed.replace('> ', '')}
                  </blockquote>
                </TextReveal>
              );
            }

            // Regular paragraph
            return (
              <TextReveal key={i} delay={0.03}>
                <p className="t-body" style={{ fontSize: '1.1rem' }}>
                  {trimmed}
                </p>
              </TextReveal>
            );
          })}
        </div>
      </article>

      {/* Related Properties */}
      <section className="px-6 md:px-12 py-24" style={{ borderTop: '1px solid var(--line)' }}>
        <TextReveal>
          <p className="t-label mb-12" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>Related Properties</p>
        </TextReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((property, i) => (
            <PropertyCard key={property.slug} property={property} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
