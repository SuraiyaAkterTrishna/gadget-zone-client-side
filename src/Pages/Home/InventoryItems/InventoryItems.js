import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect( () => {
        fetch('services.json')
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
                        key = {inventoryItem.id}
                    ></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;