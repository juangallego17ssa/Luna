import Navbar from "../../Componets/Layout/Header/navbar";
import Login from "../../Componets/authComponents/login"
import Footer from '../../Componets/Layout/Footer/footer'
import { SiteWrapper } from "./authPages.styled";



const LoginPage = () => {
  return (
    <SiteWrapper>
      <Navbar/>
      <Login />
      <Footer/>
    </SiteWrapper>
  )
}

export default LoginPage;