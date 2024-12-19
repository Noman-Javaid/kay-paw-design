import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Pages/Sidebar';
import Dashboard from './Pages/Dashboard';
import PostListing from './Pages/PostListing';
import MyProperties from './Pages/MyProperties';
import SavedHomes from './Pages/SavedHomes';
import ManageTours from './Pages/ManageTours';
import Profile from './Pages/Profile';

const App = () => {
  const [page, setPage] = useState('dashboard');

  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar setPage={setPage} activePage={page} />
      </div>
      <div className="flex-grow p-4">
        {page === 'dashboard' && <Dashboard />}
        {page === 'postListing' && <PostListing />}
        {page === 'myProperties' && <MyProperties />}
        {page === 'savedHomes' && <SavedHomes />}
        {page === 'manageTours' && <ManageTours />}
        {page === 'profile' && <Profile />}
      </div>
    </div>
  );
};

export default App;
