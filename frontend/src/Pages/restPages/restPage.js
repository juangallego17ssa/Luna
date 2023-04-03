// STYLED IMPORTS
import { EntirePageDiv, RestaurantPageBody } from "./restPage.styled"

// COMPONENTS IMPORTS
import Navbar from '../../Componets/Layout/Header/navbar';
import Footer from '../../Componets/Layout/Footer/footer';

// eslint-disable-next-line react-hooks/rules-of-hooks
function RestPage() {

return (
  <div>
      
    <Navbar/>
      <EntirePageDiv>
        <RestaurantPageBody>Hello World</RestaurantPageBody> 
      </EntirePageDiv>
    <Footer/>
      
  </div>
);
}

export default RestPage;