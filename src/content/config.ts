import { z, defineCollection } from 'astro:content';

const projectsCollections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    roles: z.array(z.object({
      role: z.string(),
      period: z.string()
    })),
    company: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollections,
};
