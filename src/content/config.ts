import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Cory Trimm'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const locationSchema = z.object({
  locationName: z.string(),
  locationAddress: z.string(),
  googleMapsLink: z.string(),
  appleMapsLink: z.string(),
});

const chaptersCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/chapters' }),
  schema: z.object({
    activeChapter: z.boolean(),
    comingSoon: z.boolean(),
    heroImage: z.string().optional(),
    officialChapter: z.boolean().optional(),
    slug: z.string(),
    city: z.string(),
    state: z.string(),
    ptBRsnippet: z.string(),
    snippet: z.string(),
    findUs: locationSchema,
    whatsAppLink: z.string().optional(),
    foundedDate: z.string().optional(),
    lastMeeting: z.string().optional(),
    category: z.string(),
    organizer: z.string().optional(),
    totalMembers: z.string(),
    tags: z.array(z.string()).optional(),
    otherPlacesToWatch: z.array(locationSchema),
  }),
});

export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'chapters': chaptersCollection,
};
