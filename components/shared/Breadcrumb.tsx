import Link from 'next/link';
import TextReveal from '@/components/shared/TextReveal';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <TextReveal className="px-6 md:px-12 py-6">
      <nav
        className="flex items-center gap-2"
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'var(--muted)',
          textTransform: 'uppercase',
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span style={{ color: 'var(--dim)' }}>→</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink transition-colors duration-200" style={{ color: 'var(--dim)' }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--ink)' }}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </TextReveal>
  );
}
