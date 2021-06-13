/** @format */
import Footer from '../components/Footer';

import Header from '../components/Header';

const ClientLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {window.location.pathname !== '/cart/checkout' && <Footer />}
    </div>
  );
};

export default ClientLayout;
