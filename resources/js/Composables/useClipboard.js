import { ref } from "vue";

export function useClipboard(text) {
  let copied = ref(false)
  // let supported = Boolean(navigator && navigator.clipboard)    // option 1
  let supported = navigator && 'clipboard' in navigator           // option 2

  let copy = () => {
    if (supported) {
      navigator.clipboard.writeText(text)
      copied.value = true

      return
    }

    alert('Apologies, your browser does not support clipboard API!')
  }

  return { copy, copied, supported }
}
