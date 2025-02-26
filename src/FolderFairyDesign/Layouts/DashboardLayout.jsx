import React from 'react';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import PagesRoutes from '../Routes';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4">
        <div className='bg-white sticky top-0 z-10 p-2 border-b-[1px] border-LavenderBlue'>
          <DashboardHeader />
        </div>
        <PagesRoutes />
      </div>
    </div>
  )
}

export default DashboardLayout;
