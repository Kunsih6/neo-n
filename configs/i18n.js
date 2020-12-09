// I18n moduel configuration (https://i18n.nuxtjs.org/)
export default {
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
}
