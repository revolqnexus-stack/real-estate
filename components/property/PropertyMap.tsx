interface PropertyMapProps {
  district: string;
  location: string;
}

/**
 * Grayscale Google Maps embed for editorial aesthetic.
 * Shows a generic Kerala overview (no API key needed).
 */
export default function PropertyMap({ district, location }: PropertyMapProps) {
  return (
    <section className="px-6 md:px-12 pb-20">
      <p className="t-label mb-12" style={{ letterSpacing: '0.4em' }}>
        Location
      </p>

      <div
        className="relative aspect-video w-full overflow-hidden mb-6"
        style={{ filter: 'grayscale(100%)', opacity: 0.8, background: 'var(--warm)' }}
      >
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1005844.2481005!2d76.1!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d51457f4991%3A0xbd5a9bf3e4b3e64!2sKerala!5e0!3m2!1sen!2sin`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${location}, ${district}`}
        />
      </div>

      <p className="t-subheading" style={{ fontSize: '1rem' }}>
        Located in {location}, {district}
      </p>
    </section>
  );
}
