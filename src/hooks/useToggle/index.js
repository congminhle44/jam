/** @format */

import { useState, useCallback, useMemo } from 'react';

const useToggle = (defaultState = false) => {
  const [active, setIsActive] = useState(defaultState);

  const setActive = useCallback(() => {
    setIsActive(true);
  }, []);

  const setInActive = useCallback(() => {
    setIsActive(false);
  }, []);

  const toggle = useCallback(
    (state) => {
      setIsActive('boolean' === typeof state ? state : !active);
    },
    [active]
  );

  return useMemo(() => {
    return {
      active,
      setActive,
      setInActive,
      toggle,
    };
  }, [active, setActive, setInActive, toggle]);
};

export default useToggle;
