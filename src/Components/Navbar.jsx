import React from "react";

const Navbar = ({ cart, showCart, setShowCart , search , SetSearch}) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #ebf4f5, #b5c6e0)",
        // padding: "10px",
        borderRadius:"10px"
      }}
    >
      <h2>Logo</h2>
<input type="text" placeholder="Search.... " style={{
           display:"flex",
           width:"300px",
            border: "none",
            borderRadius: "15px",
            marginBottom:"15px",
            marginTop:"15px",
            marginleft:"10px",
             color:"black"

}}  value={search} onChange={(e)=>SetSearch(e.target.value)}/>
      <div
        style={{
          display: "flex",
          alignItems: "centre",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <a style={{   padding:"7px",
            width:"50px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
             background: "linear-gradient(to right, #f6cfbe, #b9dcf2)",
             color:"black"
            }} href="#home">Home</a>
        <a style={{   padding:"7px",
            width:"50px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
             background: "linear-gradient(to right, #f6cfbe, #b9dcf2)",
             color:"black"
             }} href="#About">About</a>
        <a style={{   padding:"7px",
            width:"50px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
             background: "linear-gradient(to right, #f6cfbe, #b9dcf2)",
             color:"black"
             }} href="Contact">Contact</a>

        <button
          onClick={() => setShowCart(!showCart)}
          style={{
            padding:"7px",
            width:"80px",
            border: "none",
            borderRadius: "10px",
            marginBottom:"25px",
             background: "linear-gradient(to right, #f6cfbe, #b9dcf2)"
          }}
        >
          Cart({cart.length})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
