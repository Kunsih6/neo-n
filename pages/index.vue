<template>
  <main class="home">
    <HomeHero />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Kunsih',
    }
  },
}
</script>
<style lang="postcss" scoped>
.home {
  &__section {
    @apply py-32;
  }
}
</style>
