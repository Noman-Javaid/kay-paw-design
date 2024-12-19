import React from 'react';

const Header = ({pageName}) => (
  <div className="flex justify-between items-center bg-white">
    <h1 className="text-2xl font-bold">{pageName}</h1>
    <div className="flex items-center">
      <button className="border px-4 py-2 rounded-full mr-4"><i className="fas fa-home mr-2"></i>My Properties</button>
      <button className="bg-darkBlue text-white px-6 py-2 rounded-full mr-4"><i className="fas fa-map-marker-alt mr-2"></i>Post Listing</button>
      <i className="fa-regular fa-bell fa-xl"></i>
      <img src="https://placehold.co/40x40" alt="User" className="w-10 h-10 ml-4 rounded-full" />
    </div>
  </div>
);

export default Header;
