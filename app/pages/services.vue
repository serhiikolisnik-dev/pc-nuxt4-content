<script setup lang="ts">
// type Service = { id: number; title: string; description: string }
interface IImage {
  src: string
  alt: string
}
interface IService {
  id: number
  title: string
  description: string
  image: IImage
}

const { data } = await useAsyncData('services', () => {
  return queryCollection('services').first()
})

const items = computed<IService[]>(() => data.value?.services ?? [])
</script>

<template>
  <ul v-if="items.length">
    <li v-for="s in items" :key="s.id">
      <h3>{{ s.title }}</h3>
      <p>{{ s.description }}</p>
      <NuxtImg :src="s.image.src" />
    </li>
  </ul>

  <div v-else>Services not found</div>
</template>