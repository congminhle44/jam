/** @format */

import { TypographyVariants } from '@/components/Typography';
import { ButtonSizes } from '../sizes';

const getFontSize = (size) => {
  switch (size) {
    case ButtonSizes.Small:
      return TypographyVariants.Body2;
    case ButtonSizes.Standard:
      return TypographyVariants.Body2;
    case ButtonSizes.Large:
      return TypographyVariants.H6;
    case ButtonSizes.Huge:
      return TypographyVariants.H5;
    default:
      return 'p';
  }
};

export default getFontSize;
