import React from "react";
function Card() {
  return (
    <div>
      this is my first component
      <div
        style={{
        
          width: "250px",
          height: "150px",
          backgroundColor: "skyblue",
          border: "2px solid black ",
        }}
      >
        <img
          src="https://s3.me-central-1.amazonaws.com/com.insurancemarket.wp/2024/06/image-125-40.jpg"
          alt=""
          height={150} width={250}
        />

      </div>
    </div>
  );
}
export default Card;
