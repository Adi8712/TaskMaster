import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function TaskModal(props) {

  const [ task, setTask ] = useState({ title: "", desc: "", cat: "Planning", date: "" })


  useEffect(() => {
    if (!props.isOpen) {
      resetForm()
    }
  }, [props.isOpen])

  function resetForm() {
    setTask({
      title: "",
      desc: "",
      cat: "Planning",
      date: "",
    });
  }

  function isComplete() {
    return task["title"];
  }

  function onChange(e) {
    const { name, value } = e.target
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleAdd()
  }

  function handleAdd() {
    
    // TODO: make GO server
    // TODO: send task to backend

    resetForm()
    props.onClose()
  }

  return (
    <Modal
      {...props}
      closeOnOverlayClick={false}
      isCentered
      scrollBehavior="inside"
      size={{ base: "sm", md: "xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Task</ModalHeader>
        <ModalBody pb={6}>
          <Box bg="white" borderRadius="lg">
            <VStack spacing={5}>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={task["title"]}
                  onChange={onChange}
                  type="text"
                  size="md"
                  _focusVisible={"none"}
                />
              </FormControl>
              <FormControl id="desc">
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="desc"
                  value={task["desc"]}
                  onChange={onChange}
                  _focusVisible={"none"}
                  placeholder="Make a plan"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  name="cat"
                  value={task["cat"]}
                  onChange={onChange}
                  placeholder="Select Category"
                >
                  <option>Planning</option>
                  <option>Doing</option>
                  <option>Completed</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Have a deadline?</FormLabel>
                <Input type='date' name='date' value={task["date"]} onChange={onChange} />
              </FormControl>
            </VStack>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="secondary" mr={3} onClick={handleSubmit} isDisabled={!isComplete()}>
            Add
          </Button>
          <Button onClick={props.onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TaskModal