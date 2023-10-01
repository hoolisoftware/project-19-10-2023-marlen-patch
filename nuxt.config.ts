// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxt/image', 'nuxt-icons'],
  css: [
    '@/assets/styles/global.scss',
  ],
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active"
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'nuxt-color-mode'
  },
  image: {
    dir: 'assets/images'
  }
})
