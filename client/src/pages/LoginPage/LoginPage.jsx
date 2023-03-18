import NavBar from '@/ui/components/NavBar'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import background from "@/assets/cybersecurity_bg.jpg"
import Form from './Form'
import SignUp from './SignUp.jsx'

const LoginPage = () => {

    const [pageType, setpageType] = useState('login')
    return (
        <Box sx={{ backgroundImage: `url(${background})`, minHeight: '100vh', backgroundSize: 'cover' }}>
            <NavBar setpageType={setpageType} />
            <Box sx={{ display: 'flex', fontSize: '2.5rem', color: 'white', justifyContent: "center", pt: '4.5rem' }}>
                {pageType === 'login' ? < Form pageType={pageType} /> : <SignUp />}

            </Box>
        </Box>
    )
}

export default LoginPage