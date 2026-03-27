'use client';

import { type PropertyType, type PropertyStatus } from '@/types/property';

interface FilterBarProps {
  activeType: PropertyType | 'all';
  activeStatus: PropertyStatus | 'all';
  onTypeChange: (type: PropertyType | 'all') => void;
  onStatusChange: (status: PropertyStatus | 'all') => void;
}

const TYPES: (PropertyType | 'all')[] = ['all', 'villa', 'apartment', 'heritage', 'commercial', 'plot', 'luxury'];
const STATUSES: (PropertyStatus | 'all')[] = ['all', 'available', 'sold', 'coming-soon'];

/**
 * Horizontal filter bar for the properties grid.
 * Type filters on the left, status filters on the right.
 */
export default function FilterBar({
  activeType,
  activeStatus,
  onTypeChange,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 mb-12"
      style={{ borderBottom: '1px solid var(--line)' }}
    >
      {/* Type Filters */}
      <div className="flex flex-wrap gap-1 items-center">
        {TYPES.map((type, i) => (
          <span key={type} className="flex items-center">
            <button
              onClick={() => onTypeChange(type)}
              className="px-2 py-1 transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                color: activeType === type ? 'var(--ink)' : 'var(--dim)',
              }}
            >
              {type}
            </button>
            {i < TYPES.length - 1 && (
              <span style={{ color: 'var(--line)', fontSize: '0.8rem' }}>·</span>
            )}
          </span>
        ))}
      </div>

      {/* Status Filters */}
      <div className="flex flex-wrap gap-1 items-center">
        {STATUSES.map((status, i) => (
          <span key={status} className="flex items-center">
            <button
              onClick={() => onStatusChange(status)}
              className="px-2 py-1 transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                color: activeStatus === status ? 'var(--ink)' : 'var(--dim)',
              }}
            >
              {status === 'coming-soon' ? 'coming soon' : status}
            </button>
            {i < STATUSES.length - 1 && (
              <span style={{ color: 'var(--line)', fontSize: '0.8rem' }}>·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
