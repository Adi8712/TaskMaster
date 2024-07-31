import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Welcome from "../assets/Welcome";

function Landing() {
    return (
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        px={{ base: 6, md: 20 }}
        pb={6}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"10px"}
        id="Home"
      >
        <Text width={{ md: "50%" }} fontSize={{ base: "1rem", md: "1.2rem" }}>
          <Text fontFamily={'Exo'} fontWeight={"800"} fontSize={{ base: "1.6rem", md: "3rem" }} lineHeight={{ base: 1.5, md: 1.3}} letterSpacing={3} py={2}>
            Tired of <Box as="span" textDecoration={"underline"} textDecorationThickness={{ base: "3.2px", md: "5px" }}>juggling</Box> tasks and deadlines?
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            letterSpacing={1.4}
            fontWeight={500}
            pb={2}
          >
            Transform how you manage your day
          </Text>
          <Box display={{ base: "none", md: "block" }} py={8}>
            An intuitive and powerful to-do app helps you stay organized,
            focused, and productive. Whether you're handling a busy work
            schedule, managing personal projects, or just trying to remember
            important dates, this has you covered.
          </Box>
          <p>
            Say goodbye to missed deadlines and chaotic schedules. With
            <Text display={"inline"} color={"primary.main"} fontWeight={600}> TaskMaster</Text>, you'll experience seamless task management that keeps
            you on top of everything.
          </p>
        </Text>
        <Flex width={{ base: "100%", md: "40%" }}>
          <Welcome />
        </Flex>
      </Flex>
    );
}

export default Landing;
