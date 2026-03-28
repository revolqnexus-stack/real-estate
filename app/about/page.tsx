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
  { title: '01 ✧ Discretion', body: 'Every transaction handled with complete confidentiality. Your privacy is non-negotiable.' },
  { title: '02 ✧ Integrity', body: 'We represent the property honestly. Always. No embellishments, no omissions.' },
  { title: '03 ✧ Patience', body: 'The right property is worth waiting for. We never rush a decision that shapes your life.' },
] as const;

const STATS = [
  { number: '2018', label: '01 ✧ Founded' },
  { number: '120+', label: '02 ✧ Families Served' },
  { number: '8', label: '03 ✧ Kerala Districts' },
  { number: '₹200Cr+', label: '04 ✧ Portfolio Value' },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 md:px-[10vw] lg:px-[15vw] overflow-hidden" style={{ paddingTop: '22vh', paddingBottom: '6rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-2/3">
            <TextReveal>
              <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                01 ✧ ABOUT US
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="t-display" style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}>
                We find homes that <em>feel inevitable.</em>
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
                Landmark Estates has been connecting families with exceptional properties across Kerala since 2018.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-20 lg:gap-32">
          <TextReveal>
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)',
                lineHeight: 1.8,
                color: 'var(--ink)',
              }}
            >
              <p>
                We believe the right property is not found — it is recognised.
                It is the one that, the moment you enter, you understand.
              </p>
              <p className="mt-8 text-muted">
                Our work is to ensure you arrive at that recognition.
              </p>
              <p className="mt-8 text-muted" style={{ fontStyle: 'italic' }}>
                Not to sell you something. To help you find it.
              </p>
            </div>
          </TextReveal>

          <div className="flex flex-col gap-0 pt-4">
            {STATS.map((stat, i) => (
              <TextReveal key={stat.label} delay={i * 0.08}>
                <div className="py-6 flex justify-between items-end" style={{ borderBottom: '1px solid var(--line2)' }}>
                  <p className="t-label" style={{ fontSize: '0.62rem', letterSpacing: '0.3em' }}>{stat.label}</p>
                  <p style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '2.5rem', color: 'var(--ink)', lineHeight: 1 }}>
                    {stat.number}
                  </p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32">
        <TextReveal>
          <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
            02 ✧ OUR TEAM
          </p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h2 className="t-display mb-20" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>The people behind <em>the properties.</em></h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, i) => (
            <TextReveal key={member.name} delay={0.15 + i * 0.08}>
              <div>
                <ImageReveal
                  src={member.image}
                  alt={member.name}
                  aspectRatio="aspect-[3/4]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <p className="mt-6" style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1.4rem', color: 'var(--ink)' }}>
                  {member.name}
                </p>
                <div className="w-8 h-[1px] bg-ink/20 my-3" />
                <p className="t-label" style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}>{member.role}</p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32" style={{ background: 'var(--warm)' }}>
        <TextReveal>
          <p className="t-label mb-20" style={{ letterSpacing: '0.45em', fontSize: '0.62rem', opacity: 0.6 }}>
            03 ✧ OUR VALUES
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {VALUES.map((v, i) => (
            <TextReveal key={v.title} delay={0.1 + i * 0.08}>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                <p className="t-label mb-8" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink)' }}>
                  {v.title}
                </p>
                <p style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                  {v.body}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>
    </>
  );
}
