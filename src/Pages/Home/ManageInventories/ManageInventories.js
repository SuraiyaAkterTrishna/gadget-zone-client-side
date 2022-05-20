import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryItems from '../../utilities/useInventoryItems';

const ManageInventories = () => {
    const [inventoryItems, setInventoryItems] = useInventoryItems();
    const handleInventoryDelete = id => {
        const proceed = window.confirm("Are you sure You want to delete this item?")
        if(proceed){
            console.log("deleting id no ",id);
            const url =`http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingItems = inventoryItems.filter(inventoryItem => inventoryItem._id !== id);
                    setInventoryItems(remainingItems);
                    toast('Item Deleted!!!');
                }
            });
        }
    }
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
                                    <div>
                                        <div>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={inventoryItem.image} className="img-fluid rounded-start" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{inventoryItem.name}</h5>
                                                        <p className="card-text">{inventoryItem.description}</p>
                                                        <p className="card-text"><small className="text-muted">Price: ${inventoryItem.price}</small></p>
                                                        <p className="card-text"><small className="text-muted">Quantity: ${inventoryItem.quantity}</small></p>
                                                        <p className="card-text"><small className="text-muted">Supplier Name: ${inventoryItem.supplierName}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-danger' onClick={() => handleInventoryDelete(inventoryItem._id)}>X</button>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                )
            }
            <div className="d-flex flex-row-reverse my-5">
                <Link to='/add-item'><button className='btn btn-primary'>Add New Item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventories;