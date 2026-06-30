import React, { useReducer } from 'react'

const initialState={
        count:0
    }
    function reducer(state,action){
        switch(action.type){
            case"incriment":
            return{
                count:state.count+1
            }
            case"decrement":
            return{
                count:state.count-1
            }
            default:
                return state
        }
    }
const Counterusingreducer = () => {
const [state,dispatch]=useReducer(reducer,initialState)
    
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"incriment"})}>Incriment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
     
    </div>
  )
}

export default Counterusingreducer
