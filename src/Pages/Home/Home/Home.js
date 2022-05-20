import React from 'react';
import Banner from '../Banner/Banner';
import Policy from '../Policy/Policy';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Policy></Policy>
        </>
    );
};

export default Home;