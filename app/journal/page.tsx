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
      <section className="px-6 md:px-[10vw] lg:px-[15vw]" style={{ paddingTop: '22vh', paddingBottom: '6rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-2/3">
            <TextReveal>
              <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                01 ✧ JOURNAL
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="t-display" style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}>
                Stories, insights, <em>and observations.</em>
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
                Perspectives on architecture, high-end real estate, and the shifting dynamics of life in Kerala.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="px-6 md:px-[10vw] lg:px-[15vw] pb-32">
          <Link href={`/journal/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] gap-12 lg:gap-20 items-end">
              <ImageReveal
                src={featured.heroImage}
                alt={featured.title}
                aspectRatio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="pb-4 border-b border-[var(--line)]">
                <TextReveal>
                  <p className="t-label mb-6" style={{ fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.3em' }}>
                    01 ✧ {featured.category.toUpperCase()} · {featured.date}
                  </p>
                </TextReveal>
                <TextReveal delay={0.1}>
                  <h2
                    className="transition-colors duration-400 group-hover:text-muted"
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      lineHeight: 1.1,
                      color: 'var(--ink)',
                      marginBottom: '2rem'
                    }}
                  >
                    {featured.title}
                  </h2>
                </TextReveal>
                <TextReveal delay={0.15}>
                  <p className="t-body" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>{featured.excerpt}</p>
                </TextReveal>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Post Grid */}
      {remaining.length > 0 && (
        <section className="px-6 md:px-[10vw] lg:px-[15vw] pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {remaining.map((post, i) => (
              <TextReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <ImageReveal
                    src={post.heroImage}
                    alt={post.title}
                    aspectRatio="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="mt-8 border-b border-[var(--line2)] pb-6">
                    <p className="t-label mb-4" style={{ fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.3em' }}>
                      0{i + 2} ✧ {post.category.toUpperCase()}
                    </p>
                    <h3
                      className="transition-colors duration-400 group-hover:text-muted"
                      style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1.6rem', lineHeight: 1.2, color: 'var(--ink)' }}
                    >
                      {post.title}
                    </h3>
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
