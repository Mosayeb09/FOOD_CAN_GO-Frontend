import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Component/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./Component/LoginPopup/LoginPopup";


const App = () => {
  const [showForm,setshowForm]=useState(false)
  return (
    <>
    {
      showForm?<LoginPopup setshowForm={setshowForm}></LoginPopup>:<></>
    }
    <div className="app" >
      <Navbar setshowForm={setshowForm}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/placeOrder" element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
</>
    
  );
};

export default App;