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
      <section className="px-6 md:px-[10vw] lg:px-[15vw]" style={{ paddingTop: '22vh', paddingBottom: '6rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-2/3">
            <TextReveal>
              <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                01 ✧ PORTFOLIO
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="t-display" style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}>
                {PROPERTIES.length} exceptional <em>properties.</em>
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
                Currently curating {PROPERTIES.length} addresses across 8 Kerala districts. Hand-selected for architectural merit and enduring value.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] pb-32">
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
