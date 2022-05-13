import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Policy from '../Policy/Policy';

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