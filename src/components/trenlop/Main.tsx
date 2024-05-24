import React, { memo } from 'react'
interface Props{
    getIdProduct:Function
}
function Main(props:Props) {
    console.log(111111111111, props.getIdProduct);
  return (
    <div>
        
    </div>
  )
}
export default memo(Main);