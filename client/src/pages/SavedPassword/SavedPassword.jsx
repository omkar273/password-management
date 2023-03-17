import UniversalNavbar from '@/ui/components/UniversalNavbar';
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const dataRow = ({ url = 'google', pass = 'dummy' }) => {
    return (
        <Box sx={{ display: 'flex', textAlign: 'center', width: '60%' }}>
            <Box sx={{ border: '1px solid black', width: '60%', p: "1rem 5%", fontSize: "1rem" }}>
                <Typography fontSize={'1.25rem'}
                    fontFamily={'Play'}>
                    {url}
                </Typography>
            </Box>
            <Box sx={{ border: '1px solid black', width: '40%', p: "1rem 5%", fontSize: "1rem" }}>
                <Typography fontSize={'1.25rem'}
                    fontFamily={'Play'}>
                    {pass}
                </Typography>
            </Box>
        </Box>
    )
}
const SavedPassword = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fullname = (user.name);
    const { palette } = useTheme();
    const savedPass = useSelector((state) => state.pass)
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#A6DDDD' }}>
            <UniversalNavbar userName={user.name} />
            <Box sx={{ p: "2rem", display: 'flex', alignItems: 'center', flexDirection: "column" }}>
            </Box>

        </Box >
    )
}

export default SavedPassword;

