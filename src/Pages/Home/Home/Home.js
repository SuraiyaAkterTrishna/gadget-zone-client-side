import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import InventoryItem from '../InventoryItem/InventoryItem';
import Policy from '../Policy/Policy';
import useInventoryItems from '../../utilities/useInventoryItems';

const Home = () => {
    const [inventoryItems] = useInventoryItems();
    return (
        <>
            <Banner></Banner>
            <div className="container my-5">
                <h1 className="text-center text-primary">Inventory Items</h1>
                <div className="row">
                    {
                        inventoryItems.map(inventoryItem => <InventoryItem
                            inventoryItem={inventoryItem}
                            key={inventoryItem._id}
                        ></InventoryItem>).slice(0, 6)
                    }
                </div>
                <div className="d-flex flex-row-reverse my-5">
                    <Link to='/manage-inventories'><button className='btn btn-primary'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
                </div>
            </div>
            <Policy></Policy>
        </>
    );
};

export default Home;