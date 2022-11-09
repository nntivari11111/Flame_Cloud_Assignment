import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import PlanSub from "./PlanSub";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
function NewPlan({ schema, setSchema }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [plan, setPlan] = useState("");
  const handleClick = () => {
    let x = [...schema];
    let obj = {
      plan: {
        people: [],
      },
    };
    x.push(obj);
    setSchema(x);
    console.log("done");
  };
  return (
    <>
      <Button colorScheme="blue" variant="solid" onClick={onOpen}>
        <AiOutlinePlusSquare style={{ paddingRight: "5px" }} fontSize="20" />{" "}
        New Plan
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Plan Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Box>
            <Input
              placeholder="Name your plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <PlanSub />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewPlan;
