import Footer from "../../Componets/Layout/Footer/footer";
import Navbar from "../../Componets/Layout/Header/navbar";
import Registration from "../../Componets/authComponents/registration";
import { SiteWrapper } from "./authPages.styled";


const RegistrationPage = () => {
  return (
    <SiteWrapper>
      <Navbar/>
      <Registration />
      <Footer/>
    </SiteWrapper>
    
  );
};

export default RegistrationPage;
