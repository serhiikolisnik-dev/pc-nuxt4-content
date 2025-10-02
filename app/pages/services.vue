<script setup lang="ts">
type Service = { id: number; title: string; description: string }

const { data } = await useAsyncData('services', () => {
  return queryCollection('services').first()
})

const items = computed<Service[]>(() => data.value?.services ?? [])
</script>

<template>
  <ul v-if="items.length">
    <li v-for="s in items" :key="s.id">
      <h3>{{ s.title }}</h3>
      <p>{{ s.description }}</p>
    </li>
  </ul>

  <div v-else>Services not found</div>
</template>