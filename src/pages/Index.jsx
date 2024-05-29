import { Box, Container, Flex, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md" mb={6}>
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" mr={4}>
          Home
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/about" fontSize="xl" mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" fontSize="xl">
          Contact
        </Link>
      </Flex>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="80vh"
        bg="gray.100"
        borderRadius="md"
        p={4}
      >
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Your Blank Canvas
          </Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;