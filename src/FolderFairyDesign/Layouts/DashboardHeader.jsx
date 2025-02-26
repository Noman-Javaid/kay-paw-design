import React from 'react'
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center py-8 px-6 bg-white border-b-[1px] border-LavenderBlue">
      <div className='flex flex-col'>
        <div className='flex items-center gap-3'>
          <img className='w-6 h-6' src="/FolderFairy/HeaderIcons/folder.svg" />
          <h4 className="text-2xl font-medium">Create a new rule</h4>
        </div>
        <div className='flex items-center gap-3'>
          <div className='w-6 h-6' />
          <div className='flex items-center gap-1'>
            <span className='font-medium'>Data source:</span>
            <Link to="#" className='text-BlueViolet font-semibold border-b-[2px] border-BlueViolet'>Amanda's Computer</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img className='w-6 h-6' src='/FolderFairy/HeaderIcons/bell.svg' />
        <div className="flex items-center gap-2">
          <img src="https://placehold.co/40x40" alt="User avatar" className="w-8 h-8 rounded-full" />
          <span className="text-Gray">Amanda</span>
          <img className='w-4 h-4' src='/FolderFairy/HeaderIcons/arrowDown.svg' />
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader;
