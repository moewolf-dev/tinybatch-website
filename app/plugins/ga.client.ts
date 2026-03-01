declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const gaId = useRuntimeConfig().public.googleAnalyticsId?.trim()

  if (!gaId) {
    return
  }

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        async: true,
        tagPosition: 'head'
      },
      {
        key: 'ga-inline-init',
        innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}', { send_page_view: true });`,
        tagPosition: 'head'
      }
    ]
  })

  nuxtApp.hook('page:finish', () => {
    const fullPath = nuxtApp.$router.currentRoute.value.fullPath
    window.gtag?.('config', gaId, { page_path: fullPath })
  })
})
