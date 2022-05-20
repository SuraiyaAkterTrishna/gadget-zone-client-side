import React from 'react';
import { ListGroup } from 'react-bootstrap';
import useInventoryItems from '../../utilities/useInventoryItems';

const ManageInventories = () => {
    const [inventoryItems] = useInventoryItems();
    const handleDelete = () => { }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Inventory Items</h2>
            {
                inventoryItems.map(inventoryItem =>
                    <div className='mb-3' key={inventoryItem._id}>
                        <ListGroup as="ul">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{inventoryItem.name}</div>
                                    <img className='w-25' src={inventoryItem.image} alt="" />
                                    <p>{inventoryItem.description}</p>
                                </div>
                                <button className='btn btn-danger' onClick={() => handleDelete(inventoryItem._id)}>X</button>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                )
            }
        </div>
    );
};

export default ManageInventories;