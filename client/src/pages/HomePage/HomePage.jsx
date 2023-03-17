import UniversalNavbar from '@/ui/components/UniversalNavbar';
import { Box, Input, InputBase, Typography, useTheme } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fullname = (user.name);
    const { palette } = useTheme();


    const [webURl, setwebURl] = useState("");
    const [password, setpassword] = useState("")


    const addPass = async () => {
        try {
            const body = {
                "id": user._id,
                "web_url": webURl,
                "web_password": password
            }

            console.log(`url : ${webURl}  pass : ${password}    http://localhost:5000/${user._id}/savePlain`);
            const res = await axios.post(`http://localhost:5000/user/${user._id}/savePlain`, body)
            console.log(`${res}`);
            alert('password saved')
        } catch (error) {
            console.log(`error in saving password : ${error}`);

        }
    }

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <UniversalNavbar userName={fullname} />

            <Box sx={{ display: 'flex', height: '100%', flexGrow: 1 }}>


                <Box sx={{ width: '20%', height: '90vh', backgroundColor: '#255252', display: 'flex', pt: '3rem' }}>
                </Box>
                <Box sx={{ flexGrow: 1, height: '90vh', backgroundColor: '#A6DDDD', display: 'flex', justifyContent: 'center', pt: '2rem', flexDirection: 'column' }}>
                    <Box display={'flex'} sx={{ gap: '1rem', alignItems: 'center', pl: '5rem' }}>
                        <Input
                            placeholder='Enter the url'
                            sx={{
                                backgroundColor: 'whitesmoke',
                                height: '2rem',
                                p: '1.25rem '
                            }} onChange={(e) => {
                                setwebURl(e.target.value)
                                console.log(`${webURl}`);
                            }}>
                        </Input>

                        <Input
                            placeholder='Password to save'
                            sx={{
                                backgroundColor: 'whitesmoke',
                                height: '2rem',
                                p: '1.25rem '
                            }}
                            onChange={(e) => setpassword(e.target.value)}>

                        </Input>
                        <Box
                            onClick={() => addPass()}
                            sx={{
                                display: 'flex',
                                gap: '0.75rem',
                                alignItems: 'center ',
                                backgroundColor: palette.primary.light,
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                px: '1rem',
                                height: '3rem'
                            }}>

                            <Typography
                                sx={{
                                    cursor: 'pointer',
                                    fontFamily: 'Play',
                                    fontSize: 'clamp(1rem ,1rem,1.5rem)',
                                    color: 'whitesmoke'
                                }}>
                                Add password
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => dispatch(navigate('/saved'))}
                            sx={{
                                display: 'flex',
                                gap: '0.75rem',
                                alignItems: 'center ',
                                backgroundColor: palette.primary.light,
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                px: '1rem',
                                height: '3rem'
                            }}>

                            <Typography
                                sx={{
                                    cursor: 'pointer',
                                    fontFamily: 'Play',
                                    fontSize: 'clamp(1rem ,1rem,1.5rem)',
                                    color: 'whitesmoke'
                                }}>
                                See all Password
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default HomePage

