import React from 'react'

const CheckSyntheticEvent = () => {
    // function handleClick(){
    //     console.log("Hello")
    // }

    function print(event){
console.log(event.target.value)
    }
  return (
    <div>
{/*       
      <button onClick={handleClick}>Click</button> */}
      <input onChange={print} type="text" placeholder='Type ' />
    </div>
  )
}

export default CheckSyntheticEvent
