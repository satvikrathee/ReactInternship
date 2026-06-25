import React, { useState } from "react";
import Cardcart from "./Cardcart";
import Navbar from "./Components/Navbar";
// import Visitingcard from './Visitingcard'
import MainLanding from "./Components/MainLanding";
import MyFirsTusestate from './Components/MyFirsTusestate'
import CheckSyntheticEvent from "./Components/CheckSyntheticEvent";
import FormValidation from "./Components/FormValidation";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
const [search,SetSearch]=useState("")
  return (
    <div>
      {/* <MyFirsTusestate/>
      <CheckSyntheticEvent/> */}
      <FormValidation/>
      {/* <Visitingcard/> */}
      {/* <Cardcart/> */}
      <Navbar cart={cart} showCart={showCart} setShowCart={setShowCart} search={search} SetSearch={SetSearch} />
      {showCart && (
        <div>
          <h2>Cart Items</h2>
          {cart.length === 0 ? (
            <h3>Cart Empty</h3>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                style={{
                 
                  width: "300px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  padding: "10px",
                  background: "linear-gradient(to right, #f6f6f6, #f6f6f6)",
                }}
              >
                <img src={item.image} alt="" width={200} height={150} style={{objectFit:"cover"}}/>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            ))
          )}
        </div>
      )}

      <MainLanding cart={cart} setCart={setCart}  search={search} SetSearch={SetSearch}/>
    </div>
  );
};

export default App;
