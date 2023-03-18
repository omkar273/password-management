import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField, InputBase, Container, FormControlLabel, Checkbox, Link, Grid, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, useTheme } from '@mui/material/styles';
import axios from 'axios';


const SignUp = ({ setpageType = 'register' }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const body = {
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('firstName')
        }
        const getRes = async () => {
            try {
                const res = await axios.post('http://localhost:5000/auth/register', body)
                const resJson = await res.data;
                console.log(`name : ${resJson.name}`);
                setpageType('login')
            } catch (error) {
                console.log(`error in sign  up : ${error}`);
            }
        }

        getRes()
        alert('user registration sucess');

    };


    const { palette } = useTheme();

    return (
        <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'rgba(0,18,24,0.75)', color: 'white' }}>
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
                <Typography component="h1" variant="h5" color={palette.secondary.light}>
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <InputBase
                                sx={{ input: { color: 'whitesmoke' }, border: '1px solid white', borderRadius: '0.5rem', p: '0.5rem' }}
                                margin="normal"
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputBase
                                sx={{ input: { color: 'whitesmoke' }, border: '1px solid white', borderRadius: '0.5rem', p: '0.5rem' }}
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputBase
                                sx={{ input: { color: 'whitesmoke' }, border: '1px solid white', borderRadius: '0.5rem', p: '0.5rem' }}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputBase
                                sx={{ input: { color: 'whitesmoke' }, border: '1px solid white', borderRadius: '0.5rem', p: '0.5rem' }}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;