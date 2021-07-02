/** @format */

import Sidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
