import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core'
import php from 'highlight.js/lib/languages/php'

hljs.registerLanguage("php", php)

export function highlight(selector) {
  if (!selector) {
    hljs.highlightAll()

    return
  }

  document.querySelectorAll(selector + ' pre code').forEach(highlightElement)
}

export function highlightElement(el) {
  hljs.highlightElement(el)
}
