import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import InventoryItems from './Pages/Home/InventoryItems/InventoryItems';
import InventoryItemDetail from './Pages/Home/InventoryItemDetail/InventoryItemDetail';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import AddItem from './Pages/Home/AddItem/AddItem';
import MyInventory from './Pages/Home/MyInventory/MyInventory';
import ManageInventories from './Pages/Home/ManageInventories/ManageInventories';
import { ToastContainer } from 'react-toastify';
import Gallery from './Pages/Home/Gallery/Gallery';
import Policy from './Pages/Home/Policy/Policy';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory" element={<InventoryItems></InventoryItems>}></Route>
        <Route path='/inventory-item/:id' element={
          <RequireAuth>
            <InventoryItemDetail></InventoryItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/inventory-item/:id' element={
          <RequireAuth>
            <InventoryItemDetail></InventoryItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyInventory></MyInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manage-items' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/add-item' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/policy' element={<Policy></Policy>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
