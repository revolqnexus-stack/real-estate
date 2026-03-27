import Link from 'next/link';

/**
 * Minimal footer: copyright left, brand center, legal right.
 * Intentionally restrained — no social links, no columns.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      {/* Copyright */}
      <div className="text-center md:text-left order-2 md:order-1">
        <p
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontWeight: 300,
            fontSize: '0.72rem',
            color: 'var(--dim)',
          }}
        >
          © {year} Landmark Estates. All properties subject to availability.
        </p>
      </div>

      {/* Brand */}
      <div className="text-center order-1 md:order-2">
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '0.85rem',
            color: 'var(--muted)',
          }}
        >
          Landmark Estates
        </Link>
      </div>

      {/* Legal Links */}
      <div className="text-center md:text-right order-3 flex justify-center md:justify-end gap-5">
        {['Privacy', 'Terms', 'Sitemap'].map((label) => (
          <Link
            key={label}
            href={`/${label.toLowerCase()}`}
            className="transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontWeight: 300,
              fontSize: '0.72rem',
              color: 'var(--dim)',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
