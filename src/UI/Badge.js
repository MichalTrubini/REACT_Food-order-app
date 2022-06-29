import React, { useContext } from 'react';

import cartContext from '../Store/cart-context';
import './Badge.css'

const Badge = () => {
    const cartCtx= useContext(cartContext);

    const numberOfCartItems = cartCtx.items.reduce((curItem, item) => {
        return curItem + item.amount;
    }, 0);

    return <div className='badge'>{numberOfCartItems}</div>;
}

export default Badge;