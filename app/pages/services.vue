<script setup lang="ts">
// const { data: services } = await useAsyncData('services', () => {
//   return queryCollection('services')
//     .order('id', 'DESC')
//     .all()
// })

const data = await useAsyncData(() => queryCollection('services')

// const { data: services } = await useAsyncData('services', () => )
</script>

<template>
<!--  <ContentRenderer v-if="services" :value="services" />-->
  <div v-if="data">
    {{data}}
  </div>

  <div v-else>Services not found</div>
</template>