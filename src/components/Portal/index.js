/** @format */

import { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({
  children,
  mount,
  appendInTag = 'body',
  portalDataName = 'portal-gate',
  portalElementTag = 'div',
}) => {
  const [portal, setPortal] = useState();

  const createPortal = useCallback(() => {
    const newPortal = document.createElement(portalElementTag);
    newPortal.setAttribute('data-portal', portalDataName);

    document.getElementsByTagName(appendInTag)[0].appendChild(newPortal);

    setPortal(newPortal);
  }, [appendInTag, portalDataName, portalElementTag]);

  const clearPortal = useCallback(() => {
    if (portal && portal.parentNode) {
      portal.parentNode.removeChild(portal);
    }
  }, [portal]);

  useEffect(() => {
    if (mount) {
      createPortal();
    }

    return () => {
      clearPortal();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mount]);

  return portal ? ReactDOM.createPortal(children, portal) : null;
};

export default Portal;
