'use client';

/**
 * Smooth-scrolls to the #enquire section.
 * Extracted as a client component because onClick
 * handlers cannot be used in Server Components.
 */
export default function EnquireButton() {
  return (
    <button
      className="btn-ghost w-full mt-10"
      onClick={() => {
        document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      enquire about this property
    </button>
  );
}
