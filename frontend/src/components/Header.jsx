import {
  Box,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";

const Links = ["Home", "Features", "Team"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box as="a" px={2} py={1} href={"#" + children} fontSize={{ base: "1rem", md: "1.2rem" }}>
      {children}
    </Box>
  );
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        p={4}
        pb={{ base: 0 }}
        position={"sticky"}
        top={0}
        bg={{ md: "background.main" }}
        opacity={0.9}
      >
        <Box
          display={{ base: "flex", md: "block" }}
          h={{ md: 16 }}
          alignItems={"center"}
          justifyContent={{ base: "space-between" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box w={{ base: 8, md: 12 }} color="primary.main">
              <Icon as={Logo} />
            </Box>
            <HStack spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <HStack display={{ base: "none", md: "flex" }}>
              <Link to={"signup"}>
                <Button
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  >
                  Signup
                </Button>
              </Link>
              <Link to={"login"}>
                <Button
                  px={8}
                  bg="accent.main"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  _active={{
                    bg: "accent.100",
                  }}
                >
                  Login
                </Button>
              </Link>
            </HStack>
          </HStack>
        </Box>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            position={"absolute"}
            zIndex={1}
            bg={"background.main"}
            px={2}
            borderRadius={10}
          >
            <Stack spacing={3} p={2}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
            <HStack>
              <Button
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Signup
              </Button>
              <Button
                px={8}
                bg="accent.main"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                _active={{
                  bg: "accent.100",
                }}
              >
                Login
              </Button>
            </HStack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Header;
