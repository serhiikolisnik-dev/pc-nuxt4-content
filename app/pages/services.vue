<script setup lang="ts">
const { data: services } = await useAsyncData('services', () => {
  return queryCollection('services')
    .order('id', 'DESC')
    .all()
})
</script>

<template>
<!--  <ContentRenderer v-if="services" :value="services" />-->
  <div v-if="services">
    {{services}}
  </div>

  <div v-else>Services not found</div>
</template>