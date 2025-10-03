import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    cases: defineCollection({
      type: 'data',
      source: 'cases.json',
      schema: z.object({
        seoTitle: z.string(),
        seoDescription: z.string(),
        h1Tag: z.string(),
        cases: z.array(z.object({
          id: z.number(),
          title: z.string(),
          description: z.string(),
          image: z.object({
            src: z.string().editor({ input: 'media' }),
            alt: z.string(),
          }),
        }))
      })
    })
  }
})