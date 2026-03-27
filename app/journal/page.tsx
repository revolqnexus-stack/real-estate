import Link from 'next/link';
import TextReveal from '@/components/shared/TextReveal';
import ImageReveal from '@/components/shared/ImageReveal';
import { JOURNAL_POSTS } from '@/lib/journal';

export const metadata = {
  title: 'Journal',
  description: 'Stories, insights, and observations on Kerala real estate, design, and the art of finding home.',
};

export default function JournalPage() {
  const featured = JOURNAL_POSTS[0];
  const remaining = JOURNAL_POSTS.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12" style={{ paddingTop: '20vh', paddingBottom: '4rem' }}>
        <TextReveal>
          <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>Journal</p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="t-heading">
            Stories, insights, <em>and observations.</em>
          </h1>
        </TextReveal>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="px-6 md:px-12 pb-20">
          <Link href={`/journal/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <ImageReveal
                src={featured.heroImage}
                alt={featured.title}
                aspectRatio="aspect-[3/2]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div>
                <TextReveal>
                  <p className="t-label" style={{ fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.25em' }}>
                    {featured.category.toUpperCase()} · {featured.date} · {featured.readTime}
                  </p>
                </TextReveal>
                <TextReveal delay={0.1}>
                  <h2
                    className="mt-4 transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      lineHeight: 1.2,
                      color: 'var(--ink)',
                    }}
                  >
                    {featured.title}
                  </h2>
                </TextReveal>
                <TextReveal delay={0.15}>
                  <p className="t-body mt-4" style={{ maxWidth: '380px' }}>{featured.excerpt}</p>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <p
                    className="mt-6"
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '0.9rem',
                      color: 'var(--muted)',
                    }}
                  >
                    Read article →
                  </p>
                </TextReveal>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Post Grid */}
      {remaining.length > 0 && (
        <section className="px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {remaining.map((post, i) => (
              <TextReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <ImageReveal
                    src={post.heroImage}
                    alt={post.title}
                    aspectRatio="aspect-[3/2]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="mt-5">
                    <p className="t-label" style={{ fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.25em' }}>
                      {post.category.toUpperCase()} · {post.date}
                    </p>
                    <h3
                      className="mt-2 transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.3, color: 'var(--ink)' }}
                    >
                      {post.title}
                    </h3>
                    <p className="t-body mt-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '0.88rem' }}>
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </TextReveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
