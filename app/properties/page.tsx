'use client';

import { useState } from 'react';
import TextReveal from '@/components/shared/TextReveal';
import FilterBar from '@/components/shared/FilterBar';
import PropertyGrid from '@/components/property/PropertyGrid';
import { PROPERTIES } from '@/lib/properties';
import { type PropertyType, type PropertyStatus } from '@/types/property';

export default function PropertiesPage() {
  const [activeType, setActiveType] = useState<PropertyType | 'all'>('all');
  const [activeStatus, setActiveStatus] = useState<PropertyStatus | 'all'>('all');

  const filtered = PROPERTIES.filter((p) => {
    if (activeType !== 'all' && p.type !== activeType) return false;
    if (activeStatus !== 'all' && p.status !== activeStatus) return false;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12" style={{ paddingTop: '18vh', paddingBottom: '4rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <TextReveal>
              <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                All Properties
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="t-heading">
                {PROPERTIES.length} exceptional <em>properties.</em>
              </h1>
            </TextReveal>
          </div>
          <TextReveal delay={0.15}>
            <p
              className="md:text-right"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '0.9rem',
                color: 'var(--muted)',
                maxWidth: '280px',
              }}
            >
              Currently listing {PROPERTIES.length} properties across 8 Kerala districts.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 md:px-12 pb-24">
        <FilterBar
          activeType={activeType}
          activeStatus={activeStatus}
          onTypeChange={setActiveType}
          onStatusChange={setActiveStatus}
        />
        <PropertyGrid properties={filtered} />

        {filtered.length === 0 && (
          <p className="t-body text-center py-20" style={{ color: 'var(--dim)' }}>
            No properties match your current filters.
          </p>
        )}
      </section>
    </>
  );
}
