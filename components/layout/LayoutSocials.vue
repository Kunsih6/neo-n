<template>
  <ul class="layout-socials">
    <li>
      <a href="#">
        <UtilIcon class="layout-socials__icon" name="twitter" />
      </a>
    </li>
    <li>
      <a href="#">
        <UtilIcon class="layout-socials__icon" name="github" />
      </a>
    </li>
    <li>
      <a href="#">
        <UtilIcon class="layout-socials__icon" name="linkedin" />
      </a>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.layout-socials {
  @apply flex justify-center items-center;

  > *:not(:last-child) {
    @apply mr-24;
  }

  &__icon {
    @apply fill-current text-white transition-all duration-150;
  }
}

@screen lg {
  .layout-socials {
    > *:not(:last-child) {
      @apply mr-6;
    }

    &__icon {
      @apply w-5;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .layout-socials {
    &__icon {
      @apply opacity-75;

      &:hover {
        @apply opacity-100;
      }
    }
  }
}
</style>
