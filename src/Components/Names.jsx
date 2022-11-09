import React from 'react'

const Names = ({arr1}) => {
    
console.log(arr1)
  return (
    <div>{arr1.map((e)=>{
        return(<span >{e}{'  '}</span>)
    })}</div>
  )
}

export default Names