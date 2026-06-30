import React, { useState , useReducer} from "react";
import Cardcart from "./Cardcart";
import Navbar from "./Components/Navbar";
// import Visitingcard from './Visitingcard'
import MainLanding from "./Components/MainLanding";
import MyFirsTusestate from "./Components/MyFirsTusestate";
import CheckSyntheticEvent from "./Components/CheckSyntheticEvent";
import FormValidation from "./Components/FormValidation";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Component1 from "./Components/Component1";
import UserContext from "./UserContext";
import Navbarr from "./Navbarr";
import Counterusingreducer from "./Counterusingreducer";
import products from "./Components/Products";
import { cartReducer,initialState } from "./Components/CartReducer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, SetSearch] = useState("");
const [theme,SetTheme]=useState(false)
const [state,dispatch]= useReducer(cartReducer,initialState);
const[coupon,setCoupon]=useState("")
  // const user="Geeta "
  function change (){

  }
  return (
    <div >
      {/* <MyFirsTusestate/>
      <CheckSyntheticEvent/> */}
      {/* <Component1/>
<UserContext.Provider value={user}>
  <Navbarr/>
</UserContext.Provider> */}

{/* <Counterusingreducer/> */}

   <h1> Shopping Cart</h1>
   <input type="number" placeholder=" Enter Discount"  value={coupon} onChange={(e)=>setCoupon(e.target.value)}/>
        <h2> Total : Rs {state.total}</h2>
        {
          products.map((product)=>(
            <div key={product.id}
             style={{
              border:"1px solid gray",
              padding:15,
              marginBottom:15
             }}
            >

              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={()=>dispatch({
                type:"ADD_ITEM",
                payload:product
              })}>Add to Cart</button>

              <button onClick={()=>dispatch({
                type:"APPLY_COUPON",
                payload:Number(coupon)
              })}>Apply Coupon</button>

              <button onClick={()=>dispatch({
                type:"INCREASE_QTY",
                payload:product
              })}>Increase QTY </button>
            </div>
          ))
        }
        <h2> Cart </h2>
        {state.cart.map((item)=>(
          <div key={item.id}>
            {item.title}
            {"-"}
            Qty : {item.quantity}
          

          </div>
          
        ))}
          <button onClick={()=>dispatch({
                type:"CLEAR_CART"
              
              })}>Clear Cart </button>

        <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        search={search}
        SetSearch={SetSearch}
      />
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
                <img
                  src={item.image}
                  alt=""
                  width={200}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            ))
          )}
        </div>
      )}
      <Routes>
        <Route path="/" element={  <MainLanding
        cart={cart}
        setCart={setCart}
        search={search}
        SetSearch={SetSearch}
      />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Form" element={<FormValidation />}></Route>
       
        <Route path="/CardCart" element={<Cardcart />}></Route>
      </Routes>

      {/* <Visitingcard/> */}
      {/* <Cardcart/> */}
  

 
    </div>
  );
};

export default App;
