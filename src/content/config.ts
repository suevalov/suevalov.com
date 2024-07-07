import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .max(100, 'The title length must be less than or equal to 100 chars'),
      description: z.string(),
      date: z.string(),
      tags: z.array(z.string()).optional(),
      image: image()
        .refine((img) => img.width >= 300, {
          message: 'Image must be at least 300 pixels wide',
        })
        .refine((img) => img.width === img.height, {
          message: 'Image width and height should be equal',
        }),
      imageAlt: z.string(),
    }),
});

const talksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z
      .string()
      .max(100, 'The title length must be less than or equal to 100 chars'),
    date: z.string(),
    url: z.string(),
    place: z.string(),
    language: z.string(),
    video: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  talks: talksCollection,
};
