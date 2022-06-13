import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout'

InertiaProgress.init({showSpinner: true})

createInertiaApp({
  resolve: async name => {
    const page = (await import(`./Pages/${name}`)).default
    page.layout = page.layout || Layout

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Head", Head)
      .component("Link", Link)
      .mount(el)
  },
  title: title => `My App: ${title}`
})
