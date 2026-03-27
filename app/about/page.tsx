import Image from 'next/image';
import TextReveal from '@/components/shared/TextReveal';
import ImageReveal from '@/components/shared/ImageReveal';

export const metadata = {
  title: 'About',
  description: 'Learn about Landmark Estates — connecting families with exceptional properties across Kerala since 2018.',
};

const TEAM = [
  { name: 'Arjun Krishnan', role: 'Founder & Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
  { name: 'Meera Nair', role: 'Head of Acquisitions', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Rohit Menon', role: 'Client Relations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80' },
] as const;

const VALUES = [
  { title: 'Discretion', body: 'Every transaction handled with complete confidentiality. Your privacy is non-negotiable.' },
  { title: 'Integrity', body: 'We represent the property honestly. Always. No embellishments, no omissions.' },
  { title: 'Patience', body: 'The right property is worth waiting for. We never rush a decision that shapes your life.' },
] as const;

const STATS = [
  { number: '2018', label: 'Founded' },
  { number: '120+', label: 'Families Served' },
  { number: '8', label: 'Kerala Districts' },
  { number: '₹200Cr+', label: 'Portfolio Value' },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 md:px-12 overflow-hidden" style={{ paddingTop: '22vh', paddingBottom: '5rem' }}>
        <TextReveal>
          <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>About Us</p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="t-heading">
            We find homes that <em>feel inevitable.</em>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="t-body mt-6" style={{ maxWidth: '500px', fontSize: '1.1rem' }}>
            Landmark Estates has been connecting families with exceptional properties across Kerala since 2018.
          </p>
        </TextReveal>
      </section>

      {/* Story Section */}
      <section className="px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 lg:gap-24">
          <TextReveal>
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
                lineHeight: 1.9,
                color: 'var(--muted)',
                maxWidth: '520px',
              }}
            >
              <p>
                We believe the right property is not found — it is recognised.
                It is the one that, the moment you enter, you understand.
              </p>
              <p className="mt-6">
                Our work is to ensure you arrive at that recognition.
              </p>
              <p className="mt-6">
                Not to sell you something. To help you find it.
              </p>
            </div>
          </TextReveal>

          <div className="flex flex-col gap-0">
            {STATS.map((stat, i) => (
              <TextReveal key={stat.label} delay={i * 0.08}>
                <div className="py-6" style={{ borderBottom: '1px solid var(--line)' }}>
                  <p style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '3rem', color: 'var(--ink)', lineHeight: 1 }}>
                    {stat.number}
                  </p>
                  <p className="t-label mt-2" style={{ fontSize: '0.62rem' }}>{stat.label}</p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 py-24">
        <TextReveal>
          <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>Our Team</p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h2 className="t-heading mb-16">The people behind <em>the properties.</em></h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <TextReveal key={member.name} delay={0.15 + i * 0.08}>
              <div>
                <ImageReveal
                  src={member.image}
                  alt={member.name}
                  aspectRatio="aspect-[4/5]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <p className="mt-4" style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1.2rem', color: 'var(--ink)' }}>
                  {member.name}
                </p>
                <p className="t-label mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>{member.role}</p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-24" style={{ background: 'var(--warm)' }}>
        <TextReveal>
          <p className="t-label mb-16" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>Our Values</p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {VALUES.map((v, i) => (
            <TextReveal key={v.title} delay={0.1 + i * 0.08}>
              <div style={{ borderLeft: i > 0 ? '1px solid var(--line)' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}>
                <h3 style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                  {v.body}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="px-6 md:px-12 py-16 text-center">
        <p className="t-label" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--dim)' }}>
          Featured in The Hindu · Times Property · Kerala Builder Awards 2023
        </p>
      </section>
    </>
  );
}
