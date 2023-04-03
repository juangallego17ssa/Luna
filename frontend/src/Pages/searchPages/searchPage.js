// STYLED IMPORTS
import {
    EntirePageDiv,
    SubNavigationDiv,
    NavigationDiv,
    SearchPageContentDiv,
    SearchBarInput, RestaurantGrid
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
                    <h3>RESTAURANTS</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 >REVIEWS</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 >USERS</h3>
                </SubNavigationDiv>
            </NavigationDiv>
            <RestaurantGrid>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </RestaurantGrid>
            <Footer/>
        </EntirePageDiv>
  );
}

export default SearchPage;