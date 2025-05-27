export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@prisma/nuxt',
  ],
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
        '.prisma/client/default': './node_modules/.prisma/client/default.js',
      },
    },
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN + '/api/auth',
    originEnvKey: 'AUTH_ORIGIN',
    globalAppMiddleware: true,
  },
  runtimeConfig: {
    public: {
      GITHUB_ID: process.env.GITHUB_ID,
    },
    GITHUB_SECRET: process.env.GITHUB_SECRET
  },
  
})