import React from 'react'

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center pb-4">
      <h1 className="text-2xl font-bold">Create a new rule</h1>
      <div className="flex items-center">
        <img className="mr-4" src='/FolderFairy/HeaderIcons/bell.svg' />
        <div className="flex items-center">
          <img src="https://placehold.co/40x40" alt="User avatar" className="w-10 h-10 rounded-full mr-2" />
          <span className="text-Gray">Amanda</span>
          <img src='/FolderFairy/HeaderIcons/arrowDown.svg' /> 
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader;
