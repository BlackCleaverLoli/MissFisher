import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import ReleaseMetaCard from './components/ReleaseMetaCard.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ReleaseMetaCard', ReleaseMetaCard)
  }
}

export default theme