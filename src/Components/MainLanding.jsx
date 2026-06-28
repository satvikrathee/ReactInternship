import React from "react";
import { useState } from "react";

const products = [
    {
      id: 1,
      title: "Iphone 15",
      category: "Smartphone",
      rating: 4.8,
      Stock: 95,
      image:
        "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY327_FMwebp_QL65_.jpg",
      description: "Latest Iphone",
      quantity:0
    
    },
    {
      id: 2,
      title: "Macbook Air",
      category: "Laptop",
      rating: 4.9,
      Stock: 85,
      image:
        "https://m.media-amazon.com/images/I/71kKQjKzW1L._AC_UY327_FMwebp_QL65_.jpg",
      description: "Latest Laptop",
        quantity:0
    },
    {
      id: 3,
      title: "Washing Machine",
      category: "Machine",
      rating: 4.8,
      Stock: 15,
      image:
        "https://m.media-amazon.com/images/I/71n68KeFdTL._AC_UY327_FMwebp_QL65_.jpg",
      description: "Latest Washing Machine",
        quantity:0
    },
    {
      id: 4,
      title: "Notebook",
      category: "Book",
      rating: 4,
      Stock: 15,
      image:
        "https://m.media-amazon.com/images/I/61rTjhWjUpL._AC_UL480_FMwebp_QL65_.jpg",
      description: "Best book",
        quantity:0
    },
    {
      id: 5,
      title: "Tshirt",
      category: "Clothes",
      rating: 4.8,
      Stock: 65,
      image:
        "https://m.media-amazon.com/images/I/517PFm9s1IL._AC_UL480_FMwebp_QL65_.jpg",
      description: "Good Tshirt",
     quantity:0
    },
    {
      id: 6,
      title: "Jeans",
      category: "Clothes",
      rating: 4.3,
      Stock: 11,
      image:
        "https://m.media-amazon.com/images/I/618Krk9IBSL._AC_UL480_FMwebp_QL65_.jpg",
      description: "Baggy Jean",
        quantity:0
    },
    {
      id: 7,
      title: "Table",
      category: "Appliance",
      rating: 4.5,
      Stock: 15,
      image:
        "https://m.media-amazon.com/images/I/61YCsJXvHJL._AC_UL480_FMwebp_QL65_.jpg",
      description: "Wooden",
        quantity:0
    },
    {
      id: 8,
      title: "Fan",
      category: "Appliance",
      rating: 4.8,
      Stock: 85,
      image:
        "https://m.media-amazon.com/images/I/61JbqYdgtiL._AC_UY327_FMwebp_QL65_.jpg",
      description: "Fast ",
        quantity:0
    },
    {
      id: 9,
      title: "Kurta",
      category: "Clothes",
      rating: 4.8,
      Stock: 55,
      image:
        "https://m.media-amazon.com/images/I/61Lsf8qizHL._AC_UL480_FMwebp_QL65_.jpg",
      description: "Cotton",
        quantity:0
    },
    {
      id: 10,
      title: "Shoes",
      category: "Shoe",
      rating: 4.9,
      Stock: 100,
      image:
        "https://m.media-amazon.com/images/I/51UemNd+mIL._AC_UL480_FMwebp_QL65_.jpg",
      description: "Branded",
        quantity:0
    },
    {
      id: 11,
      title: "Led light",
      category: "Appliance",
      rating: 4.8,
      Stock: 55,
      image:
        "https://m.media-amazon.com/images/I/51lQv51FH5L._AC_UL480_FMwebp_QL65_.jpg",
      description: "Colourful",
        quantity:0
    },
    {
      id: 12,
      title: "Smart cycle",
      category: "Vehicle",
      rating: 3.9,
      Stock: 5,
      image:
        "https://m.media-amazon.com/images/I/61p20ZMC1rL._AC_UY327_FMwebp_QL65_.jpg",
      description: "Electric",
        quantity:0
    },
  ];
const MainLanding = ({cart,setCart , search, SetSearch}) => {
  const[productList,setproductList]=useState(products);
  function increaseQuantity(id){
    const updatedProducts=productList.map((prodsearcjhuct)=>{
      if(product.id === id && product.quantity < product.Stock){
        return {...product,quantity:product.quantity + 1 }
      }
      return product;
    }

  );
  setproductList(updatedProducts);
  }
  


function addToCart(product) {
setCart([...cart,product])
 

}


const filterProduct= products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "centre",
        padding: "20px",
      }}
    >
      {filterProduct.map((product) => (
        <div
          key={product.id}
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
          <div>
            <p
              style={{
                border: "none",
                width: "fit-content",
                background: "linear-gradient(to right, #f6cfbe, #b9dcf2)",
                borderRadius: "7px",
                marginLeft: "160px",
                position: "absolute",
                marginBottom: "80px",
              }}
            >
              <strong>Category:</strong>
              {product.category}
            </p>

            <img
              src={product.image}
              alt="My Product image"
              width={300}
              height={150}
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <h2>{product.title}</h2>

          <p>{product.description}</p>
          <p>Rating:{product.rating}⭐</p>
          <p>Stock : {product.Stock}</p>
          
           <span
            style={{
              width: "100%",
              border: "none",
            }}
          >
          Quantity :{product.quantity}
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                marginBottom: "10px",
                borderRadius:"50%",
                marginLeft:"100px"
              }}
              onClick={()=>increaseQuantity(product.id)}
            >
              +
            </button>
          </span>
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
             onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
     

    </div>
    
  );
};

export default MainLanding;
