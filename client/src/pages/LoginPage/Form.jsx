import React from 'react'
import { Link, Grid, Box, Avatar, Button, FormControlLabel, TextField, Container, Checkbox, useTheme, InputBase } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { setLogin } from '@/redux_store/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Form = ({ pageType = 'login' }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(`handle submit called`);
            const data = new FormData(event.currentTarget);
            console.log({
                email: data.get('email'),
                password: data.get('password'),
            });
            const body = ({
                email: data.get('email'),
                password: data.get('password'),
            })
            const response = await axios.post('http://localhost:5000/auth/login', body);
            const resJson = await response.data;

            if (resJson) {
                dispatch(setLogin({
                    user: resJson.user,
                    token: resJson.token
                }))

                navigate('/home');

            } else {
                alert('user logged in failed')
            }
            console.log(`response : ${resJson.token}`);

        } catch (error) {
            console.log(`error in loggin : ${error}`);
        }
    };


    const { palette } = useTheme();

    return (
        <Box sx={{ padding: '1.5rem 1rem', borderRadius: '1rem', backgroundColor: 'rgba(0,18,24,0.75)' }}>
            {(pageType === 'login') ? (<Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                        <Box>
                            <InputBase
                                sx={{ input: { color: 'whitesmoke' }, border: '1px solid white', borderRadius: '0.5rem', p: '0.5rem' }}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </Box>
                        <InputBase
                            sx={{ input: { color: 'whitesmoke' }, border: '1px solid white', borderRadius: '0.5rem', p: '0.5rem' }}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color='secondary' />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, p: '1rem' }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>) : (<div></div>)}
        </Box>
    )
}

export default Form;




