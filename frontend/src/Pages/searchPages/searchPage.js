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
// import Reviews from "../../Componets/Reviews/Reviews"
// import CreateReview from "../../Componets/CreateReview/createReview"
// import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
// import SimpleReviewCard from "../../components/SimpleReviewCard/SimpleReviewCard";
// import SimpleUserCard from "../../components/SimpleUserCard/SimpleUserCard";

// eslint-disable-next-line react-hooks/rules-of-hooks
function SearchPage() {

  return (
    <div className="App">
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
            <SearchPageContentDiv>

            </SearchPageContentDiv>


            {/* <CreateRestaurant /> */}
                
            <Footer/>
        </EntirePageDiv>
    </div>
  );
}

export default SearchPage;