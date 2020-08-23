import { theme, DefaultTheme } from '@chakra-ui/core';

export const customTheme: DefaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    cyan: {
      ...theme.colors.cyan,
      500: 'hsl(180, 66%, 49%)',
    },
    purple: {
      ...theme.colors.purple,
      700: 'hsl(257, 7%, 63%)',
      800: 'hsl(257, 27%, 26%)',
      900: 'hsl(260, 8%, 14%)',
    },
    red: {
      ...theme.colors.red,
      500: 'hsl(0, 87%, 67%)',
    },
    blue: {
      ...theme.colors.blue,
      900: 'hsl(255, 11%, 22%)',
    },
    gray: {
      ...theme.colors.gray,
      500: 'hsl(0, 0%, 75%)',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif',
  },
};
