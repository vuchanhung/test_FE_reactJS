import React from 'react'
import { Message } from 'iconsax-react'
import './FolderMessage.css'
const FolderDeveloper = () => {
    return (
        <div className='folder--message'>
            <div className='message--icon'>
                <div className='message--icon--ontop'>
                    <Message size="90" color="#FFFFFF" variant="Bold" />
                </div>
            </div>
            <span className='message--name'>
                <p>Message</p>
            </span>
        </div>
    )
}

export default FolderDeveloper
