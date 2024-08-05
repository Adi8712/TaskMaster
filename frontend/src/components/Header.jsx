import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import TaskModal from "./TaskModal";
import Logout from "./Logout";

function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <Flex mb={{ base: 10, md: 20 }} justifyContent="space-evenly" >
          <Button
            px={{ base: 4, md: 8 }}
            bg="accent.main"
            _hover={{
              bg: "accent.200",
            }}
            _active={{
              bg: "accent.300",
            }}
            fontSize={{ base: "sm", md: "md" }}
            onClick={onOpen}
          >
            Add Task
          </Button>
          <Logout />
          <TaskModal isOpen={isOpen} onClose={onClose} />
      </Flex>
  );
}

export default Header;