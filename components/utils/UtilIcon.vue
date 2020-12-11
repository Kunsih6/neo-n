<template>
  <component :is="name" v-if="name" />
</template>
<script>
import Github from '~/assets/svg/github.svg?inline'
import Linkedin from '~/assets/svg/linkedin.svg?inline'
import Twitter from '~/assets/svg/twitter.svg?inline'

export default {
  components: {
    Github,
    Linkedin,
    Twitter,
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
