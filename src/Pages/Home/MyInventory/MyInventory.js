import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyInventory = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect( () =>{
        const getItems = async() =>{
            const email = user.email;
            const url = `https://sleepy-falls-76816.herokuapp.com/my-item?email=${email}`;
            const {data} = await axios.get(url);
            setMyItems(data);
        }
        getItems();
    },[user]);
    const handleInventoryDelete = id =>{
        const proceed = window.confirm("Are you sure You want to delete this item?")
        if(proceed){
            const url =`https://sleepy-falls-76816.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingItems = myItems.filter(inventoryItem => inventoryItem._id !== id);
                    setMyItems(remainingItems);
                    toast('Item Deleted!!!');
                }
            });
        }
    }
    return (
        <div className='col-md-6 mx-auto'>
            {
                myItems.map(myItem =>
                    <div className='mb-3' key={myItem._id}>
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
                                                    <img src={myItem.image} className="img-fluid rounded-start" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{myItem.name}</h5>
                                                        <p className="card-text">{myItem.description}</p>
                                                        <p className="card-text"><small className="text-muted">Price: ${myItem.price}</small></p>
                                                        <p className="card-text"><small className="text-muted">Quantity: {myItem.quantity}</small></p>
                                                        <p className="card-text"><small className="text-muted">Supplier Name: {myItem.supplierName}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-danger m-2' onClick={() => handleInventoryDelete(myItem._id)}>X</button>
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

export default MyInventory;