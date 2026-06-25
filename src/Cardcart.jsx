import React from 'react'
import Cart from './Components/Cart'
import Card from './Components/Card'
const Cardcart = () => {
  return (
    <div>
<div  style={{
  display:"flex"
}}>
 <Card
 productImage="https://m.media-amazon.com/images/I/61Ce-6B6x+L._AC_UY327_FMwebp_QL65_.jpg"
 productName="iphone"
 productPrice={50000}
  />   

   <Card
   productImage="https://m.media-amazon.com/images/I/31jQc6x6rjL._SY300_SX300_QL70_FMwebp_.jpg"
    productName="ipad"
 productPrice={40000}
   /> 
   <Card
   productImage="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov13/Shoes_low._SY116_CB541153107_.jpg"
    productName="shoes"
 productPrice={2000}
   /> 
</div>
  <br />

  <div style={{
    display:"flex",
   
  }}>

<Cart
proImage="https://images-eu.ssl-images-amazon.com/images/I/71nQIde8HCS._AC_UL165_SR165,165_.jpg"
proName="Bacca Bucci Men Lace Up Running Shoes"
prodisc="-50%"
proPrice="₹1,499"
promrp="M.R.P.: ₹2,999"
  />
<Cart
proImage="https://images-eu.ssl-images-amazon.com/images/I/61Tix2-t7iL._AC_UL165_SR165,165_.jpg"
proName="Apple iPad mini (A17 Pro): Apple Intelligence, 21.08 cm (8.3″)"
prodisc="-5%"
proPrice="₹47,399"
promrp="M.R.P.: ₹49,900"
  />
<Cart
proImage="https://images-eu.ssl-images-amazon.com/images/I/71-LzucxuHL._AC_UL165_SR165,165_.jpg"
proName="ASIAN Powerkick-01 Men’s Sports Sneakers "
prodisc="-57%"
proPrice="₹1,079"
promrp="M.R.P.: ₹2,499"
  />
<Cart
proImage="https://images-eu.ssl-images-amazon.com/images/I/41iLLpfSWxL._AC_UL165_SR165,165_.jpg"
proName="Apple Pencil Pro: Advanced Tools, Pixel-Perfect Precision, tilt and Pressure Sensitivity;"
prodisc="-5%"
proPrice="₹11,299"
promrp="M.R.P.: ₹11,900"
  />
<Cart
proImage="https://images-eu.ssl-images-amazon.com/images/I/6157WaPyAyL._AC_UL165_SR165,165_.jpg"
proName="Bacca Bucci Men's Energy Afterburn Disruptor Sneakers"
prodisc="-60%"
proPrice="₹999"
promrp="M.R.P.: ₹2,499"
  />
<Cart
proImage="https://images-eu.ssl-images-amazon.com/images/I/61kMIKm23VL._AC_UL165_SR165,165_.jpg"
proName="Apple iPad 11″: A16 chip, 27.69 cm (11″) Model, Liquid Retina Display, 128GB, Wi-Fi"
prodisc="-10% "
proPrice="₹34,900"
promrp="M.R.P.: ₹36,999"

  />
<Cart
proImage="https://m.media-amazon.com/images/I/41N27+eJD8L._SY300_SX300_QL70_FMwebp_.jpg"
proName="Adcom Shuffle Over Ear Wireless Bluetooth Headphones with Built-in Mic"
prodisc="-76%"
proPrice="₹949"
promrp="M.R.P.: ₹3,999"
  />

</div>
</div>
  )
}

export default Cardcart
