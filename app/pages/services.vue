<script setup lang="ts">
const { data: services } = await useAsyncData(() => queryCollection('content').path('/services').first())

useSeoMeta({
  title: services.value?.title,
  description: services.value?.description
})
</script>

<template>
<!--  <ContentRenderer v-if="services" :value="services" />-->
  <div v-if="services">
    {{services}}
  </div>

  <div v-else>Services not found</div>
</template>