import { createApp, h, ref } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout'

InertiaProgress.init({showSpinner: true})

createInertiaApp({
  resolve: async name => {
    const page = (await import(`./Pages/${name}`)).default

    if (page.layout === undefined) {
      page.layout = Layout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Head", Head)
      .component("Link", Link)
      .provide('isDark', ref(false))
      .mount(el)
  },
  title: title => `My App: ${title}`
})
