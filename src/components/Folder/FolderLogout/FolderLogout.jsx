import React from 'react'
import {  LogoutCurve } from 'iconsax-react'
import './FolderLogout.css'
const FolderDeveloper = () => {
    return (
        <div className='folder--logout'>
            <div className='logout--icon'>
                <div className='logout--icon--ontop'>
                    <LogoutCurve size="90" color="#FFFFFF" variant="Bold" />
                </div>
            </div>
            <span className='logout--name'>
                <p>Log out</p>
            </span>
        </div>
    )
}

export default FolderDeveloper
