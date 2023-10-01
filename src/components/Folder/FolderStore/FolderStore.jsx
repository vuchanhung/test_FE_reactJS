import React from 'react'
import { ShoppingCart, ChartSquare, TicketDiscount } from 'iconsax-react'
import {Button} from 'reactstrap'
import './FolderStore.css'



const FolderStore = () => {
    return (
        <div className='folder--store'>
            <Button className='primary--btn btn'>
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
            <span className='store--name'>
                <p>Store</p>
            </span>
        </div>
        
        
    )
}

export default FolderStore
