import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryItemDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Welcome to Detail: {id}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryItemDetail;