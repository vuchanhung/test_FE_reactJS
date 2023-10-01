import React from 'react'
import './FolderExplore.css'
import { Box1, Building } from 'iconsax-react'

const FolderExplore = () => {
  return (
      <div className='folder--explore'>
            <span className='explore--icons'>
              <span className='box--icon'>
                <Box1 size="40" color="#FFFFFF" variant='Bold'/>
              </span>
              <span className='building--icon'>
                <Building size="40" color="#FFFFFF" variant="Bold"/>
              </span>
            </span>
            <div className='explore--name'>
              <h2>Explore</h2>
            </div>
        </div>
  )
}

export default FolderExplore
