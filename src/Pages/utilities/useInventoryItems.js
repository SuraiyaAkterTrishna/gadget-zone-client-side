import { useEffect, useState } from "react";

const useInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('https://gadget-zone.up.railway.app/item')
            .then(res => res.json())
            .then(data => setInventoryItems(data));
    }, [])
    return [inventoryItems, setInventoryItems];
};

export default useInventoryItems;