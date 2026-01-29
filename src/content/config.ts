import { defineCollection, z } from 'astro:content';

const realizacje = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    order: z.number().default(0), 
    description: z.string().optional(),
    author: z.string().default('Przemek Miros'),
    date: z.coerce.date(), 
    tags: z.array(z.string()).optional(),
    category: z.union([z.string(), z.array(z.string())]).optional(),
    thumbnail: z.string().optional(),
    tileImage: z.string().optional(),
    imageMain: z.string().optional(),
    background: z.string().optional(),
    tileBg: z.string().optional(),
    robots: z.string().optional(),
  }),
});

const artykuly = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional().default('Przemek Miros'),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().optional(),
    tileImage: z.string().optional(),
    imageMain: z.string().optional(),
    background: z.string().optional(),
    tileBg: z.string().optional(),
    robots: z.string().optional(),
    order: z.number().optional(),
    category: z.union([z.string(), z.array(z.string())]).optional(),
  }),
});

export const collections = {
  'realizacje': realizacje,
  'artykuly': artykuly,
};