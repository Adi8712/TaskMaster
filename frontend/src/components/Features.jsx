import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const features = [
  {
    title: 'Intuitive Task Management',
    description: 'Easily create, edit, and manage tasks with a user-friendly interface designed to help you stay on top of your responsibilities.',
  },
  {
    title: 'Smart Reminders',
    description: 'Never miss a deadline again. Set custom reminders and notifications to ensure you’re always aware of upcoming tasks and deadlines.',
  },
  {
    title: 'Priority & Categorization',
    description: 'Organize tasks by priority and category to focus on what matters most. Our system helps you keep track of different projects and their status.',
  },
  {
    title: 'Collaborative Task Lists',
    description: 'Work better together by sharing tasks and projects with team members or family. Track progress and stay in sync with collaborative features.',
  },
  {
    title: 'Cross-Device Sync',
    description: 'Access your tasks from anywhere, at any time. TaskMaster syncs across all your devices, so your to-do list is always up-to-date and accessible.',
  },
  {
    title: 'Advanced Search & Filtering',
    description: 'Quickly find what you need with powerful search and filtering options. Our advanced tools help you navigate through your tasks effortlessly.',
  },
];

const Card = ({ title, description }) => {
  return (
    <Box
      borderWidth={{ base: "0", md: "2px" }}
      borderRadius="lg"
      width={"50rem"}
      p={{ base: "none", md: "10" }}
      px={{ base: "4" }}
      boxShadow={{ base: "none", md: "md" }}
      _hover={{ md: { boxShadow: "lg" } }}
    >
      <Text as='li' fontSize={{base: "md", md: "2xl"}} fontWeight={{ base: "400", md: "600" }} mb={2}>
        {title}
      </Text>
      <Text fontSize="md" display={{ base: "none", md: "block" }}>
        {description}
      </Text>
    </Box>
  );
};


function Features() {
  return (
    <Box p={{ base: 6, md: 20 }} id='Features'>
      <Heading py={6} >Features</Heading>
      <Flex
        wrap={"wrap"}
        gap={{ base: "none", md: "2rem" }}
        justifyContent={"space-evenly"}
      >
        {features.map((feature, index) => (
          <Card key={index} title={feature.title} description={feature.description} />
        ))}
      </Flex>
    </Box>
  );
}

export default Features