import { z, defineCollection } from 'astro:content';

const projectsSchema = z.object({
  title: z.string(),
  company: z.string(),
  period: z.string(),
  stack: z.array(z.string()),
});

export type ProjectFrontMatter = z.infer<typeof projectsSchema>;

const projectsCollections = defineCollection({
  type: 'content',
  schema: projectsSchema,
});

export const collections = {
  projects: projectsCollections,
};
