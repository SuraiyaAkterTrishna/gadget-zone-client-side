import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InventoryItem from '../InventoryItem/InventoryItem';
import useInventoryItems from '../../utilities/useInventoryItems';

const InventoryItems = () => {
    const [inventoryItems] = useInventoryItems();
    return (
        <div className="container">
            <h1 className="text-center text-primary my-5">Inventory Items</h1>
            <div className="row">
                {
                    inventoryItems.map(inventoryItem => <InventoryItem
                        inventoryItem = {inventoryItem}
                        key = {inventoryItem._id}
                    ></InventoryItem>)
                }
            </div>
            <div className="d-flex flex-row-reverse my-5">
                <Link to='/manage-items'><button className='btn btn-primary'>Manage Inventories <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
            </div>
        </div>
    );
};

export default InventoryItems;