import React, { useState } from 'react'
import './FolderProfile.css'
import { Button } from 'reactstrap'
import { Transition } from 'react-transition-group';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogContent from '@mui/joy/DialogContent';
import { Additem, InfoCircle, FavoriteChart, People } from 'iconsax-react'

const FolderProfile = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='folder--profile'>
            <Button className='primary--btn btn' onClick={() => setOpen(true)}>
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
            </Button>
            <Transition in={open} timeout={400}>
                {(state) => (
                    <Modal
                        keepMounted
                        open={!['exited', 'exiting'].includes(state)}
                        onClose={() => setOpen(false)}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: 'none',
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                        entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility: state === 'exited' ? 'hidden' : 'visible',
                        }}
                    >
                        <ModalDialog
                            sx={{
                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{
                                    entering: { opacity: 1 },
                                    entered: { opacity: 1 },
                                }[state],
                                backgroundColor: 'rgba(255, 255, 255, 0.40)',
                                border: 'none',
                                borderRadius: '60px',
                                width: '95%',
                                alignItems: 'center',
                                display: 'flex',
                                backdropFilter: 'blur(40px)'

                            }}
                        >
                            <DialogContent >
                                <div className='dialog--style'>
                                    <div className='popup--icon--container'>
                                        <div className='inside--popup--icon'>
                                            <div className='popup--icon--1'>
                                                <Additem size="80" color="#FFFFFF" variant='Bold' />
                                            </div>
                                        </div>
                                        <span className='secondary--text'>
                                            <p style={{ color: '#fff' }}>Add Subscription</p>
                                        </span>
                                    </div>
                                    <div className='popup--icon--container'>
                                        <div className='inside--popup--icon'>
                                            <div className='popup--icon--1'>
                                                <InfoCircle size="80" color="#FFFFFF" variant='Bold' />
                                            </div>
                                        </div>
                                        <span className='secondary--text'>
                                            <p style={{ color: '#fff' }}>Public Information</p>
                                        </span>
                                    </div>
                                    <div className='popup--icon--container'>
                                        <div className='inside--popup--icon'>
                                            <div className='popup--icon--1'>
                                                <FavoriteChart size="80" color="#FFFFFF" variant='Bold' />
                                            </div>
                                        </div>
                                        <span className='secondary--text'>
                                            <p style={{ color: '#fff' }}>Business Information</p>
                                        </span>
                                    </div>
                                    <div className='popup--icon--container'>
                                        <div className='inside--popup--icon'>
                                            <div className='popup--icon--1'>
                                                <People size="80" color="#FFFFFF" variant='Bold' />
                                            </div>
                                        </div>
                                        <span className='secondary--text'>
                                            <p style={{ color: '#fff' }}>Connection</p>
                                        </span>
                                    </div>
                                </div>
                            </DialogContent>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>
            <span className='profile--name'>
                <p>Profiles</p>
            </span>
        </div>
    )
}

export default FolderProfile
