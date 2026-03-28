import { type JournalPost } from '@/types/journal';

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: 'east-facing-homes-premium',
    title: 'Why East-Facing Homes Command a Premium in Kerala',
    date: 'March 2025',
    category: 'Market Insight',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6d349c58?auto=format&fit=crop&w=3840&q=90',
    excerpt: 'The orientation of a home affects more than morning light. We explore the cultural and practical reasons behind Kerala\'s enduring preference.',
    content: `The orientation of a house is often as important as its location or its architecture. Among all orientations, East-facing properties consistently command a premium. But why?

## The Morning Light

Keralites have a deep-rooted cultural affinity for the morning sun. An East-facing home ensures that the first rays of the sun enter the house, which is traditionally associated with health, prosperity, and a positive start to the day.

## Vastu Shastra

Ancient Indian architectural principles, Vastu Shastra, place significant emphasis on the East. It is believed to be the direction of Indra and Surya, making it the most auspicious direction for the main entrance.

## Thermal Comfort

In the tropical climate of Kerala, the evening sun from the West can be incredibly harsh. East-facing homes tend to be cooler in the afternoons as the primary heat source is on the opposite side of the main living areas.

## Market Demand

Because of these reasons, the demand for East-facing plots and homes far outstrips supply, leading to a natural increase in market value. For investors, this orientation is a reliable indicator of long-term appreciation.`,
  },
  {
    slug: 'heritage-properties-preserving-stories',
    title: 'Heritage Properties: Preserving What Cannot Be Rebuilt',
    date: 'February 2025',
    category: 'Living',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3840&q=90',
    excerpt: 'A tharavad from 1912. The story of how we matched a family to a home that had waited decades for the right owners.',
    content: `There is a soul in an old house that a new construction can never replicate. In Kerala, our traditional Tharavads are not just buildings — they are repositories of history, culture, and family stories.

## The Architecture of Breath

Traditional Kerala architecture was designed for the climate. The use of laterite stone, teak wood, and the Nalukettu central courtyard design allows for natural ventilation that modern air-conditioning struggles to match.

## The Challenge of Preservation

Owning a heritage property is a responsibility. It requires a passion for history and a commitment to maintenance. We work with specialized craftsmen who understand the old ways of building — artisans whose knowledge is passed down through generations.

## A Modern Chapter

The most successful heritage restorations are those that integrate modern comforts without sacrificing the historical character. It is about letting the house live in the present while respecting its past. New plumbing behind old walls. Quiet climate control that does not disturb the wooden ceilings. Technology that serves the architecture, not the other way around.`,
  },
  {
    slug: 'new-premium-luxury-signals-2025',
    title: 'The New Premium: What Buyers Want in 2025',
    date: 'January 2025',
    category: 'Design',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=3840&q=90',
    excerpt: 'Privacy, natural light, and proximity to nature are replacing gym and pool as primary luxury signals in Kerala real estate.',
    content: `The definition of luxury is shifting. For the modern Kerala buyer, "more" is no longer better. "Better" is better.

## Privacy as the Ultimate Luxury

In an increasingly connected world, true privacy is becoming rare. High-walled estates, hidden entrances, and sound-insulated spaces are at the top of every high-net-worth individual's list. The ability to be unreachable — that is the new status symbol.

## Biophilic Design

The boundary between indoors and outdoors is blurring. Large glass walls that frame the Kerala greenery, indoor plants that improve air quality, and natural materials like stone and wood are the new must-haves. Homes that feel like nature, not shelters from it.

## Low-Maintenance Living

Luxury should not be a burden. Buyers are looking for smart homes that are easy to manage and materials that age gracefully without constant intervention. Teak that patinas. Stone that weathers beautifully. Systems that run silently.

## The Disappearance of the Obvious

The most telling shift: buyers no longer want their luxury to be visible. Gone are the gold-plated fixtures and marble lobbies. In their place: restraint, proportion, and the confidence of understatement.`,
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return JOURNAL_POSTS.map((p) => p.slug);
}
