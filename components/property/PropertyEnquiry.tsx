'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/shared/TextReveal';

interface PropertyEnquiryProps {
  propertyName: string;
}

/**
 * Enquiry section with a form and contact details.
 * Logs to console on submit (no backend).
 */
export default function PropertyEnquiry({ propertyName }: PropertyEnquiryProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('Enquiry submitted:', { property: propertyName, ...data });
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="px-6 md:px-12 py-24" style={{ background: 'var(--warm)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-20">
        {/* Form */}
        <div>
          <p className="t-label mb-4" style={{ letterSpacing: '0.4em' }}>
            Enquire
          </p>
          <TextReveal>
            <h2 className="t-heading mb-16">
              Interested in <em>{propertyName}?</em>
            </h2>
          </TextReveal>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: 'var(--ink)',
              }}
            >
              Thank you. We will be in touch within 24 hours.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input name="name" type="text" placeholder="Full name" required className="input-editorial" />
                <input name="phone" type="tel" placeholder="Phone number" required className="input-editorial" />
              </div>
              <input name="email" type="email" placeholder="Email address" required className="input-editorial" />
              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                rows={3}
                className="input-editorial resize-none"
              />
              <button type="submit" className="btn-ghost w-full md:w-fit">
                send enquiry
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-12 pt-4">
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.5rem',
                color: 'var(--muted)',
                marginBottom: '1.5rem',
              }}
            >
              Get in touch
            </h3>
            <div className="flex flex-col gap-4">
              {['+91 98XXX XXXXX', 'hello@landmarkestates.in', 'Kochi, Kerala'].map((item) => (
                <p
                  key={item}
                  style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1rem', color: 'var(--muted)' }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--dim)' }}>
            We respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
