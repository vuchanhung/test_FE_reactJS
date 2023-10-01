import React from 'react'
import './FolderExplore.css'
import { Box1, Building } from 'iconsax-react'

const FolderExplore = () => {
  return (
    <div className='folder--explore'>
      <div className='explore--icons'>
        <div className='box--icon'>
          <Box1 size="40" color="#FFFFFF" variant='Bold' />
        </div>
        <div className='building--icon'>
          <Building size="40" color="#FFFFFF" variant="Bold" />
        </div>
      </div>
      <span className='explore--name'>
        <p>Explore</p>
      </span>
    </div>
  )
}

export default FolderExplore
