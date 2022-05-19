import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ( { inventoryItem } ) => {
    const { _id, name, image, description, price, quantity, supplierName } = inventoryItem;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`inventory-item/${id}`);
    }
    return (
            <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
                <div className='card'>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Supplier: {supplierName}</p>
                        <p className="card-text">Price: ${price}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text"><small className="text-muted">{description}</small></p>
                        <button onClick={() => navigateToServiceDetail(_id)} className="service-btn">Update</button>
                    </div>
                </div>
            </div>
    );
};

export default InventoryItem;