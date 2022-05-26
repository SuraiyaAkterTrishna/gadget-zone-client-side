import { useEffect, useState } from "react";

const useInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-falls-76816.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setInventoryItems(data));
    }, [])
    return [inventoryItems, setInventoryItems];
};

export default useInventoryItems;