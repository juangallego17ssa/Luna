import React from 'react'
import { SiteWrapper } from './createRestaurant.styled'
import Navbar from '../../Componets/Layout/Header/navbar'
import Footer from '../../Componets/Layout/Footer/footer'
import CreateRestaurantComp from '../../Componets/createRestaurant/createRestaurantComp'

const CreateRestaurant = () => {
  return (
    <SiteWrapper>
      <Navbar/>
      <CreateRestaurantComp />
      <Footer/>
    </SiteWrapper>
  )
}

export default CreateRestaurant