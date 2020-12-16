module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        layout: `linear-gradient(
                  to top,
                  rgba(7, 11, 35, 1) 0%,
                  rgba(7, 11, 35, 0.8) 35%,
                  rgba(7, 11, 35, 0.5) 65%,
                  rgba(7, 11, 35, 0.25) 100%),
                 url('~@/assets/images/neon-bg.jpg')`,
      }),
      colors: {
        bg: '#070b23',
        primary: {
          DEFAULT: '#0ae5cc',
          dark: '#34267d',
        },
        secondary: {
          DEFAULT: '#f83a92',
          dark: '#9e30cc',
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
      },
      fontFamily: {
        sans: ['george_rounded', 'ui-sans-serif', 'system-ui'],
        serif: ['george_rounded', 'ui-serif', 'Georgia'],
        mono: ['george_rounded', 'ui-monospace', 'SFMono-Regular'],
        logo: ['omicron'],
      },
      fontSize: {
        '9xl': '31.952rem',
        '8xl': '22.597rem',
        '7xl': '15.981rem',
        '6xl': '11.302rem',
        '5xl': '7.993rem',
        '4xl': '5.653rem',
        '3xl': '3.998rem',
        '2xl': '2.827rem',
        xl: '1.999rem',
        lg: '1.414rem',
        base: '1rem',
        tiny: '0.707rem',
        sm: '0.5rem',
        xs: '0.354rem',
      },
      letterSpacing: {
        logo: '0.36em',
      },
      height: {
        120: '120%',
      },
      minWidth: {
        'button-decorator': '4rem',
      },
      padding: {
        '16/9': '56.25%',
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2400px',
        '5xl': '3200px',
      },
      translate: {
        '-1/10': '-10%',
        '1/10': '10%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
}
