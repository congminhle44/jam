/** @format */
import { useEffect } from 'react';
import tawkTo from 'tawkto-react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const ClientLayout = ({ children }) => {
  const tawkToPropertyId = '60111887c31c9117cb72e68c';
  const tawkToKey = '1et1cfl5v';

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  return (
    <div>
      <Header />
      {children}
      {window.location.pathname !== '/cart/checkout' && <Footer />}
    </div>
  );
};

export default ClientLayout;
