<template>
  <div class="error">
    <div class="error__container">
      <h1 class="mb-8">{{ error.statusCode }}</h1>
      <h2 v-if="error.statusCode === 404">{{ $t('error.404') }}</h2>
      <h2 v-else>{{ $t('error.generic') }}</h2>
      <UtilActionButton class="mt-16">
        <NuxtLink :to="localePath({ name: index })">
          {{ $t('action.backToHome') }}
        </NuxtLink>
      </UtilActionButton>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      default: () => ({}),
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="postcss" scoped>
.error {
  &__container {
    @apply container flex flex-col items-center justify-center max-w-4xl min-h-screen mx-auto text-center;
  }
}
</style>
