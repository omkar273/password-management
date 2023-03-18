import UniversalNavbar from '@/ui/components/UniversalNavbar'
import { Email } from '@mui/icons-material';
import { Box, TextField, Typography, useTheme } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import SavedPassword from '../SavedPassword/SavedPassword';

const HomePage = () => {

    const user = useSelector((s) => s.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { palette } = useTheme();

    const [isDataChanged, setisDataChanged] = useState(false)
    const [webUrl, setwebUrl] = useState("")
    const [password, setpassword] = useState("")

    const addPlainPassword = async () => {
        console.log(`add plain password called`);
        try {

            if (webUrl.length == 0 || password == 0) {
                alert('please enter the data in field');
                return
            }

            const body = {
                "id": user._id,
                "web_url": webUrl,
                "web_password": password
            }

            const server_url = `http://localhost:5000/user/${user._id}/savePlain`

            const res = await axios.post(server_url, body);
            const resJson = await res.data;
            setisDataChanged(!isDataChanged)

        } catch (error) {
            console.log(`error in loggin : ${error}`);
        }
    }
    const addHashedPassword = async (saveType = 'plain') => {
        console.log(`add hashed password called`);
        try {
            if (webUrl.length == 0 || password == 0) {
                alert('please enter the data in field');
                return
            }

            const body = {
                "id": user._id,
                "web_url": webUrl,
                "web_password": password
            }

            const server_url = `http://localhost:5000/user/${user._id}/saveHashed`

            const res = await axios.post(server_url, body);
            const resJson = await res.data;
            setisDataChanged(!isDataChanged)
        } catch (error) {
            console.log(`error in loggin : ${error}`);
        }
    }




    return (
        < Box sx={{
            display: 'block', flexFlow: 'column nowrap', flexGrow: 1
        }}>

            <Box sx={{ position: 'sticky', top: 0, zIndex: "150" }}>
                <UniversalNavbar userName={user.name} />
            </Box>
            <Box sx={{ display: 'flex', width: '100%', backgroundColor: palette.secondary.light }} >
                <Box sx={{ width: '20%', backgroundColor: palette.secondary.dark, height: '100%', p: '1.5rem 0.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'sticky', bottom: 0, top: 0, zIndex: 0 }}>

                </Box>
                <Box sx={{ width: '80%', backgroundColor: palette.secondary.light, height: '100%' }}>

                    <Box>
                        <Box sx={{ display: "flex", justifyContent: 'center', gap: '1rem', pt: '1.5rem' }}>

                            <TextField
                                label="Web URl"
                                sx={{ width: '40%' }}
                                onChange={(e) => setwebUrl(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                sx={{ width: '40%' }}
                                onChange={(e) => setpassword(e.target.value)}
                            />

                        </Box>
                        <Box
                            sx={{ display: "flex", flexFlow: "column w", justifyContent: 'center', gap: '1rem', pt: '0.5rem' }}>

                            <Typography
                                onClick={() => addPlainPassword()}
                                sx={{
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    fontFamily: 'Play',
                                    fontSize: 'clamp(1rem ,1rem,1.5rem)',
                                    color: palette.primary.contrastText,
                                    backgroundColor: palette.primary.light,
                                    padding: '0.5rem',
                                    borderRadius: '0.5rem',
                                    px: '1rem',

                                }}>
                                Add Plain password
                            </Typography>

                            <Typography
                                onClick={() => addHashedPassword('hashed')}
                                sx={{
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    fontFamily: 'Play',
                                    fontSize: 'clamp(1rem ,1rem,1.5rem)',
                                    color: palette.primary.contrastText,
                                    backgroundColor: palette.primary.light,
                                    padding: '0.5rem',
                                    borderRadius: '0.5rem',
                                    px: '1rem',

                                }}>
                                Add Hashed password
                            </Typography>

                        </Box>
                    </Box>

                    <SavedPassword isDataChanged={isDataChanged} />
                </Box>
            </Box>
        </ Box >
    )
}

export default HomePage