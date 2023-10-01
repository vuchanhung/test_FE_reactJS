import React from 'react'
import './MainScreen.css'
import FolderStore from '../Folder/FolderStore/FolderStore'
import FolderExplore from '../Folder/FolderExplore/FolderExplore'
import FolderProfile from '../Folder/FolderProfile/FolderProfile'
import FolderDeveloper from '../Folder/FolderDeveloper/FolderDeveloper'
import FolderMessage from '../Folder/FolderMessage/FolderMessage'
import FolderLogout from '../Folder/FolderLogout/FolderLogout'
const MainScreen = () => {
  return (
    <>
      <div className='folder--container'>
        <div className='folder--on--top'>
          <FolderExplore />
          <FolderProfile/>
          <FolderStore/>
        </div>
        <div className='folder--on--bottom'>
          <FolderDeveloper/>
          <FolderMessage/>
          <FolderLogout/>
        </div>
      </div>
    </>

  )
}

export default MainScreen
