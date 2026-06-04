import { defineCollection, z } from 'astro:content';

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    title: z.string().optional(),
    image: z.string().optional(),
    address: z.string().optional(),
    email: z.string().optional(),
    website: z.string().url().optional(),
    github: z.string().url().optional(),
    scholar: z.string().url().optional(),
    orcid: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    researchInterests: z
      .array(
        z.object({
          topic: z.string(),
          items: z.array(z.string()),
        })
      )
      .optional(),
    education: z
      .array(
        z.object({
          year: z.string(),
          degree: z.string(),
          institution: z.string(),
          notes: z.array(z.string()).optional(),
        })
      )
      .optional(),
    experience: z
      .array(
        z.object({
          period: z.string(),
          position: z.string(),
          organization: z.string(),
          notes: z.array(z.string()).optional(),
        })
      )
      .optional(),
    synergy: z
      .array(
        z.object({
          period: z.string(),
          activity: z.string().optional(),
          activities: z.array(z.string()).optional(),
        })
      )
      .optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        })
      )
      .optional(),
    status: z.enum(['active', 'completed', 'paused']).optional(),
    order: z.number().optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(),
    title: z.string(),
    description: z.string(),
    institution: z.enum(['MSU', 'USPAS']),
    level: z.enum(['Undergraduate', 'Graduate']),
    semester: z.string().optional(),
    syllabus: z.string().url().optional(),
    schedule: z.string().url().optional(),
    materials: z.string().url().optional(),
    external: z.boolean().optional(),
    externalUrl: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { people, projects, courses };
