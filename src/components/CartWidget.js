import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './css/CartWidget.css';
import { Button} from 'react-bootstrap';

const CartWidget = () => {
    return (
        <div >
            <Button size="lg" variant="primary">5 <FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
    )
}

export default CartWidget