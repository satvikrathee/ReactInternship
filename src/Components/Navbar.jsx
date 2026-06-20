import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "lightblue",
        padding: "10px",
      }}
    >
      <h2>Logo</h2>

      <div
        style={{
          display: "flex",
          alignItems: "centre",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="Contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
