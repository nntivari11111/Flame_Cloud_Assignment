import React,{useState} from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,Box,Input
  } from '@chakra-ui/react'
  import { BsPeople } from "react-icons/bs";
  import { AiOutlinePlusSquare } from "react-icons/ai";
function PlanSub({handleClick,ontackle}) {
    const { isOpen, onOpen, onClose } = useDisclosure() 
    const [pointer, setpointer] = useState("");
    return (
      <>
        
    
       
        <Button colorScheme='blue' variant='solid' onClick={onOpen } >Create</Button>
  
           
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pointer Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody>  
              <Box>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Box>
              <Input
              placeholder="Name your Pointer"
              value={pointer}
              onChange={(e) => setpointer(e.target.value)}
            />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={onClose,ontackle}>Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default PlanSub