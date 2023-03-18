import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SavedPassword = ({ isDataChanged }) => {

    const user = useSelector((state) => state.user);
    const [plainSavedPassword, setplainSavedPassword] = useState([])
    const [hashedSavedpassword, sethashedSavedpassword] = useState([])
    useEffect(() => {
        console.log(`useeffect called`);
        const getRes = async () => {
            try {
                const server_url = `http://localhost:5000/user/${user._id}`
                const res = await axios.get(server_url);
                const resJson = await res.data;
                setplainSavedPassword(resJson.savedPlainPassword);
                sethashedSavedpassword(resJson.savedHashedPassword);
                console.log(`data of saved passwords fetched ${resJson.savedHashedPassword}`);
            } catch (error) {
                console.log(`error in getting data ${error}`);
            }
        }
        getRes();
    }, [isDataChanged])

    return (
        <Box mt={'2.5rem'}>
            {plainSavedPassword.map((element) => {
                console.log(`rendered frpm map  ${element.web_password}`)
                return <DataRow pass={element.web_password} url={element.web_url} />
            })}
            {hashedSavedpassword.map((element) => {
                console.log(`rendered frpm map  ${element.web_password}`)
                return <DataRow url={element.web_url} pass={element.hashedPassword} />
            })}
        </Box>
    )
}

export default SavedPassword;

const DataRow = ({ url, pass }) => {

    return (
        <Box sx={{ backgroundColor: 'white', p: '0.75rem  1.5rem', mb: '0.25rem', mx: '15%', borderRadius: '0.5rem', display: 'flex', gap: "0.5rem", fontFamily: 'Play', fontSize: '1.25rem', }}>
            <Typography width={'60%'} sx={{}}>
                {url}
            </Typography>
            <Typography width={'40%'} sx={{ overflowWrap: 'break-word' }}>
                {pass}
            </Typography>
        </Box >
    )

}