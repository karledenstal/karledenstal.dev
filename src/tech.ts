type Tech = {
  id: string;
  label: string;
  bg: string;
  text: string;
};

export const tech: Tech[] = [
  {
    id: 'typescript',
    label: 'Typescript',
    bg: '#3178c6',
    text: '#fff',
  },
  {
    id: 'javascript',
    label: 'Javascript',
    bg: '#f0db4f',
    text: '#000',
  },
  {
    id: 'react',
    label: 'React',
    bg: '#61dbfb',
    text: '#000',
  },
  {
    id: 'react-native',
    label: 'React Native',
    bg: '#61fbce',
    text: '#000',
  },
  {
    id: 'css',
    label: 'CSS',
    bg: '#264de4',
    text: '#fff',
  },
  {
    id: 'sass',
    label: 'Sass',
    bg: '#c69',
    text: '#fff',
  },
  {
    id: 'redux',
    label: 'Redux',
    bg: '#764abc',
    text: '#fff',
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    bg: '#000',
    text: '#fff',
  },
  {
    id: 'astro',
    label: 'Astro',
    bg: '#f97316',
    text: '#fff',
  },
  {
    id: 'node',
    label: 'Node',
    bg: '#68a063',
    text: '#fff',
  },
  {
    id: 'express',
    label: 'Express',
    bg: '#259dff',
    text: '#fff',
  },
  {
    id: 'elysia',
    label: 'Elysia',
    bg: '#182C51',
    text: '#fff',
  },
  {
    id: 'terraform',
    label: 'Terraform',
    bg: '#7B42BC',
    text: '#fff',
  },
  {
    id: 'docker',
    label: 'Docker',
    bg: '#0db7ed',
    text: '#fff',
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    bg: '#00ed64',
    text: '#000',
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    bg: '#008bb9',
    text: '#fff',
  },
  {
    id: 'prisma',
    label: 'Prisma',
    bg: '#4C51BF',
    text: '#fff',
  },
  {
    id: 'php',
    label: 'PHP',
    bg: '#777BB3',
    text: '#fff',
  },
  {
    id: 'graphql',
    label: 'GraphQL',
    bg: '#E10098',
    text: '#fff',
  },
  {
    id: 'playwright',
    label: 'Playwright',
    bg: '#D65348',
    text: '#fff',
  },
  {
    id: 'jest',
    label: 'Jest',
    bg: '#15C213',
    text: '#fff',
  },
  {
    id: 'react-testing-library',
    label: 'React Testing Library',
    bg: '#FD4545',
    text: '#fff',
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS',
    bg: '#38BDF8',
    text: '#fff',
  },
  {
    id: 'vue',
    label: 'Vue',
    bg: '#41B883',
    text: '#fff',
  },
  {
    id: 'nuxt',
    label: 'Nuxt',
    bg: '#00DC82',
    text: '#fff',
  },
  {
    id: 'elasticsearch',
    label: 'ElasticSearch',
    bg: '#34BDAF',
    text: '#fff',
  },
  {
    id: 'java',
    label: 'Java',
    bg: '#BC0B19',
    text: '#fff',
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    bg: '#aaa',
    text: '#fff',
  }
] as const;

export const techMap = Object.fromEntries(tech.map(t => [t.id, t]))
export const technologyIds = tech.map((t) => t.id);

