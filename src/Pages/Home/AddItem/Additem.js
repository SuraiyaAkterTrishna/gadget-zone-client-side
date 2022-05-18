import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Additem = () => {
    const nameRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const supplierNameRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplierName = supplierNameRef.current.value;
        console.log(name, image, description, price, quantity, supplierName);
        navigate('/inventory');
    };
    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-center text-primary">Add Item</h1>
                <Form onSubmit={handleSubmit} className="w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Product name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control ref={imageRef} type="text" placeholder="Enter Product Image Link" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text-area" placeholder="Enter Product Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={priceRef} type="text" placeholder="Enter Product Price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control ref={quantityRef} type="text" placeholder="Enter Product Quantity" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSupplierName">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control ref={supplierNameRef} type="text" placeholder="Enter Supplier Name" />
                    </Form.Group>

                    <Button className="w-50 d-block m-2 mx-auto" variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Additem;