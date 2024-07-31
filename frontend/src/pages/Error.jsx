import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
        <Flex w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={'center'} direction={'column'} gap={5}>
            <Heading size={{ base: "2xl",md: "4xl"}}>
                404
            </Heading>
            <Text fontSize={{ base: "xl",md: "2xl" }}>
                Couldn't find the page you're looking for
            </Text>
            <Link to={"/"}>
                <Button p={4} bg="accent.main" _hover={{ bg: "accent.300" }}>
                    Back to Homepage
                </Button>
            </Link>
        </Flex>
    </>
  )
}

export default Error