import React, { useReducer, useState } from 'react'

export default function UseReducer() {
  // const [count,setCount]=useState<number>(0);
  // let initial={
  //   product:{},
  //   product:[],
  //   isLoading:false,
  // }
  const reducer=(state:any,action:any)=>{ // đặt tên gì cx đc
    switch (action) {
      case 'increase':
        return state+1
    
        case 'a':
          return state-1

      default:
        return state;
    }
  }
  const initialCount=0;
  // destrucoring
  const [state,dispatch] = useReducer(reducer,initialCount);
  const handleClick=()=>{
    dispatch('increase');
  }
  const handleClick2=()=>{
    dispatch('a');
  }
  return (
    <div>
      <p>{state}</p>
      <button onClick={handleClick}>tăng</button>
      <button onClick={handleClick2}>giảm</button>
    </div>
  )
}
