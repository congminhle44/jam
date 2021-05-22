import { useEffect, useState } from 'react';

const useNetwork = () => {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);

  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('offline', updateNetwork, { passive: true });
    window.addEventListener('online', updateNetwork, { passive: true });

    return () => {
      window.removeEventListener('offline', updateNetwork);
      window.removeEventListener('online', updateNetwork);
    };
  }, []);

  return isOnline;
};

export default useNetwork;
