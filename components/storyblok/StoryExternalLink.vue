<template>
  <UtilActionButton v-bind="$attrs">
    <a v-editable="blok" :href="href" rel="noreferrer noopener" target="_blank">
      <slot />
      {{ useLabel ? blok.label : null }}
    </a>
  </UtilActionButton>
</template>

<script>
export default {
  props: {
    blok: {
      default: null,
      required: true,
      type: Object,
    },
    useLabel: {
      default: null,
      required: false,
      type: Boolean,
    },
  },
  computed: {
    href() {
      if (this.blok.to.email && this.blok.to.email !== '') {
        return `mailto:${this.blok.to.email}`
      }

      return this.blok.to.url
    },
  },
}
</script>
