import React, { useState } from 'react';
import DashboardHeader from '../Layouts/DashboardHeader';
import Folder from './Folder'
import { folderData } from './Constants';

const OrganizeNow = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [folders, setFolders] = useState(folderData);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDelete = () => {
    const newFolders = deleteSelectedItems(folders, selectedItems);
    setFolders(newFolders);
    setSelectedItems([]);
  };

  const deleteItem = (itemName) => {
    const newFolders = deleteSelectedItem(folders, itemName);
    setFolders(newFolders);
  };

  const deleteSelectedItems = (folders, selected) => {
    return folders.reduce((acc, folder) => {
      if (selected.includes(folder.name)) {
        return acc; // Skip this folder if it's selected for deletion
      }
      const newChildren = folder.children ? deleteSelectedItems(folder.children, selected) : [];
      if (newChildren.length > 0 || !selected.includes(folder.name)) {
        acc.push({ ...folder, children: newChildren });
      }
      return acc;
    }, []);
  };

  const deleteSelectedItem = (folders, itemName) => {
    return folders.reduce((acc, folder) => {
      if (folder.name === itemName) {
        return acc; // Skip this folder if it's selected for deletion
      }
      const newChildren = folder.children ? deleteSelectedItem(folder.children, itemName) : [];
      if (newChildren.length > 0 || folder.name !== itemName) {
        acc.push({ ...folder, children: newChildren });
      }
      return acc;
    }, []);
  };


  return (
    <div className='flex flex-col'>
      <div className='sticky top-0 z-20'>
        <DashboardHeader />
      </div>
      <div className="flex flex-col px-8 py-6 gap-5" style={{ fontFamily: "inter" }}>
        <div className="flex justify-end gap-4 font-medium">
          <button className="flex items-center gap-2 bg-white border border-LightGray text-Charcoal p-3 rounded-lg   hover:bg-AliceBlue">
            <img src='FolderFairy/OrganizeNow/refresh.svg' className="fas fa-sync-alt" />
            <span>Re-Run</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-LightGray text-Charcoal p-3 rounded-lg hover:bg-AliceBlue">
            <img src='FolderFairy/OrganizeNow/darkPlus.svg' />
            <span>Create a rule for deletion</span>
          </button>
          <button className="flex items-center gap-2 bg-BlueViolet text-white p-3 rounded-lg hover:bg-opacity-90" onClick={handleDelete} disabled={selectedItems.length === 0}>
            <img src='FolderFairy/OrganizeNow/plus.svg' />
            <span>Delete All Files</span>
          </button>
        </div>

        <div className='border border-LightGray rounded-xl'>
          <div className='grid grid-cols-12 gap-2 w-full bg-WhiteSmoke border-b rounded-t-xl p-4 text-sm font-normal text-Charcoal'>
            <div className='flex col-span-5 gap-2'>
              <img src='FolderFairy/OrganizeNow/darkPlus.svg' />
              <span>Folders</span>
            </div>
            <div className='col-span-2'>
              Date Created
            </div>
            <div className='col-span-2'>
              Date Modified
            </div>
            <div className='col-span-2'>
              File Size
            </div>
            <div className='col-span-1'></div>
          </div>
          <div className="bg-white rounded-b-xl rounded-lg">
            <div className="flex flex-col gap-4 p-4">
              {folders.map((folder, index) => (
                <Folder
                  key={index}
                  folder={folder}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  deleteItem={deleteItem}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              ))}
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default OrganizeNow;
