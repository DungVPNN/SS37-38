import React from 'react'
import C from './C'
interface Props{
    data:string
}
export default function B(props:Props) {
  return (
    <div>
      <C props={props.data}></C>
    </div>
  )
}
