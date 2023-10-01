import React from 'react'
import './FolderProfile.css'
import { Additem, InfoCircle, FavoriteChart, People } from 'iconsax-react'

const FolderProfile = () => {
    return (
        <div className='folder--profile'>
            <div className='profile--icons'>
                <div className='icons--on--top'>
                    <div className='additem--icon'>
                        <Additem size="40" color="#FFFFFF" variant="Bold" />
                    </div>
                    <div className='infocircle--icon'>
                        <InfoCircle size="40" color="#FFFFFF" variant='Bold' />
                    </div>
                </div>
                <div className='icons--on--bottom'>
                    <div className='favorchart--icon'>
                        <FavoriteChart size="40" color="#FFFFFF" variant="Bold" />
                    </div>
                    <div className='people--icon'>
                        <People size="40" color="#FFFFFF" variant="Bold" />
                    </div>
                </div>
            </div>
            <span className='profile--name'>
                <p>Profiles</p>
            </span>
        </div>
    )
}

export default FolderProfile
