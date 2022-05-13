import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ( { inventoryItem } ) => {
    const { name, img, id, description, price } = inventoryItem;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`inventory-item/${id}`);
    }
    return (
            <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
                <div className='card'>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Price: ${price}</p>
                        <p className="card-text"><small className="text-muted">{description}</small></p>
                        <button onClick={() => navigateToServiceDetail(id)} className="service-btn">{name}</button>
                    </div>
                </div>
            </div>
    );
};

export default InventoryItem;