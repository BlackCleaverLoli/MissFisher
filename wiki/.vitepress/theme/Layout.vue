<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import { highlightDSLBlocks } from './angex-highlighter'
import ReleaseMetaCard from './components/ReleaseMetaCard.vue'

const { Layout } = DefaultTheme
const route = useRoute()

async function applyAngexHighlighting() {
  await nextTick()

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      highlightDSLBlocks()
    })
  })
}

onMounted(applyAngexHighlighting)
watch(() => route.path, applyAngexHighlighting, { flush: 'post' })
</script>

<template>
  <Layout>
    <template #home-features-before>
      <ReleaseMetaCard />
    </template>
  </Layout>
</template>
