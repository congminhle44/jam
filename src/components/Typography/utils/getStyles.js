/** @format */

import { TypographyVariants } from '@/components/Typography';

const getStyle = (type) => {
  switch (type) {
    case TypographyVariants.H1:
      return {
        fontSize: '4.5rem',
        lineHeight: 'calc(102/72)',
        fontWeight: 800,
      };
    case TypographyVariants.H2:
      return {
        fontSize: '4rem',
        lineHeight: 'calc(92/64)',
        fontWeight: 700,
      };
    case TypographyVariants.H3:
      return {
        fontSize: '3rem',
        lineHeight: 'calc(68/48)',
        fontWeight: 700,
      };
    case TypographyVariants.H5:
      return {
        fontSize: '1.5rem',
        lineHeight: 'calc(32/24)',
        fontWeight: 600,
      };
    case TypographyVariants.H6:
      return {
        fontSize: '1.25rem',
        lineHeight: 'calc(26/20)',
        fontWeight: 600,
      };
    case TypographyVariants.Title1:
      return {
        fontSize: '1.125rem',
        lineHeight: 'calc(26/18)',
        fontWeight: 400,
      };
    case TypographyVariants.Title2:
      return {
        fontSize: '1.125rem',
        lineHeight: 'calc(26/18)',
        fontWeight: 800,
      };
    case TypographyVariants.Title3:
      return {
        fontSize: '1.125rem',
        lineHeight: 'calc(26/18)',
        fontWeight: 700,
      };
    case TypographyVariants.Paragraph1:
      return {
        fontSize: '1rem',
        lineHeight: 'calc(20/16)',
        fontWeight: 400,
      };
    case TypographyVariants.Paragraph2:
      return {
        fontSize: '1rem',
        lineHeight: 'calc(20/16)',
        fontWeight: 600,
      };
    case TypographyVariants.Body1:
      return {
        fontSize: '0.9825rem',
        lineHeight: 'calc(21/15)',
        fontWeight: 400,
      };
    case TypographyVariants.Body2:
      return {
        fontSize: '0.9825rem',
        lineHeight: 'calc(21/15)',
        fontWeight: 600,
      };
    case TypographyVariants.Label1:
      return {
        fontSize: '0.75rem',
        lineHeight: 'calc(16/12)',
        fontWeight: 400,
      };
    case TypographyVariants.Label2:
      return {
        fontSize: '0.75rem',
        lineHeight: 'calc(16/12)',
        fontWeight: 600,
      };
    default:
      return {
        fontSize: '0.75rem',
        lineHeight: 'calc(16/12)',
        fontWeight: 400,
      };
  }
};

export default getStyle;
