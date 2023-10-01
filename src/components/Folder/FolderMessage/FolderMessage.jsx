import React from 'react'
import { Message } from 'iconsax-react'
import './FolderMessage.css'
import {Button} from 'reactstrap'
const FolderDeveloper = () => {
    return (
        <div className='folder--message'>
            <Button className='primary--btn btn'>
                <div className='message--icon'>
                    <div className='message--icon--ontop'>
                        <Message size="90" color="#FFFFFF" variant="Bold" />
                    </div>
                </div>
            </Button>
            <span className='message--name'>
                <p>Message</p>
            </span>
        </div>
    )
}

export default FolderDeveloper
