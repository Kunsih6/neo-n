module.export = {
  server: {
    host: '0.0.0.0',
  },

  // Accesible both server and client
  publicRuntimeConfig: {
    // https://i18n.nuxtjs.org/seo#requirements
    i18n: {
      baseUrl: 'http://localhost:3000',
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Kunsih',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  ],

  i18n: {
    locales: [
      {
        code: 'en-us',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
        isCatchallLocale: true,
        // * You can add any other information you need associated to the language/country
        // Example:
        // currency: '$'
      },
      {
        code: 'es-es',
        iso: 'es-ES',
        file: 'es-ES.js',
        name: 'Español',
      },
    ],
    defaultLocale: 'en-us',
    lazy: true,
    langDir: 'lang/',
    seo: false,
    parsePages: false,
    baseUrl: ({ $config }) => $config.i18n.baseUrl,
    vuex: false,
    pages: {
      preview: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      alwaysRedirect: true,
      onlyOnRoot: true,
    },
  },

  ngrok: {
    auth: process.env.NGROK_AUTH || 'nuxt:rocks',
    authtoken: process.env.NGROK_AUTHTOKEN,
    addr: 8080,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
}
