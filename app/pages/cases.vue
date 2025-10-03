<script setup lang="ts">
interface IImage {
  src: string
  alt: string
}
interface ICase {
  id: number
  title: string
  description: string
  image: IImage
}
interface ICases {
  seoTitle: string
  seoDescription: string
  h1Tag: string
  cases: ICase[]
}

const { data } = await useAsyncData('cases', () => queryCollection('cases').first())

const doc = computed<ICases | null>(() => (data.value ?? null) as ICases | null)
const items = computed<ICase[]>(() => doc.value?.cases ?? [])

useSeoMeta({
  title: doc.value?.seoTitle,
  description: doc.value?.seoDescription,
})
</script>

<template>
  <section v-if="doc">
    <h1>{{doc.h1Tag}}</h1>
    <div class="cases">
      <div v-for="c in items" :key="c.id">
        <h3>{{ c.title }}</h3>
        <p v-html="c.description" />
        <NuxtImg :src="c.image.src" />
      </div>
    </div>
  </section>

  <div v-else>Services not found</div>
</template>

<style lang="scss" scoped>
.cases {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
  margin: 80px 140px 0;
  width: 100%;
  img {
    height: 506px;
    width: 100%;
    object-fit: cover;
  }
}
</style>