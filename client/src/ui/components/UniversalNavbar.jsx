import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { setLogout } from '@/redux_store/store';

const UniversalNavbar = ({ userName = 'Tejas' }) => {
    const { palette } = useTheme();
    const dispatch = useDispatch();

    return (
        <AppBar
            sx={{
                p: '1rem 6%',
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
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center ',
                    backgroundColor: palette.primary.light,
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    px: '1rem'
                }}>
                    <IconButton sx={{ fontSize: '2rem', color: "whitesmoke", padding: 0 }}>
                        <AccountCircleIcon sx={{ fontSize: '2rem', color: "whitesmoke", padding: 0 }} />
                    </IconButton>
                    <Typography
                        sx={{
                            cursor: 'pointer',
                            fontFamily: 'Play',
                            fontSize: 'clamp(1rem ,1rem,1.5rem)'
                        }}>
                        {userName}
                    </Typography>
                </Box>
                <Box
                    onClick={() => dispatch(setLogout())}
                    sx={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center ',
                        backgroundColor: palette.primary.light,
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        px: '1rem',
                    }}>
                    {/* <IconButton sx={{ fontSize: '2rem', color: "whitesmoke", padding: 0 }}>
                        <AccountCircleIcon sx={{ fontSize: '2rem', color: "whitesmoke", padding: 0 }} />
                    </IconButton> */}
                    <Typography
                        sx={{
                            cursor: 'pointer',
                            fontFamily: 'Play',
                            fontSize: 'clamp(1rem ,1rem,1.5rem)'
                        }}>
                        Logout
                    </Typography>
                </Box>
            </Box>
        </AppBar>
    )
}

export default UniversalNavbar;