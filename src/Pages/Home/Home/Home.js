import React from 'react';
import Banner from '../Banner/Banner';
import Policy from '../Policy/Policy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InventoryItem from '../InventoryItem/InventoryItem';
import useInventoryItems from '../../utilities/useInventoryItems';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';

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
                    <Link to='/manage-items'><button className='btn btn-primary'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
                </div>
            </div>
            <Gallery></Gallery>
            <Policy></Policy>
        </>
    );
};

export default Home;