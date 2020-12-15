<template>
  <component :is="name + '-icon'" v-if="name" />
</template>
<script>
import GitIcon from '~/assets/svg/git.svg?inline'
import GithubIcon from '~/assets/svg/github.svg?inline'
import LinkedinIcon from '~/assets/svg/linkedin.svg?inline'
import NuxtjsIcon from '~/assets/svg/nuxt.svg?inline'
import TailwindcssIcon from '~/assets/svg/tailwindcss.svg?inline'
import TwitterIcon from '~/assets/svg/twitter.svg?inline'
import VuejsIcon from '~/assets/svg/vue.svg?inline'
import VuetifyIcon from '~/assets/svg/vuetify.svg?inline'

export default {
  components: {
    GitIcon,
    GithubIcon,
    LinkedinIcon,
    NuxtjsIcon,
    TailwindcssIcon,
    TwitterIcon,
    VuejsIcon,
    VuetifyIcon,
  },
  props: {
    name: {
      default: null,
      required: true,
      type: String,
    },
  },
}
</script>
