import React from "react";
function Card(props) {
  return (
    <div>
      this is me
      <div
        style={{
        
          width: "150px",
          height: "150px",
          backgroundColor: "grey",
          border: "2px solid black ",
          borderRadius:"10px",
      margin:"5px"
        }}
      >
        <img
          src={props.productImage}
          alt=""
          height={50} width={50}
        />
        <p>{props.productName}</p>
        <p>{props.productPrice}</p>

      </div>
    </div>
  );
}
export default Card;
