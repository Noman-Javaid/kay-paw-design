import React from 'react'

const Sidebar = ({ setPage, activePage }) => {
  return (
    <div className="w-64 border-r border-neutral-6 h-screen p-4">
      <div className="flex justify-center items-center mb-8">
        <span className="text-3xl font-pacifico text-darkBlue">KayPaw</span>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <button
              onClick={() => setPage('dashboard')}
              className={`flex items-center w-full text-left p-2 rounded ${activePage === 'dashboard' ? 'bg-darkBlue bg-opacity-10 text-darkBlue' : 'text-neutral-3'} hover:bg-blue-50`}
            >
              <i className="fa-solid fa-grip fa-lg mr-2"></i> Dashboard
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setPage('postListing')}
              className={`flex items-center w-full text-left p-2 rounded ${activePage === 'postListing' ? 'bg-darkBlue bg-opacity-10 text-darkBlue' : 'text-neutral-3'} hover:bg-blue-50`}
            >
              <i className="fas fa-map-marker-alt mr-2"></i> Post Listing
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setPage('myProperties')}
              className={`flex items-center w-full text-left p-2 rounded ${activePage === 'myProperties' ? 'bg-darkBlue bg-opacity-10 text-darkBlue' : 'text-neutral-3'} hover:bg-blue-50`}
            >
              <i className="fas fa-home mr-2"></i> My Properties
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setPage('savedHomes')}
              className={`flex items-center w-full text-left p-2 rounded ${activePage === 'savedHomes' ? 'bg-darkBlue bg-opacity-10 text-darkBlue' : 'text-neutral-3'} hover:bg-blue-50`}
            >
              <i className="fa-regular fa-heart mr-2"></i> Saved Homes
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setPage('manageTours')}
              className={`flex items-center w-full text-left p-2 rounded ${activePage === 'manageTours' ? 'bg-darkBlue bg-opacity-10 text-darkBlue' : 'text-neutral-3'} hover:bg-blue-50`}
            >
              <i className="fas fa-map-marker-alt mr-2"></i> Manage Tours
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setPage('profile')}
              className={`flex items-center w-full text-left p-2 rounded ${activePage === 'profile' ? 'bg-darkBlue bg-opacity-10 text-darkBlue' : 'text-neutral-3'} hover:bg-blue-50`}
            >
              <i className="fa-regular fa-user mr-2"></i> Profile
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;
