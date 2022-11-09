import React from 'react'
import { Select } from '@chakra-ui/react'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Flex, Spacer } from '@chakra-ui/react'
import { GiCrossMark } from "react-icons/gi";
const Members = ({members,arr1}) => {
    console.log('hi')
console.log(arr1)
  return (
    <div>
        <Select placeholder='+'>
            {members?.map((e)=>{
                return (
<option value={e}><div>{e}</div>{arr1.includes(e)?<div style={{color:'red'}}>x</div>:""}</option>
                )
            })}
  

</Select>
    </div>
  )
}

export default Members