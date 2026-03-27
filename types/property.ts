export type PropertyStatus =
  | 'available'
  | 'sold'
  | 'reserved'
  | 'coming-soon';

export type PropertyType =
  | 'villa'
  | 'apartment'
  | 'plot'
  | 'commercial'
  | 'heritage'
  | 'luxury';

export interface PropertyCoordinates {
  lat: number;
  lng: number;
}

export interface Property {
  slug: string;
  title: string;
  location: string;
  district: string;
  type: PropertyType;
  status: PropertyStatus;
  price: string;
  priceNote?: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
  landArea?: string;
  facing?: string;
  possession?: string;
  year: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  amenities: string[];
  highlights: string[];
  coordinates?: PropertyCoordinates;
  featured?: boolean;
  collections?: string[];
}
