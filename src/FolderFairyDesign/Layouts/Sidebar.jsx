import React from 'react'
import { Link } from 'react-router-dom';

const links = [
  { to: '/', src: '/FolderFairy/SidebarIcons/dashboard.svg', text: 'Dashboard' },
  { to: '/OrganizeNow', src: '/FolderFairy/SidebarIcons/organizeNow.svg', text: 'Organize Now' },
  { to: '/Rules', src: '/FolderFairy/SidebarIcons/rules.svg', text: 'Rules', badge: '4' },
  { to: '/DataSources', src: '/FolderFairy/SidebarIcons/dataSources.svg', text: 'Data Sources' },
  { to: '/UnorganizedFiles', src: '/FolderFairy/SidebarIcons/unorganizedFiles.svg', text: 'Ungorganized Files', badge: '23' },
  { to: '/ReviewForDeletion', src: '/FolderFairy/SidebarIcons/reviewForDeletion.svg', text: 'Review for Deletion', badge: '345' },
];

const Sidebar = () => {

  return (
    <div className="bg-DarkBlue text-white w-72 p-4 flex flex-col overflow-y-auto" style={{fontFamily: "inter"}}>
      <div className="flex items-center pb-4 border-b-[1px] border-LightGray border-opacity-20">
        <img src="/FolderFairy/SidebarIcons/fileFairy.svg" alt="File Fairy logo" className="w-16 h-10 mr-2" />
        <span className="text-xl font-semibold">File Fairy</span>
      </div>
      <nav className="flex-1 py-4">
        <ul>
          {links.map((link, index) => (
            <li className="mb-2" key={index}>
              <Link to={link.to} className="flex items-center p-2 hover:bg-DarkSlateBlue rounded-md">
                <img className=" mr-2" src={link.src}></img>
                {link.text}
                {link.badge && (
                  <span className="ml-auto bg-Independence text-white rounded-md px-2 py-1 text-xs">
                    {link.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='py-6 px-4 bg-DarkIndigo border border-Lavender border-opacity-20 rounded-lg'>
        <ul>
          <li className="mb-2">
            <Link to="/HelpAndTutorials" className="flex items-center hover:bg-DarkSlateBlue p-2 rounded-md">
              <img className="mr-2" src='/FolderFairy/SidebarIcons/helpTutorials.svg'></img> Help & Tutorials
            </Link>
          </li>
          <li>
            <Link to="/Settings" className="flex items-center hover:bg-DarkSlateBlue p-2 rounded-md">
              <img className="mr-2" src='/FolderFairy/SidebarIcons/settings.svg'></img> Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
