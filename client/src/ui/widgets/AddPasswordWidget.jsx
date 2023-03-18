import UniversalNavbar from '@/ui/components/UniversalNavbar'
import { Email } from '@mui/icons-material';
import { Box, TextField, Typography, useTheme } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddPasswordWidget =
    ({ setwebUrl, setpassword, addPlainPassword, addHashedPassword }) => {

        return (
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
        )
    }

export default AddPasswordWidget