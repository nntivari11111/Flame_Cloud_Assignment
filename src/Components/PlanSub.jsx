import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,Box
  } from '@chakra-ui/react'
  import { BsPeople } from "react-icons/bs";
  import { AiOutlinePlusSquare } from "react-icons/ai";
function PlanSub({handleClick}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        
    
       
        <Button colorScheme='blue' variant='solid' onClick={onOpen } >Create</Button>
  
           
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sub-Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
              <Box>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' >Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default PlanSub