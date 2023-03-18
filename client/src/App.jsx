/* NODE MODULES */
import React, { useMemo } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from './theme.js'
import { useSelector } from 'react-redux'
import ErrorPage from '@/pages/ErrorPage/ErrorPage.jsx'
import HomePage from '@/pages/HomePage/HomePage.jsx'
import LoginPage from '@/pages/LoginPage/LoginPage.jsx'
import SavedPassword from './pages/SavedPassword/SavedPassword.jsx'
import SignUp from './pages/LoginPage/SignUp.jsx'

const App = () => {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));



  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path='/' element={isAuth ? <Navigate to={'/home'} /> : < LoginPage />} />
              <Route path='/home' element={isAuth ? < HomePage /> : <Navigate to={'/'} />} />
              <Route path='/register' element={isAuth ? < SignUp /> : <Navigate to={'/'} />} />
              <Route path='/saved' element={isAuth ? < SavedPassword /> : <Navigate to={'/'} />} />

              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App