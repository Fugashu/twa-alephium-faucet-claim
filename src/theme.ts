import { createTheme, DEFAULT_THEME } from '@mantine/core';
import '@fonts/Pirulen/Pirulen.css';

export const theme = createTheme({
  colors: {
    'my-orange': [
      '#fff8e1',
      '#ffefcc',
      '#ffdd9b',
      '#ffca64',
      '#ffba38',
      '#ffb01b',
      '#ffab09',
      '#e39500',
      '#ca8500',
      '#af7100',
    ],
  },
  white: '#fff',
  black: '#000',
  defaultRadius: 'sm',
  primaryColor: 'my-orange',

  headings: {
    fontFamily: `Pirulen, ${DEFAULT_THEME.fontFamily}`,
  },
});
