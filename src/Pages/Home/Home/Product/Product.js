import React, { useEffect, useState } from 'react';

const Product = () => {
    const [product, setProduct ] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/product/${_id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[_id
    ])
    return (
        <div>
            
        </div>
    );
};

export default Product;