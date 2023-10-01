import React from 'react'
import './MainScreen.css'
import FolderStore from '../FolderStore/FolderStore'
import FolderExplore from '../FolderExplore/FolderExplore'
import FolderProfile from '../FolderProfile/FolderProfile'

const MainScreen = () => {
  return (
    <>
      <div className='folder--container'>
        <div className='folder--on--top'>
          <FolderExplore />
          <FolderProfile/>
          <FolderStore/>
        </div>
      </div>

      <div className='folder--on--bottom'>
        <div className='folder--developer'>

        </div>
        <div className='folder--message'>

        </div>
        <div className='folder--logout'>

        </div>
      </div>
    </>

  )
}

export default MainScreen
