import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Main() {
  return (
      <Flex direction={{ base: "column", md: "row" }} flex="1">
        <Box flex="1" px={{ base: 0, md: 4 }} py={{ base: 4, md: 0 }}>
          <Text fontSize={{ base: "sm", md: "md" }} align={"center"}>
            Planning
          </Text>
        </Box>
        <Box flex="1" p={{ base: 0, md: 4 }} py={{ base: 4, md: 0 }}>
          <Text fontSize={{ base: "sm", md: "md" }} align={"center"}>
            Doing
          </Text>
        </Box>
        <Box flex="1" p={{ base: 0, md: 4 }} py={{ base: 4, md: 0 }}>
          <Text fontSize={{ base: "sm", md: "md" }} align={"center"}>
            Completed
          </Text>
        </Box>
      </Flex>
  );
}

export default Main;
