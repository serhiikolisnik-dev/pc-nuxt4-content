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

const route = useRoute()
const id = computed(() => route.params.id)
const { data } = await useAsyncData('cases', () => queryCollection('cases').first())

const doc = computed<ICases | null>(() => (data.value ?? null) as ICases | null)

const item = computed<ICase | null>(() => {
  const list = doc.value?.cases ?? []
  return list.find(c => c.id === Number(id.value)) ?? null
})
</script>

<template>
  <div>
    <div>CASE ID - {{id}}</div>
    {{item}}
  </div>
</template>

<style scoped lang="scss">

</style>