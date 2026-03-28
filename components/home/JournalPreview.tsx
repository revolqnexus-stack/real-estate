'use client';

import Link from 'next/link';
import ImageReveal from '@/components/shared/ImageReveal';
import TextReveal from '@/components/shared/TextReveal';
import { JOURNAL_POSTS } from '@/lib/journal';

/**
 * Preview of the 3 most recent journal posts.
 */
export default function JournalPreview() {
  return (
    <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32">
      <div className="flex justify-between items-baseline mb-16">
        <div>
          <TextReveal>
            <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
              From the Journal
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="t-heading">
              Stories & <em>insights</em>
            </h2>
          </TextReveal>
        </div>
        <TextReveal delay={0.15}>
          <Link
            href="/journal"
            className="group hidden md:inline-block"
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: 'var(--muted)',
            }}
          >
            read all{' '}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </TextReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {JOURNAL_POSTS.map((post, i) => (
          <TextReveal key={post.slug} delay={0.2 + i * 0.08}>
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
                  className="mt-2 transition-colors duration-200 group-hover:text-ink"
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontWeight: 300,
                    fontSize: '1.2rem',
                    lineHeight: 1.3,
                    color: 'var(--ink)',
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontWeight: 300,
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    color: 'var(--muted)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.excerpt}
                </p>

                <p
                  className="mt-3"
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '0.82rem',
                    color: 'var(--dim)',
                  }}
                >
                  Read more →
                </p>
              </div>
            </Link>
          </TextReveal>
        ))}
      </div>
    </section>
  );
}
