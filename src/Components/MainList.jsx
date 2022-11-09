import React from 'react'
import { Flex, Spacer,Box } from '@chakra-ui/react'
import Accord from './Accord'
const MainList = ({schema,setSchema}) => {
  return (
    <div>
        { schema?.map((e)=>{
            return(<Accord ele={e}/>)
        })
            
        }
        
    </div>
  )
}

export default MainList