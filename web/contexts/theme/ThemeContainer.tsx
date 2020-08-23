import React from 'react';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;
