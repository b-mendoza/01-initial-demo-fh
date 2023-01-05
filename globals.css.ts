import { globalStyle } from '@vanilla-extract/css';

const globalStyles: Record<string, Parameters<typeof globalStyle>[1]> = {
  html: {
    fontSize: '62.5%',
    boxSizing: 'border-box',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  body: {
    fontSize: '1.6rem',
    minHeight: '100vh',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

Object.entries(globalStyles).forEach((definedGlobalStyle) => {
  const [selector, styles] = definedGlobalStyle;

  globalStyle(selector, styles);
});
