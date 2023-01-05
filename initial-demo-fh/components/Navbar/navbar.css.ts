import { style } from '@vanilla-extract/css';

export const listItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: '2rem',
    },
  },
});
