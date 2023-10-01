import React from 'react'
import { Data } from 'iconsax-react'
import './FolderDeveloper.css'
import { Button } from 'reactstrap'
const FolderDeveloper = () => {
    return (
        <div className='folder--developer' >
            <Button className='primary--btn btn'>
                <div className='developer--icon'>
                    <div className='developer--icon--ontop'>
                        <Data size="90" color="#FFFFFF" variant="Bold" />
                    </div>
                </div>
            </Button>
            <span className='developer--name'>
                <p>Developer</p>
            </span>
        </div>
    )
}

export default FolderDeveloper
