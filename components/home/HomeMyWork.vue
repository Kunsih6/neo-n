<template>
  <section class="my-work">
    <div class="my-work__container">
      <h2>{{ $t('myWork.title') }}</h2>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.my-work {
  @apply flex items-center justify-center;

  &__container {
    @apply container flex items-center justify-center mx-auto;
  }
}
</style>
