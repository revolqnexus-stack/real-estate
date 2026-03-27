'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'properties', href: '/properties' },
  { name: 'collections', href: '/collections' },
  { name: 'about', href: '/about' },
  { name: 'journal', href: '/journal' },
  { name: 'contact', href: '/contact' },
] as const;

const EASE = [0.25, 0, 0, 1] as const;

/**
 * Fixed navigation bar: brand left, links center, phone right.
 * Full-screen overlay on mobile with staggered link reveals.
 */
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-7">
        {/* Brand */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontWeight: 300,
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            color: 'var(--ink)',
          }}
        >
          LANDMARK ESTATES
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-11">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-250"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '0.78rem',
                textTransform: 'lowercase',
                color: pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'var(--ink)'
                  : 'var(--muted)',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Phone */}
        <a
          href="tel:+919800000000"
          className="hidden md:block transition-colors duration-250"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '0.78rem',
            color: 'var(--muted)',
          }}
        >
          +91 98XXX XXXXX
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Open menu"
        >
          <span className="block h-[1px] w-full" style={{ background: 'var(--ink)' }} />
          <span className="block h-[1px] w-full" style={{ background: 'var(--ink)' }} />
        </button>
      </nav>

      {/* ─── Mobile Overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[200] flex flex-col items-start justify-center px-10"
            style={{ background: 'var(--cream)' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-7 right-6 p-2"
              aria-label="Close menu"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: '1.5rem',
                color: 'var(--ink)',
              }}
            >
              ×
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                      lineHeight: 1.1,
                      color: 'var(--ink)',
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Phone */}
            <motion.a
              href="tel:+919800000000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-10"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'var(--muted)',
              }}
            >
              +91 98XXX XXXXX
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
