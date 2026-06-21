import React from "react";

const Cart = (props) => {
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "300px",

          border: "1px solid white ",
          borderRadius: "5px",
          margin: "5px",
        }}
      >
        <img src={props.proImage} alt="" height={120} width={200} />

        <p
          style={{
            color: "blue",
            margin: "5px",
          }}
        >
          {props.proName}
        </p>

        <p
          style={{
            color: "red",
            display: "inline",
          }}
        >
          {props.prodisc}{" "}
        </p>

        <p
          style={{
            display: "inline",
          }}
        >
          <strong>{props.proPrice}</strong>
        </p>

        <p
          style={{
            textDecoration: "line-through",
            color: "gray",
            margin:"0"
          }}
        >
          {props.promrp}
        </p>
      </div>
    </div>
  );
};

export default Cart;
