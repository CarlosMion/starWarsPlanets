import { DefaultTheme } from 'styled-components';

import { colors } from './colors';

export const LightTheme: DefaultTheme = {
  colors: {
    ...colors,
    // skeleton
    skeletonBackground: '#EBEDF0',
    skeletonForeground: '#F0F3F8',
  },
  animation: {
    slow: '0.6s',
    normal: '0.3s',
    fast: '0.2s',
  },
};
