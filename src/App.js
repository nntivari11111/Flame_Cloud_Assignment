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
const [members,setMembers]=useState(['Aryan','Karan','Kishan','Rishi'])
  let arr=[
    {'Marketing':{
      'people':['Aryan','Karan'],
      'Google Drive':['Pointer1','Pointer2','Pointer3'],
      'Wordpress':['easiest','web development']
    
    }},
    {'Sales':{
      'people':['Aryan','Karan'],
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
    <div className="App">
      <Flex minWidth='max-content' alignItems='center' gap='4' margin='20'>
<Box>
  <Text>Sop</Text>
  <Heading as='h1' size='xl' noOfLines={1}> Action Plans</Heading>
</Box>
<Spacer />
<ManageAccess schema={schema} members={members}/>
<NewPlan schema={schema} setSchema={setSchema} />
</Flex>


<Box  margin='20'>
<MainList schema={schema} setSchema={setSchema}/>
</Box>
    </div>
  );
}

export default App;
