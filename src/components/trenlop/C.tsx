import React from 'react'
import {context} from './A'
interface Props{
    props:string
}
export default function C(props:Props) {
    let result = useContext(context);
    console.log(result);
  return (
    <div>
      <p>{context}</p>
    </div>
  )
}
