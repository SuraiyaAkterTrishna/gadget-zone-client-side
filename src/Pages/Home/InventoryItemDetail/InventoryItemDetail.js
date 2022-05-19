import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])
    const { name, image, description, price, quantity, supplierName } = item;
    const updateQuantity = item => {
        const newQuantity = (parseInt(item.quantity) - 1).toString();
        if (newQuantity < 0) {
            toast('Stock Empty!!!')
        } else {
            const updateItem = {
                "_id": item._id,
                "name": item.name,
                "image": item.image,
                "description": item.description,
                "price": item.price,
                "quantity": newQuantity,
                "supplierName": item.supplierName
            }
            setItem(updateItem);
            //send data to the server
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
            })
                .then(res => res.json())
                .then(data => {
                    toast('item delivered');
                })
        }

    }
    
  const emailRef = useRef();
    const handleRestock = () =>{

    }
    return (
        <div>
            <h2>Product Detail: {item.name}</h2>
            <div className='text-center'>
                <div className="card mb-3">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">Supplier: {supplierName}</p>
                        <p className="card-text">Price: ${price}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">{description}</p>
                        <Button onClick={() => updateQuantity(item)} className="d-block m-2 mx-auto" variant="primary">
                            Delivered
                        </Button>
                        <Form onSubmit={handleRestock} className="w-50 mx-auto">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Restock</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter restock quantity" required />
                            </Form.Group>
                            <Button className="w-50 d-block m-2 mx-auto" variant="primary" type="submit">
                                Restock
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemDetail;