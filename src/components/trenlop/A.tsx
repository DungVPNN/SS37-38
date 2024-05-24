import React, { createContext, useState } from 'react'
import B from './B'

export const context = createContext<any>('');
export default function A() {
    // const [data,setData]=useState<string>('a1');
    let fullName='NXQ';
  return (
    <div>
      {/* <B data={data}></B> */}
      <context.Provider value={fullName}>
        <B></B>
      </context.Provider>
    </div>
  )
}