import { DefaultTheme } from 'styled-components';

import { colors } from './colors';

export const LightTheme: DefaultTheme = {
  colors: {
    ...colors,
  },
  animation: {
    slow: '0.6s',
    normal: '0.3s',
    fast: '0.2s',
  },
};
