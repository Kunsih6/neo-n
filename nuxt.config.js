import * as configs from './configs'

export default {
  server: {
    port: '3000',
    host: '0.0.0.0',
  },

  // Accesible both server and client
  publicRuntimeConfig: {
    // https://i18n.nuxtjs.org/seo#requirements
    i18n: {
      baseUrl:
        process.env.NODE_ENV === 'production'
          ? 'https://kunsih-neo-n.web.app/'
          : 'http://localhost:3000',
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Kunsih',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'theme-color', name: 'theme-color', content: '#34267d' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/base.pcss',
    '~/assets/styles/fonts.pcss',
    '~/assets/styles/typography.pcss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/i18n'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://ngrok.nuxtjs.org/
    '@nuxtjs/ngrok',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory',
      },
    ],
  ],

  ...configs,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
}
