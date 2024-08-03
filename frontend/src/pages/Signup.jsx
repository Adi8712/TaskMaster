import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/Supabase";

function Signup() {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ userData, setUserData ] = useState({})
  const toast = useToast()
  const navigate = useNavigate()

  function onChange(e) {
    const { name, value } = e.target
    setUserData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function isComplete() {
    return userData["firstName"] && userData["email"] && userData["password"];
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleSignup()
  }

  async function handleSignup () {
    const { email, firstName, lastName, password } = userData
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            firstName: firstName,
            lastName: lastName
          }
        }
      })
      
      if (error) {
        throw error
      }

      sessionStorage.setItem("token", JSON.stringify(data["session"]["access_token"]))
      toast({
        status: "success",
        title: "Welcome",
        isClosable: true,
        duration: 2500,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast({
        status: "error",
        title: error,
        isClosable: true,
        duration: 2500,
      });
    }
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Sign up
        </Heading>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    _focusVisible={{
                      borderColor: "primary.500",
                    }}
                    name="firstName"
                    value={userData["firstName"] || ""}
                    onChange={onChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    _focusVisible={{
                      borderColor: "primary.500",
                    }}
                    name="lastName"
                    value={userData["lastName"] || ""}
                    onChange={onChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                _focusVisible={{
                  borderColor: "primary.500",
                }}
                name="email"
                value={userData["email"] || ""}
                onChange={onChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  _focusVisible={{
                    borderColor: "primary.500",
                  }}
                  name="password"
                  value={userData["password"] || ""}
                  onChange={onChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                size="lg"
                bg={"accent.main"}
                _hover={{
                  bg: "accent.500",
                  color: "white",
                }}
                isDisabled={!isComplete()}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to={"/login"} style={{ color: "blue" }}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup