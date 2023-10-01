import React, { useState }  from 'react'
import './FolderExplore.css'
import { Box1, Building } from 'iconsax-react'
import { Button } from 'reactstrap'
import { Transition } from 'react-transition-group';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogContent from '@mui/joy/DialogContent';
const FolderExplore = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='folder--explore' >
      <Button className='primary--btn btn'  onClick={() => setOpen(true)}>
        <div className='explore--icons'>
          <div className='box--icon'>
            <Box1 size="40" color="#FFFFFF" variant='Bold' />
          </div>
          <div className='building--icon'>
            <Building size="40" color="#FFFFFF" variant="Bold" />
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
                                <div style={{
                                    display: 'flex',
                                    gap:'50px'
                                }}>
                                  <div className='popup--icon--container'>
                                    <div className='inside--popup--icon'>
                                      <div className='popup--icon--1'>
                                        <Box1 size="80" color="#FFFFFF" variant='Bold' />
                                      </div>
                                    </div>
                                    <span className='secondary--text'>
                                      <p style={{color:'#fff'}}>Product Category</p>
                                    </span>
                                  </div>                 
                                  <div className='popup--icon--container'>
                                    <div className='inside--popup--icon'>
                                      <div className='popup--icon--1'>
                                        <Building size="80" color="#FFFFFF" variant='Bold' />
                                      </div>                                     
                                    </div>  
                                    <span className='secondary--text'>
                                        <p style={{color:'#fff'}}>Company</p>
                                    </span>           
                                  </div>           
                              </div>
                            </DialogContent>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>
      <span className='explore--name'>
        <p>Explore</p>
      </span>
    </div>
  )
}

export default FolderExplore
