import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
    },[id])
    return (
        <div>
            <h2>Product Detail: {id}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryItemDetail;