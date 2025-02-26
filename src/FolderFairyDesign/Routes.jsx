import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import OrganizeNow from './Pages/OrganizeNow';
import Rules from './Pages/Rules';
import DataSources from './Pages/DataSources';
import UnorganizedFiles from './Pages/UnorganizedFiles';
import ReviewForDeletion from './Pages/ReviewForDeletion';
import HelpAndTutorials from './Pages/Help&Tutorials';
import Settings from './Pages/Settings';

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/OrganizeNow" element={<OrganizeNow />} />
      <Route path="/Rules" element={<Rules />} />
      <Route path="/DataSources" element={<DataSources />} />
      <Route path="/UnorganizedFiles" element={<UnorganizedFiles />} />
      <Route path="/ReviewForDeletion" element={<ReviewForDeletion />} />
      <Route path="/HelpAndTutorials" element={<HelpAndTutorials />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
  )
}

export default PagesRoutes;
