import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import InventoryItems from './Pages/Home/InventoryItems/InventoryItems';
import InventoryItemDetail from './Pages/Home/InventoryItemDetail/InventoryItemDetail';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Additem from './Pages/Home/AddItem/Additem';

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
        <Route path='/add-item' element={<Additem></Additem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
