import React, { useEffect, useState } from 'react'
import supabase from "../utils/Supabase";
import { Navigate, Outlet } from 'react-router-dom';

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
      return <div>Loading...</div>
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected