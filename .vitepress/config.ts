import { defineConfig } from 'vitepress'
import { highlightDSL, highlightDiff } from './theme/angex-highlighter'

function renderHighlightedLines(highlightedHtml: string) {
  return highlightedHtml
    .split('\n')
    .map(line => `<span class="line">${line || '<wbr>'}</span>`)
    .join('\n')
}

function looksLikeDiffFence(code: string) {
  const lines = code
    .split('\n')
    .map(line => line.trimEnd())
    .filter(line => line.trim().length > 0)

  return lines.length > 0 && lines.every(line => line.startsWith('+') || line.startsWith('-'))
}

function renderFence(code: string, language: string, renderer: (content: string) => string) {
  const rendered = renderHighlightedLines(renderer(code.replace(/\n$/, '')))

  return `<div class="language-${language} vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">${language}</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code data-angex-highlighted="true">${rendered}</code></pre></div>`
}

function renderAngexFence(code: string, language: string) {
  return renderFence(code, language, highlightDSL)
}

function renderDiffFence(code: string) {
  return renderFence(code, 'diff', highlightDiff)
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'MissFisher Wiki',
  description: 'MissFisher 文档站',
  base: '/MissFisher/',
  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['**/README.md'],
  head: [
    ['link', { rel: 'icon', href: '/MissFisher/MissFisherIconHq128.jpg' }],
    ['meta', { name: 'theme-color', content: '#0f1318' }]
  ],
  markdown: {
    languageAlias: {
      angex: 'yaml',
      mfdsl: 'yaml',
      dsl: 'yaml',
      plantuml: 'yaml',
      ebnf: 'yaml'
    },
    config(md) {
      const fence = md.renderer.rules.fence

      md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args
        const token = tokens[idx]
        const language = token.info.trim().split(/\s+/, 1)[0].toLowerCase()

        if (language === 'angex' || language === 'mfdsl' || language === 'dsl') {
          return renderAngexFence(token.content, language)
        }

        if (language === 'diff') {
          return renderDiffFence(token.content)
        }

        if (!language && looksLikeDiffFence(token.content)) {
          return renderDiffFence(token.content)
        }

        return fence ? fence(...args) : ''
      }
    }
  },
  themeConfig: {
    logo: '/MissFisherIconHq128.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '参考', link: '/reference/' },
      { text: 'GitHub', link: 'https://github.com/BlackCleaverLoli/MissFisher' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '总览', link: '/guide/' },
            { text: '快速修改指南', link: '/guide/quick-edit' },
            { text: '学习钓法表达式', link: '/guide/learn-angex' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '总览', link: '/reference/' },
            { text: 'Angex 语法规范', link: '/reference/angex-grammar' },
            { text: '诱饵技能', link: '/reference/lure' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlackCleaverLoli/MissFisher' }
    ],
    outline: {
      level: [2, 3],
      label: '本页导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/BlackCleaverLoli/MissFisher/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Powered by VitePress',
      copyright: ''
    }
  }
})



