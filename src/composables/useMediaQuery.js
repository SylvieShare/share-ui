import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useMediaQuery(query) {
  const matches = ref(typeof window !== 'undefined' && !!window.matchMedia?.(query).matches)
  let mediaQuery = null
  function onChange(event) { matches.value = event.matches }
  onMounted(() => {
    if (!window.matchMedia) return
    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches
    mediaQuery.addEventListener?.('change', onChange)
  })
  onBeforeUnmount(() => mediaQuery?.removeEventListener?.('change', onChange))
  return matches
}

export function useIsMobile(maxWidth = 768) {
  return useMediaQuery(`(max-width: ${maxWidth}px)`)
}
