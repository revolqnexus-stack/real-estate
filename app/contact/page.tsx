'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/shared/TextReveal';

const CONTACT_DETAILS = [
  { label: '01 ✧ Phone', value: '+91 98XXX XXXXX' },
  { label: '02 ✧ Email', value: 'hello@landmarkestates.in' },
  { label: '03 ✧ Office', value: 'MG Road, Kochi, Kerala 682016' },
  { label: '04 ✧ Hours', value: 'Mon–Sat, 10am–6pm' },
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('Contact form submitted:', data);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw]" style={{ paddingTop: '22vh', paddingBottom: '6rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-2/3">
            <TextReveal>
              <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                01 ✧ CONTACT
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="t-display" style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}>
                Let us find <em>your property.</em>
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
                Reach out to schedule a private viewing. Discretion and confidentiality are always assured.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Form + Contact Details */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-24 lg:justify-between">
          {/* Left — Contact Info */}
          <div>
            <div className="flex flex-col gap-0 border-t border-[var(--line2)] pt-2">
              {CONTACT_DETAILS.map((item, i) => (
                <TextReveal key={item.label} delay={0.1 + i * 0.06}>
                  <div className="py-6" style={{ borderBottom: '1px solid var(--line2)' }}>
                    <p className="t-label mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: 'var(--dim)' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: '1.1rem', color: 'var(--ink)' }}>
                      {item.value}
                    </p>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center h-full p-12"
                style={{ border: '1px solid var(--line)' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontStyle: 'italic',
                    fontSize: '1.25rem',
                    color: 'var(--ink)',
                    textAlign: 'center',
                    lineHeight: 1.6
                  }}
                >
                  Thank you for reaching out.<br />
                  <span className="text-muted block mt-2 text-[1.1rem]">We will be in touch within 24 hours.</span>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <input name="name" type="text" placeholder="Full name" required className="input-editorial" />
                <input name="phone" type="tel" placeholder="Phone number" required className="input-editorial" />
                <input name="email" type="email" placeholder="Email address" required className="input-editorial" />

                <select
                  name="interest"
                  className="input-editorial"
                  style={{ color: 'var(--dim)', appearance: 'none' }}
                  defaultValue=""
                >
                  <option value="" disabled>Property interest</option>
                  <option value="all">All Types</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="heritage">Heritage</option>
                  <option value="commercial">Commercial</option>
                  <option value="plot">Plot</option>
                </select>

                <select
                  name="budget"
                  className="input-editorial"
                  style={{ color: 'var(--dim)', appearance: 'none' }}
                  defaultValue=""
                >
                  <option value="" disabled>Budget range</option>
                  <option value="under-50l">Under ₹50L</option>
                  <option value="50l-1cr">₹50L – ₹1 Cr</option>
                  <option value="1cr-2cr">₹1 Cr – ₹2 Cr</option>
                  <option value="2cr-5cr">₹2 Cr – ₹5 Cr</option>
                  <option value="5cr-plus">₹5 Cr+</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  rows={4}
                  className="input-editorial resize-none"
                />

                <div className="pt-4">
                  <button type="submit" className="btn-ghost w-full">
                    submit enquiry ✧
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] pb-32">
        <div
          className="relative aspect-[21/9] w-full overflow-hidden"
          style={{ filter: 'grayscale(100%) contrast(1.1)', opacity: 0.9, background: 'var(--warm)' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31439.59!2d76.27!3d9.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5f3f59b!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Landmark Estates office location — Kochi, Kerala"
          />
        </div>
      </section>
    </>
  );
}
