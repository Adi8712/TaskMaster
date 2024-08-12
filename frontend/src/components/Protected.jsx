import React, { useEffect, useState } from 'react'
import supabase from "../utils/Supabase";
import { Navigate, Outlet } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';

function Protected() {
    
    const [ isAuth, setIsAuth ] = useState(null)
    
    useEffect(() => {
        async function check() {
            const { data: { user } } = await supabase.auth.getUser()
            setIsAuth(!!user)
        }

        check()
    }, [])

    if (isAuth === null) {
        return (
          <Flex alignItems="center" height="100vh" justifyContent="center">
            <Spinner
              boxSize={24}
              thickness="5px"
              speed="0.75s"
              emptyColor="gray.200"
              color="accent.500"
              size="xl"
            />
          </Flex>
        )
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default Protected