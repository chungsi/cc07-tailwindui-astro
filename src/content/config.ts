import { defineCollection, z } from 'astro:content'

const cookingCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    image: image()
  })
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  'cooking': cookingCollection,
};