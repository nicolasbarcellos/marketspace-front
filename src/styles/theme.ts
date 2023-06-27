import { extendTheme } from 'native-base'

const customThemeType = extendTheme({
  colors: {
    blue: {
      700: '#364d9d',
      500: '#647ac7',
    },
    gray: {
      100: '#1A181B',
      200: '#3E3A40',
      300: '#5F5B62',
      400: '#9F9BA1',
      500: '#D9D8DA',
      600: '#EDECEE',
      700: '#F7F7F8',
    },
    white: '#FFFFFF',
    red: {
      500: '#EE7979',
    },
  },

  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})

export default customThemeType
