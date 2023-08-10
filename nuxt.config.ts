// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools-ui-kit',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  typescript: {
    typeCheck: true,
  }
})
