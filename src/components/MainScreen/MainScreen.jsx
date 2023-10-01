import React from 'react'
import './MainScreen.css'
import FolderExplore from '../FolderExplore/FolderExplore'

const MainScreen = () => {
  return (
    <>
      <div className='folder--container'>
        <div className='folder--on--top'>
          <FolderExplore/>
          <div className='folder--profile'>
          </div>
          <div className='folder--store'>
          </div>
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
