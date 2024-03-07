import { z, defineCollection } from 'astro:content';

const projectsSchema = z.object({
  title: z.string(),
  company: z.string(),
  period: z.string(),
  stack: z.array(z.string()),
});

const pagesSchema = z.object({
  title: z.string(),
});

export type PageFrontMatter = z.infer<typeof pagesSchema>;

export type ProjectFrontMatter = z.infer<typeof projectsSchema>;

const projectsCollections = defineCollection({
  type: 'content',
  schema: projectsSchema,
});

const pagesCollections = defineCollection({
  type: 'content',
  schema: pagesSchema,
});

export const collections = {
  projects: projectsCollections,
  pages: pagesCollections,
};
