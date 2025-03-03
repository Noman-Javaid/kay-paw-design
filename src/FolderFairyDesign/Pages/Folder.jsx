import React, { useState } from 'react';

const Folder = ({ folder, selectedItems, setSelectedItems, deleteItem, openDropdown, setOpenDropdown, renameItem }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(folder.name);

  const handleSelect = () => {
    if (selectedItems.includes(folder.name)) {
      setSelectedItems(selectedItems.filter(item => item !== folder.name));
    } else {
      setSelectedItems([...selectedItems, folder.name]);
    }
  };

  const handleDelete = () => {
    deleteItem(folder.name);
    setShowDropdown(false);
  };

  const handleRename = () => {
    renameItem(folder.name, newName);
    setIsRenaming(false);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    if (openDropdown === folder.name) {
      setShowDropdown(false);
      setOpenDropdown(null);
    } else {
      setShowDropdown(true);
      setOpenDropdown(folder.name);
    }
  };

  const countFilesAndFolders = (children) => {
    let fileCount = 0;
    let folderCount = 0;

    children.forEach(child => {
      if (child.type === 'file') {
        fileCount++;
      } else if (child.type === 'folder') {
        folderCount++;
      }
    });

    return { fileCount, folderCount };
  };

  const { fileCount, folderCount } = folder.children ? countFilesAndFolders(folder.children) : { fileCount: 0, folderCount: 0 };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-12 items-center gap-2">
        <div className='flex col-span-5 items-center gap-2'>
          <input type="checkbox" checked={selectedItems.includes(folder.name)} onChange={handleSelect} className="form-checkbox" />
          {folder.children ? (
            <img
              src={showChildren ? '/FolderFairy/OrganizeNow/substract.svg' : '/FolderFairy/OrganizeNow/fadePlus.svg'}
              className='cursor-pointer'
              onClick={() => setShowChildren(!showChildren)}
              alt={showChildren ? 'Expand' : 'Collapse'}
            />
          ) : (
            <img src="FolderFairy/OrganizeNow/file.svg" />
          )}
          {isRenaming ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={handleRename}
              className="text-Charcoal text-md font-medium border-LightGray p-1"
              autoFocus
            />
          ) : (
            <div className="text-Charcoal text-md font-medium">{folder.name}</div>
          )}
        </div>

        <div className="col-span-2 text-sm text-DimGray">{folder.dateCreated}</div>
        <div className="col-span-2 text-sm text-DimGray">{folder.dateModified}</div>
        <div className="col-span-2 text-sm text-DimGray">{folder.size}</div>

        <div className="col-span-1 relative">
          <img src='FolderFairy/OrganizeNow/dots.svg' onClick={toggleDropdown} className='cursor-pointer' />
          {showDropdown && (
            <div className="absolute top-8 right-20 z-10 flex flex-col gap-1 bg-white text-Charcoal text-md border border-LightGray rounded-2xl p-2">
              <button onClick={() => { setIsRenaming(true); setShowDropdown(false); }} className="flex justify-between items-center p-2 w-40 rounded-lg hover:bg-AliceBlue">
                <span>Rename</span>
                <img src="FolderFairy/OrganizeNow/edit.svg" />
              </button>
              <button className="flex justify-between items-center p-2 w-40 rounded-lg hover:bg-AliceBlue">
                <span>Preview</span>
                <img src="FolderFairy/OrganizeNow/eye.svg" />
              </button>
              <button onClick={handleDelete} className="flex justify-between items-center p-2 w-40 rounded-lg hover:bg-AliceBlue">
                <span>Delete</span>
                <img src="FolderFairy/OrganizeNow/trash.svg" />
              </button>
            </div>
          )}
        </div>
      </div>
      {folder.type === "folder" && (
        <div className='flex items-center gap-2 text-sm text-Gray ml-11'>
          <div className='flex items-center gap-2 bg-WhiteSmoke border border-LightGray p-2 rounded-md'>
            <img src="FolderFairy/OrganizeNow/folder.svg" />
            <span>{folderCount} Subfolders</span>
          </div>
          <div className='flex items-center gap-2 bg-WhiteSmoke border border-LightGray p-2 rounded-md'>
            <img src="FolderFairy/OrganizeNow/file.svg" />
            <span>{fileCount} Files</span>
          </div>
        </div>
      )}
      {showChildren && folder.children && (
        <div className="flex flex-col gap-2 ml-6">
          {folder.children.map((child, index) => (
            <Folder
              key={index}
              folder={child}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              deleteItem={deleteItem}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              renameItem={renameItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
