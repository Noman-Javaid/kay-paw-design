import React from 'react';
import Sidebar from './Sidebar';
import PagesRoutes from '../Routes';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <PagesRoutes />
      </div>
    </div>
  )
}

export default DashboardLayout;
