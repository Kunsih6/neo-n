<template>
  <svg
    :class="{ 'mobile-nav-trigger--open': model }"
    class="mobile-nav-trigger"
    width="53.714001"
    height="52.998001"
    viewBox="0 0 53.713999 52.998"
    @click="model = !model"
  >
    <defs>
      <linearGradient id="menu-trigger-gradient" gradientUnits="userSpaceOnUse">
        <stop id="stop28" offset="0" stop-color="#34267d" />
        <stop id="stop30" offset="1" stop-color="#0ae5cc" />
      </linearGradient>
    </defs>
    <g>
      <path
        class="mobile-nav-trigger__path"
        d="m 14.978336,17.932336 4.986,8.589 -4.986,8.589 H 5.0073362 l -4.98600001,-8.589 4.98600001,-8.589 z"
        fill="url(#menu-trigger-gradient)"
      />
      <path
        class="mobile-nav-trigger__path"
        d="m 48.749336,17.932336 4.986,8.589 -4.986,8.589 h -9.971 l -4.986,-8.589 4.986,-8.589 z"
        fill="url(#menu-trigger-gradient)"
      />
      <path
        class="mobile-nav-trigger__path mobile-nav-trigger__path--bottom"
        d="m 31.807336,27.842336 4.986,8.589 -4.986,8.589 h -9.971 l -4.986,-8.589 4.986,-8.589 z"
        fill="url(#menu-trigger-gradient)"
      />
      <path
        class="mobile-nav-trigger__path mobile-nav-trigger__path--top"
        d="m 31.807336,8.0223362 4.986,8.5889998 -4.986,8.589 h -9.971 l -4.986,-8.589 4.986,-8.5889998 z"
        fill="url(#menu-trigger-gradient)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    value: {
      default: false,
      required: true,
      type: Boolean,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>
<style lang="postcss" scoped>
.mobile-nav-trigger {
  @apply w-24;

  &__path {
    @apply transition-all duration-150 ease-in-out;
  }

  &--open &__path--top {
    @apply transform -translate-y-1/10;
  }

  &--open &__path--bottom {
    @apply transform translate-y-1/10;
  }
}
</style>
