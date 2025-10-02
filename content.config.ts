import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    services: defineCollection({
      type: 'data',
      source: 'services.json',
      schema: z.object({
        services: z.array(z.object({
          id: z.number(),
          title: z.string(),
          description: z.string()
        }))
      })
    })
  }
})