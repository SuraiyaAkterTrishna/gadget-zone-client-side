import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const nameRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const supplierNameRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = user.email;
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplierName = supplierNameRef.current.value;
        const item = {
            name: name,
            email: email,
            image: image,
            description: description,
            price: price,
            quantity: quantity,
            supplierName: supplierName
        }
        axios.post('https://gadget-zone.up.railway.app/item', item)
        .then(response =>{
            const {data}= response;
            if(data.insertedId){
                toast('Your item is added!');
                event.target.reset();
            }
        })
    };
    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-center text-primary">Add Item</h1>
                <Form onSubmit={handleSubmit} className="w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Product name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={user?.email.toString()} readOnly disabled required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control ref={imageRef} type="text" placeholder="Enter Product Image Link" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" style={{ height: '100px' }} ref={descriptionRef} type="text-area" placeholder="Enter Product Description" required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={priceRef} type="text" placeholder="Enter Product Price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control ref={quantityRef} type="text" placeholder="Enter Product Quantity" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSupplierName">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control ref={supplierNameRef} type="text" placeholder="Enter Supplier Name" required />
                    </Form.Group>

                    <Button className="w-50 d-block m-2 mx-auto" variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;