// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css'
  ],
  nitro: {
    devProxy: {
      '/api/soundcloud': {
        target: 'https://api-v2.soundcloud.com',
        changeOrigin: true,
        prependPath: true,
      }
    }
  },
  runtimeConfig: {
    
    // Public keys (exposed to client-side)
    public: {
      soundcloudClientId: '',
      soundcloudUserId: ''
    }
  }
})
