import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../Pages/home/homepage'
import LoginPage from '../../Pages/authPages/loginPage'



const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<LoginPage/>}/>

    </Routes>
  )
}

export default Home