import React, { useState } from 'react'
import { Flex, Spacer,Box } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import SubAccord from './SubAccord'
const Accord = ({ele}) => {
    const [main,setMain]=useState(Object.values(ele)[0])
    const [category,setCategory]=useState(Object.keys(main).splice(1))
    const [subCategory,setSubCategory]=useState(Object.values(main).splice(1))
    console.log('almost')
    console.log(category)
    console.log('main')
    console.log(main)
  return (
    <Accordion>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
          { Object.keys(ele)[0]}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      {
        category?.map((e)=>{
            return (<SubAccord main={main} category={category} subCategory={subCategory} arr1={e} />)
        })
      }
      </AccordionPanel>
   
    </AccordionItem>
    </Accordion>  
  )
}

export default Accord