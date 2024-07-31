import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Team() {
  return (
    <Box p={{ base: 6, md: 20 }} id="Team">
      <Heading py={6}>Team</Heading>
      <Flex
        borderWidth={"1px"}
        borderRadius="lg"
        p={{ base: "10", md: "10" }}
        width={{ base: "100%", md: "40%" }}
        px={{ base: "4" }}
        boxShadow="md"
        _hover={{ md: { boxShadow: "lg" } }}
        direction={"column"}
        alignItems={"center"}
        ml={"auto"}
        mr={"auto"}
      >
        <Image
          src="https://github.com/Adi8712.png"
          alt="Aditya"
          borderRadius={"50%"}
          width={{ base: "100px", md: "200px" }}
        />
        <Text
          fontSize={{ base: "md", md: "2xl" }}
          fontWeight={600}
          mb={2}
          pt={4}
        >
          Aditya Kumar Gupta
        </Text>
        <Text fontSize="md">
          I'm an engineering student majoring in CS, and I'm
          super excited about all things tech. I spend my time coding, working
          on fun projects, and trying out new technologies.
        </Text>
      </Flex>
    </Box>
  );
}

export default Team