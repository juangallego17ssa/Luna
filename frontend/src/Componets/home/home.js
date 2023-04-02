import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../Pages/home/homepage'
import LoginPage from '../../Pages/authPages/loginPage'
import RegistrationPage from '../../Pages/authPages/registrationPage'
import VerificationPage from '../../Pages/authPages/verificationPage'



const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/verification" element={<VerificationPage />} />
    </Routes>
  )
}

export default Home