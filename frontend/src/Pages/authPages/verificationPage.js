import React from 'react'
import Verification from '../../Componets/authComponents/verification'
import { SiteWrapper } from './authPages.styled'
import Navbar from '../../Componets/Layout/Header/navbar'
import Footer from '../../Componets/Layout/Footer/footer'

const VerificationPage = () => {
  return (
    <SiteWrapper>
      <Navbar/>
      <Verification />
      <Footer/>
    </SiteWrapper>
  )
}

export default VerificationPage