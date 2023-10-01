import React, { useState } from 'react'
import { ShoppingCart, ChartSquare, TicketDiscount } from 'iconsax-react'
import { Transition } from 'react-transition-group';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogContent from '@mui/joy/DialogContent';
import { Button } from 'reactstrap'
import './FolderStore.css'

const FolderStore = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='folder--store'>
            <Button className='primary--btn btn' onClick={() => setOpen(true)}>
                <div className='store--icons'>
                    <div className='icons--on--top'>
                        <div className='shoppingcart--icon'>
                            <ShoppingCart size="40" color="#FFFFFF" variant="Bold" />
                        </div>
                        <div className='chartsquare--icon'>
                            <ChartSquare size="40" color="#FFFFFF" variant='Bold' />
                        </div>
                    </div>
                    <div className='icons--on--bottom'>
                        <div className='ticketdiscount--icon'>
                            <TicketDiscount size="40" color="#FFFFFF" variant="Bold" />
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
                                backdropFilter: 'blur(40px)'
                            }}
                        >
                            <DialogContent >
                                <div className='dialog--style'>
                                    <div className='popup--icon--container'>
                                        <div className='inside--popup--icon'>
                                            <div className='popup--icon--1'>
                                                <ShoppingCart size="80" color="#FFFFFF" variant='Bold' />
                                            </div>
                                        </div>
                                        <span className='secondary--text'>
                                            <p style={{ color: '#fff' }}>Online shop</p>
                                        </span>
                                    </div>
                                    <div className='popup--icon--container'>
                                        <div className='inside--popup--icon'>
                                            <div className='popup--icon--1'>
                                                <ChartSquare size="80" color="#FFFFFF" variant='Bold' />
                                            </div>
                                        </div>
                                        <span className='secondary--text'>
                                            <p style={{ color: '#fff' }}>Product Dashboard</p>
                                        </span>
                                    </div>
                                    <div className='popup--icon--container'>
                                        <div className='inside--popup--icon'>
                                            <div className='popup--icon--1'>
                                                <TicketDiscount size="80" color="#FFFFFF" variant='Bold' />
                                            </div>
                                        </div>
                                        <span className='secondary--text'>
                                            <p style={{ color: '#fff' }}>Offer Dashboard</p>
                                        </span>
                                    </div>
                                </div>
                            </DialogContent>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>
            <span className='store--name'>
                <p>Store</p>
            </span>
        </div>


    )
}

export default FolderStore
