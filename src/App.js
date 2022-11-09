import logo from './logo.svg';
import './App.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
  useColorModeValue,
  Box,Text,Button
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { BsPeople } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import ManageAccess from './Components/ManageAccess';
import NewPlan from './Components/NewPlan';
import { useState } from 'react';
import MainList from './Components/MainList';

function App() {
const [members,setMembers]=useState(['nageshwar','ashwini','Kishan','Rishabh'])
  let arr=[
    {'Marketing':{
      'people':['nageshwar','Karan'],
      'Google Drive':['Pointer1','Pointer2','Pointer3'],
      'Wordpress':['easiest','web development']
    
    }},
    {'Sales':{
      'people':['Shivam','Rajesh'],
      'Mongo':['Atlas','canva'],
      'React ':['redux','context Api']
    
    }},
    {'Design':{
      'people':[],
      'JavaScript':['Curring','Bubbling','event loop'],
      'css':['position','absolute','relative']
    
    }}
  ]
const [schema,setSchema]=useState(arr)
  return (
   
    <Box className="App" style={{border:"2px solid" ,width:"60%" ,margin:"auto"}} >
      <Flex minWidth='max-content' alignItems='center' gap='4' margin='100'>
<Box>
  <Heading as="h4">SOP</Heading>
  <Heading as='h1' size='xl' noOfLines={1}> Action Plans</Heading>
</Box>
<Spacer />
<ManageAccess schema={schema} members={members}/>
<NewPlan schema={schema} setSchema={setSchema} />
</Flex>


<Box  margin='20'>
<MainList schema={schema} setSchema={setSchema}/>
</Box>
    </Box>
    
  );
}

export default App;
