import { Button, useToast } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/Supabase';

function Logout() {

    const toast = useToast()
    const navigate = useNavigate()

    async function handleLogout() {
        try {
            const { error } = await supabase.auth.signOut()

            if (error) {
                throw error
            }
            toast({
                status: "success",
                title: "Logged Out",
                isClosable: true,
                duration: 2500
            });
            setTimeout(() => {
                navigate("/login")
            }, 1000);
        } catch (error) {
            toast({
                status: "error",
                title: "That's weird",
                variant: "subtle",
                isClosable: true,
                duration: 2500
            });
        }
    }



    return (
      <Button
        bg={"red"}
        _hover={{
          boxShadow: "lg"
        }}
        _active={{
          bg: "red.300"
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    );
}

export default Logout