import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core'
import php from 'highlight.js/lib/languages/php'

hljs.registerLanguage("php", php)

export function highlightAll() {
  hljs.highlightAll()
}

export function highlight(selector) {
  document.querySelectorAll(selector + ' pre code').forEach(el => {
    hljs.highlightElement(el)
  })
}
