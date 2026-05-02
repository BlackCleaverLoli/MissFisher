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
    updatedAt?: string
  }
  links?: {
    manual?: string
    installManifest?: string
    resourceBundle?: string
  }
}

const meta = ref<ReleaseMeta | null>(null)
const failed = ref(false)

const pluginVersion = computed(() => meta.value?.plugin?.version || '读取中')
const bundleName = computed(() => meta.value?.resource?.bundleName || '读取中')
const presetStamp = computed(() => meta.value?.resource?.presetStamp || '读取中')
const summary = computed(() => meta.value?.resource?.summary || '正在读取最新资源说明。')
const updatedAt = computed(() => {
  const value = meta.value?.resource?.updatedAt
  if (!value) {
    return '读取中'
  }

  return value.replace('T', ' ').replace('+08:00', ' UTC+8')
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
      <p class="mf-release__eyebrow">当前发布信息</p>
      <h2 id="mf-release-title">资源与插件状态</h2>
      <p class="mf-release__summary">{{ summary }}</p>
      <p v-if="failed" class="mf-release__fallback">发布信息暂时无法读取，请以 GitHub 仓库中的文件为准。</p>
    </div>

    <dl class="mf-release__stats">
      <div>
        <dt>插件版本</dt>
        <dd>{{ pluginVersion }}</dd>
      </div>
      <div>
        <dt>资源包</dt>
        <dd>{{ bundleName }}</dd>
      </div>
      <div>
        <dt>预设表标记</dt>
        <dd>{{ presetStamp }}</dd>
      </div>
      <div>
        <dt>资源更新时间</dt>
        <dd>{{ updatedAt }}</dd>
      </div>
    </dl>

    <div class="mf-release__actions" aria-label="发布相关入口">
      <a :href="meta?.links?.manual || withBase('/manual/')">打开手册</a>
      <a :href="meta?.links?.installManifest || 'https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/refs/heads/main/MissFisher.json'">安装仓库</a>
      <a :href="meta?.links?.resourceBundle || 'https://github.com/BlackCleaverLoli/MissFisher/tree/main/Preset'">资源包</a>
    </div>
  </section>
</template>