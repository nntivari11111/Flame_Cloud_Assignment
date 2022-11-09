import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,Box,Text
  } from '@chakra-ui/react'
  import { BsPeople } from "react-icons/bs";
  import { Flex, Spacer } from '@chakra-ui/react'
  import { AiOutlinePlusSquare } from "react-icons/ai";
import Members from './Members';
import Names from './Names';


{/* <Names arr1={Object.values(e)[0].people} keys={i}/> */}
// Object.values(e)[0].people.map((ele)=>{
//     <span>{ele}</span>
//                                 })
function ManageAccess({schema,members}) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    
    return (
      <>
        
        <Button onClick={onOpen} colorScheme='blue' variant='outline'>
            <BsPeople style={{paddingRight:'5px'}} fontSize='20'/> Manage People
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>SOP Access</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
              <Box>
                {schema?.map((e,i)=>{
                    return (<Box>
                        <Box color='blue' fontWeight='bold' fontSize='15'>{ Object.keys(e)[0]}
                        <Flex width='80%' style={{border:'1px solid black'}}>
                        <Box>
                            <Text style={{color:'gray'}}>Teamates</Text>
                           
                           { 
                            Object.values(e)[0].people.length==0?<Text style={{color:'black'}}>Select Members</Text>:
                            <Names arr1={Object.values(e)[0].people} keys={i} />
                          
                            }
                            
                        </Box>
                        <Spacer/>
                        <Members members={members} keys={i*20} arr1={Object.values(e)[0].people}/>
                        
                    </Flex>
                        
                        </Box>
                       
                    </Box>
                    )
                       
                       
                    
                })

                }
              
               
                </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default ManageAccess