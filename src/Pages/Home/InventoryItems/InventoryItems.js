import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/item')
        .then(res=> res.json())
        .then(data => setInventoryItems(data));
    } , [])
    return (
        <div className="container my-5">
            <h1 className="text-center text-primary">Inventory Items</h1>
            <div className="row">
                {
                    inventoryItems.map(inventoryItem => <InventoryItem
                        inventoryItem = {inventoryItem}
                        key = {inventoryItem._id}
                    ></InventoryItem>)
                }
            </div>
            <div className="d-flex flex-row-reverse my-5">
                <Link to='/manage-item'><button className='btn btn-primary'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
            </div>
        </div>
    );
};

export default InventoryItems;