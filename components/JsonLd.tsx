export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Landmark Estates',
    description: 'Premium real estate agency curating exceptional properties across Kerala.',
    url: 'https://landmarkestates.in',
    telephone: '+919800000000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'State',
      name: 'Kerala',
    },
    sameAs: ['https://instagram.com/landmarkestates'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
