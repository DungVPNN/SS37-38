import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
  const [count,setCount]=useState<number>(0);
  // let index=0;
  const ref = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    ref.current?.focus();
  },[]);
  const handleClick=()=>{
    // index++;
    // ref.current=ref.current+1
    setCount(count+1);
  }
  // console.log(ref);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>tăng</button>
      <br />
      <input ref={ref} type="text" placeholder='Nhập email'/>
    </div>
  ) 
}