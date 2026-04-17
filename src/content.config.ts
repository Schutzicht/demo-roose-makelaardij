import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const woningen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/woningen' }),
  schema: z.object({
    title: z.string(),
    address: z.string(),
    postalCode: z.string(),
    city: z.string(),
    price: z.number(),
    priceLabel: z.string().optional(),
    status: z.enum(['te koop', 'nieuw', 'verkocht', 'onder bod', 'verhuurd']),
    type: z.enum(['woonhuis', 'appartement', 'recreatiewoning', 'nieuwbouw', 'vakantiewoning']),
    category: z.enum(['koop', 'huur', 'recreatie', 'nieuwbouw', 'vakantieverhuur']).default('koop'),
    images: z.array(z.string()),
    bedrooms: z.number(),
    bathrooms: z.number().optional(),
    area: z.number(),
    plotArea: z.number().optional(),
    buildYear: z.number().optional(),
    energy: z.string().optional(),
    features: z.array(z.string()).optional(),
    coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
    author: z.string().default('Roose Makelaardij'),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const diensten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diensten' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

export const collections = { woningen, blog, diensten };
