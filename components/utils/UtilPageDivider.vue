<template>
  <div class="page-divider">
    <div class="page-divider__decorator" />

    <svg
      class="page-divider__middle"
      width="55.96476"
      height="55.890594"
      viewBox="0 0 55.964759 55.890594"
    >
      <defs>
        <linearGradient
          id="page-divider-gradient"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop82" stop-color="#34267d" offset="0" />
          <stop id="stop84" stop-color="#0ae5cc" offset="1" />
        </linearGradient>
      </defs>
      <g
        id="Grupo_43"
        data-name="Grupo 43"
        transform="translate(2.0882296,1.9954493)"
      >
        <path
          id="poly-1"
          data-name="Polígono 148"
          d="M -0.02298271,30.047587 12.594515,22.860341 25.145762,30.160943 25.080515,44.647796 12.464017,51.835047 -0.08822958,44.53444 Z"
          fill="url(#page-divider-gradient)"
        />
        <path
          id="poly-2"
          data-name="Polígono 149"
          d="M 13.450203,7.1917966 26.067701,0.00455069 38.618948,7.3051533 38.553701,21.792006 25.937203,28.979257 13.384956,21.67865 Z"
          fill="url(#page-divider-gradient)"
        />
        <path
          id="poly-3"
          data-name="Polígono 150"
          d="m 26.707785,30.107685 12.617498,-7.187246 12.551246,7.300603 -0.06525,14.486853 -12.616498,7.18725 -12.552247,-7.300607 z"
          fill="url(#page-divider-gradient)"
        />
      </g>
    </svg>

    <div class="page-divider__decorator page-divider__decorator--reverse" />
  </div>
</template>

<style lang="postcss" scoped>
.page-divider {
  @apply flex items-center justify-between overflow-hidden w-screen;

  &__decorator {
    @apply bg-gradient-to-r from-secondary-dark via-primary to-secondary-dark h-6 overflow-hidden w-3/12;

    background-size: 400% 100%;
    animation: gradientTransition 4s infinite linear forwards;
    clip-path: polygon(
      0% 0%,
      15% 0%,
      16% 20%,
      100% 20%,
      100% 80%,
      16% 80%,
      15% 100%,
      0% 100%
    );

    &--reverse {
      @apply transform rotate-180;
    }
  }

  &__middle {
    @apply h-16 md:h-24;
  }
}

@keyframes gradientTransition {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 133% 0;
  }
}

#poly-1 {
  animation: hexagon1 8s infinite ease-in-out forwards;
}

@keyframes hexagon1 {
  25% {
    transform: translate(-4%, 4%);
  }
  100% {
    transform: translate(0);
  }
}

#poly-2 {
  animation: hexagon2 8s infinite ease-in-out forwards;
}

@keyframes hexagon2 {
  50% {
    transform: translate(0%, -4%);
  }
  100% {
    transform: translate(0);
  }
}

#poly-3 {
  animation: hexagon3 8s infinite ease-in-out forwards;
}

@keyframes hexagon3 {
  75% {
    transform: translate(4%, 4%);
  }
  100% {
    transform: translate(0);
  }
}
</style>
