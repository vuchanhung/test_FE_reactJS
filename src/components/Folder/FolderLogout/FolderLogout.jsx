import React from 'react'
import { LogoutCurve } from 'iconsax-react'
import './FolderLogout.css'
import { Button } from 'reactstrap'
const FolderDeveloper = () => {
    return (
        <div className='folder--logout'>
            <Button className='primary--btn btn'>
                <div className='logout--icon'>
                    <div className='logout--icon--ontop'>
                        <LogoutCurve size="90" color="#FFFFFF" variant="Bold" />
                    </div>
                </div>
            </Button>
            <span className='logout--name'>
                <p>Log out</p>
            </span>
        </div>
    )
}

export default FolderDeveloper
