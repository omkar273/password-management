import { AppBar, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'

const NavBar = ({ setpageType }) => {
    const { palette } = useTheme();
    return (
        <AppBar sx={{
            p: '0.5rem 6%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: 'static',
            top: 0,
        }}>
            <Typography
                sx={{
                    fontFamily: 'Play',
                    fontSize: 'clamp(1rem ,1.75rem,2.5rem)',
                    cursor: 'pointer',
                    "&:hover": {

                        color: palette.secondary.light
                    }
                }}>
                Password Manager
            </Typography>
            <Toolbar sx={{
                display: 'flex',
                gap: '1rem'
            }}>
                <Typography
                    onClick={() => setpageType('register')}
                    sx={{
                        fontFamily: 'Play',
                        fontSize: 'clamp(1rem ,1rem,1.5rem)',
                        borderRight: '2px solid white',
                        pr: '1rem',
                        cursor: 'pointer',
                    }}>
                    Register
                </Typography>
                <Typography
                    onClick={() => setpageType('login')}
                    sx={{
                        cursor: 'pointer',
                        fontFamily: 'Play',
                        fontSize: 'clamp(1rem ,1rem,1.5rem)'
                    }}>
                    Login
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar