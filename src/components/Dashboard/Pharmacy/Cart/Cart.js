import React from 'react';
import { useSelector } from 'react-redux';
const Cart = () => {
    const cartMedicine = useSelector((state) => state.cart);
    return (
        <>
            <h3>{cartMedicine?.name}</h3>
        </>
    );
};

export default Cart;