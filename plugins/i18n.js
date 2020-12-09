/**
 * * Most of the time it will run on both sides (server and client) because some packages must be loaded with the current language. Example moment.js or vee validate
 * You can use this plugin to handel all packages languages
 * @param context Nuxt context
 */

let currentLocale = null

function getCurrentLocale(code, locales) {
  return locales.find((l) => l.code === code)
}

export default function ({ app, store }, inject) {
  currentLocale = getCurrentLocale(app.i18n.locale, app.i18n.locales)

  // Called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    currentLocale = getCurrentLocale(newLocale, app.i18n.locales)
  }

  // Called right after a new locale has benn set
  // app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
  // }

  // Current locale object, not just the code, available everywhere using $currentLocale()
  inject('currentLocale', () => currentLocale)
}
