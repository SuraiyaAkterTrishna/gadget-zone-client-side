import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, FormControl, InputGroup, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
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
                    toast('item delivered Successfully!!!');
                })
        }

    }

    const restockRef = useRef();
    const handleRestock = (event) => {
        event.preventDefault();
        const restock = restockRef.current.value;
        const newQuantity = parseInt(restock) + parseInt(item.quantity);
        console.log(newQuantity);
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
                toast('Item Restock Successfully!!!');
                event.target.reset();
            })
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

                        <Stack className="w-50 mx-auto" direction="horizontal" gap={5}>
                            <Form onSubmit={handleRestock} >
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control ref={restockRef} type="text" placeholder="Enter restock quantity" required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Restock
                                    </Button>
                                </Stack>
                            </Form>
                            <Stack direction="horizontal" gap={3}>
                                <Button onClick={() => updateQuantity(item)} variant="primary">
                                    Delivered
                                </Button>
                                <Link to='/manage-inventories'><button className='btn btn-primary'>Manage Inventories</button></Link>
                            </Stack>
                        </Stack>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default InventoryItemDetail;