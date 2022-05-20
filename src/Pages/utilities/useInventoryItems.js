import { useEffect, useState } from "react";

const useInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setInventoryItems(data));
    }, [])
    return [inventoryItems, setInventoryItems];
};

export default useInventoryItems;