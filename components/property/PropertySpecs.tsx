import { type Property } from '@/types/property';

interface PropertySpecsProps {
  property: Property;
}

interface SpecRow {
  label: string;
  value: string | number | undefined;
}

/**
 * Key/value spec table for property detail pages.
 * Only renders rows where a value exists.
 */
export default function PropertySpecs({ property }: PropertySpecsProps) {
  const specs: SpecRow[] = [
    { label: 'Type', value: property.type },
    { label: 'Location', value: `${property.location}, ${property.district}` },
    { label: 'Area', value: property.area },
    { label: 'Land Area', value: property.landArea },
    { label: 'Bedrooms', value: property.bedrooms ? `${property.bedrooms} BHK` : undefined },
    { label: 'Bathrooms', value: property.bathrooms },
    { label: 'Floors', value: property.floors },
    { label: 'Facing', value: property.facing },
    { label: 'Possession', value: property.possession },
    { label: 'Listed', value: property.year },
  ];

  const validSpecs = specs.filter((s) => s.value !== undefined && s.value !== null);

  return (
    <div>
      <p className="t-label" style={{ letterSpacing: '0.4em', borderBottom: '1px solid var(--line)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        Property Details
      </p>

      <div className="flex flex-col">
        {validSpecs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between py-3.5"
            style={{ borderBottom: '1px solid var(--line2)' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontWeight: 200,
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
              }}
            >
              {spec.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '0.92rem',
                color: 'var(--ink)',
                textTransform: 'capitalize',
              }}
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
