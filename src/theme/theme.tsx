import {MantineThemeOverride, rem} from '@mantine/core'

import {tailwindColors} from './tailwindColors'

const theme: MantineThemeOverride = {
  colors: {
    ...tailwindColors,
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  headings: {
    sizes: {
      h1: {fontSize: rem(32)},
      h2: {fontSize: rem(24)},
      h3: {fontSize: rem(19)},
      h4: {fontSize: rem(16)},
      h5: {fontSize: rem(13)},
      h6: {fontSize: rem(11)},
    },
  },
}

export {theme}
