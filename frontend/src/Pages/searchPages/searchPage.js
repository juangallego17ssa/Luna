// STYLED IMPORTS
import {
    EntirePageDiv,
    SubNavigationDiv,
    NavigationDiv,
    SearchPageContentDiv,
    SearchBarInput
} from './searchPage.styled';

// COMPONENTS IMPORTS
import Navbar from '../../Componets/Layout/Header/navbar';
import Footer from '../../Componets/Layout/Footer/footer';
import RestaurantCard from "../../Componets/restaurant/restaurantCard";



// eslint-disable-next-line react-hooks/rules-of-hooks
function SearchPage() {

  return (
        <EntirePageDiv>
            <Navbar/>
            <SearchBarInput/>
            <NavigationDiv>
                <SubNavigationDiv>
                    <h3>Restaurants</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 >Reviews</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 >Users</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 >Create Review</h3>
                </SubNavigationDiv>
            </NavigationDiv>
            <RestaurantCard/>
            <Footer/>
        </EntirePageDiv>
  );
}

export default SearchPage;