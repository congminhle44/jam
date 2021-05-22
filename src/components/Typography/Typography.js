/** @format */

import { getTag, getStyle } from './utils';

const Typography = ({ children, variant, className, ...others }) => (
  <p
    forwardedas={getTag(variant)}
    style={getStyle(variant)}
    className={className}
    {...others}>
    {children}
  </p>
);

export default Typography;
