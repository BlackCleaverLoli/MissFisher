<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

type ReleaseMeta = {
  plugin?: {
    version?: string
    changelogSummary?: string[]
  }
  resource?: {
    bundleVersion?: string
    bundleName?: string
    presetStamp?: string
    summary?: string
    discordSummary?: string
  }
  links?: {
    manual?: string
    installManifest?: string
    resourceBundle?: string
  }
}

const meta = ref<ReleaseMeta | null>(null)
const failed = ref(false)
const onlineSheetLink = 'https://docs.qq.com/sheet/DVlNaQ012amF4SW1G?tab=yirja0'

const pluginVersion = computed(() => {
  const value = meta.value?.plugin?.version || '读取中'
  if (value === '读取中' || value.startsWith('v')) {
    return value
  }

  return `v${value}`
})
const presetStamp = computed(() => meta.value?.resource?.presetStamp || '读取中')
const summary = computed(() => {
  const resource = meta.value?.resource
  const discordSummary = resource?.discordSummary?.trim().replace(/\s+/g, ' ')
  const releaseSummary = resource?.summary?.trim()

  const lines = []
  if (discordSummary) {
    lines.push(discordSummary)
  }
  if (releaseSummary) {
    lines.push(`近期更新：${releaseSummary}`)
  }

  return lines.join('\n') || '正在读取最新资源说明。'
})

onMounted(async () => {
  try {
    const response = await fetch(withBase('/release-meta.json'), { cache: 'no-cache' })
    if (!response.ok) {
      throw new Error(`release-meta.json ${response.status}`)
    }

    meta.value = await response.json()
  } catch {
    failed.value = true
  }
})
</script>

<template>
  <section class="mf-release" aria-labelledby="mf-release-title">
    <div class="mf-release__body">
      <p id="mf-release-title" class="mf-release__eyebrow">当前发布</p>
      <dl class="mf-release__stats">
        <div>
          <dt>最新版本</dt>
          <dd>{{ pluginVersion }}</dd>
        </div>
        <div>
          <dt>钓法数据</dt>
          <dd>{{ presetStamp }}</dd>
        </div>
      </dl>
      <p class="mf-release__summary">{{ summary }}</p>
      <p v-if="failed" class="mf-release__fallback">发布信息暂时无法读取，请以 GitHub 仓库中的文件为准。</p>
    </div>

    <div class="mf-release__actions" aria-label="发布相关入口">
      <a class="mf-release__action" :href="onlineSheetLink" target="_blank" rel="noreferrer">在线表格</a>
    </div>
  </section>
</template>
