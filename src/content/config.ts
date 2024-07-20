import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
