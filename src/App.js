import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import InventoryItems from './Pages/Home/InventoryItems/InventoryItems';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory-items" element={<InventoryItems></InventoryItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
