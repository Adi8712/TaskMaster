import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function Dashboard() {
  return (
    <Flex direction="column" p={{ base: 4, md: 10 }}>
      <Header />
      <Main />
    </Flex>
  );
}

export default Dashboard;
