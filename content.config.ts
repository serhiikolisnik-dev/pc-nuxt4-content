import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    authors: defineCollection({
      type: 'data',
      source: 'services/**.json',
      schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string()
      })
    })
  }
})