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

const postsSchema = z.object({
  title: z.string(),
  createdAt: z.date(),
  editedAt: z.date().optional(),
  tags: z.array(z.string()),
});

export type PageFrontMatter = z.infer<typeof pagesSchema>;
export type ProjectFrontMatter = z.infer<typeof projectsSchema>;
export type PostFrontMatter = z.infer<typeof postsSchema>;

const projectsCollections = defineCollection({
  type: 'content',
  schema: projectsSchema,
});

const pagesCollections = defineCollection({
  type: 'content',
  schema: pagesSchema,
});

const postsCollections = defineCollection({
  type: 'content',
  schema: postsSchema,
});

export const collections = {
  projects: projectsCollections,
  posts: postsCollections,
  pages: pagesCollections,
};
