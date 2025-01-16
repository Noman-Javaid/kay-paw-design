import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Pages/dashboard/Sidebar';
import Dashboard from './Pages/dashboard/Dashboard';
import PostListing from './Pages/dashboard/PostListing';
import MyProperties from './Pages/dashboard/MyProperties';
import SavedHomes from './Pages/dashboard/SavedHomes';
import ManageTours from './Pages/dashboard/ManageTours';
import Profile from './Pages/dashboard/Profile';
import LandingPage from './Pages/landingPage/LandingPage';
import MapPage from './Pages/MapPage/MapPage';
import PropertyDetail from './Pages/PropertyDetailPage/PropertyDetail';
import Customers from './Pages/Customers/Customers';

const App = () => {
  const [page, setPage] = useState('dashboard');

  return (
    <>
      <Customers />
      {/* <PropertyDetail /> */}
      {/* <MapPage /> */}
      {/* <LandingPage /> */}
    </>
    // <div className="flex min-h-screen">
    //   <div>
    //     <Sidebar setPage={setPage} activePage={page} />
    //   </div>
    //   <div className="flex-grow p-4">
    //     {page === 'dashboard' && <Dashboard />}
    //     {page === 'postListing' && <PostListing />}
    //     {page === 'myProperties' && <MyProperties />}
    //     {page === 'savedHomes' && <SavedHomes />}
    //     {page === 'manageTours' && <ManageTours />}
    //     {page === 'profile' && <Profile />}
    //   </div>
    // </div>
  );
};

export default App;
