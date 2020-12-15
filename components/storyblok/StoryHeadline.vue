<template>
  <span v-if="blok" v-editable="blok">{{ blok.content }}</span>
</template>

<script>
export default {
  props: {
    blok: {
      default: null,
      required: true,
      type: Object,
    },
  },
}
</script>
