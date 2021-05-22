/** @format */

import { TypographyVariants } from '@/components/Typography';

const getTag = (type) => {
  switch (type) {
    case TypographyVariants.H1:
      return 'h1';
    case TypographyVariants.H2:
      return 'h2';
    case TypographyVariants.H3:
      return 'h3';
    case TypographyVariants.H4:
      return 'h4';
    case TypographyVariants.H5:
      return 'h5';
    case TypographyVariants.H6:
      return 'h6';
    case TypographyVariants.Title1:
    case TypographyVariants.Title2:
    case TypographyVariants.Title3:
      return 'p';
    case TypographyVariants.Paragraph1:
    case TypographyVariants.Paragraph2:
      return 'p';
    case TypographyVariants.Body1:
    case TypographyVariants.Body2:
      return 'p';
    case TypographyVariants.Label1:
    case TypographyVariants.Label2:
      return 'p';
    default:
      return 'p';
  }
};

export default getTag;
