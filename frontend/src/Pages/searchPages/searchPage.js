// BASE IMPORTS
import { React } from "react";
import {useEffect, useState} from 'react';

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

// import { axiosWithToken } from "../../Axios/axios";


// import Reviews from "../../Componets/Reviews/Reviews"
// import CreateReview from "../../Componets/CreateReview/createReview"
// import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
// import SimpleReviewCard from "../../components/SimpleReviewCard/SimpleReviewCard";
// import SimpleUserCard from "../../components/SimpleUserCard/SimpleUserCard";

// eslint-disable-next-line react-hooks/rules-of-hooks
function SearchPage() {

        // const [searchField, setSearchField] = useState("");
    const [currentComponent, setCurrentComponent] = useState("REST");
    const [currentContent, setCurrentContent]=useState(undefined);
    const goToRestaurants = (e) => {
        setCurrentComponent("REST")
    }
    const goToReviews = (e) => {
        setCurrentComponent("REVI")
    }
    const goToUsers = (e) => {
        setCurrentComponent("USER")
    }
    const goToCreateReview = (e) => {
        setCurrentComponent("CREA")
    }

    // const fetchContent = async () =>{
    //     let url="https://lunateam3.propulsion-learn.ch/backend/api/restaurants"
    //     if (currentComponent==="REST"){
    //         url="https://lunateam3.propulsion-learn.ch/backend/api/users/?search="+searchField+"&type=restaurants"
    //     }else if(currentComponent==="REVI"){
    //         url="https://lunateam3.propulsion-learn.ch/backend/api/users/?search="+searchField+"&type=reviews"
    //     }else{
    //         url="https://lunateam3.propulsion-learn.ch/backend/api/users/?search="+searchField+"&type=users"
    //     }
    //     console.log("current url is "+ url)
    //     return fetch(url, axiosWithToken("GET"))
    //         .then(response=>{
    //             return response.json()
    //         })
    //         .then(data=>{
    //             console.log(data)
    //             if (data){
    //                 setCurrentContent(data)
    //             }
    //         })
    // }

    //     useEffect(()=>{
    //     console.log("passContentToContainer")
    //     if (currentContent){
    //         if (currentComponent==="REST"){
    //             return currentContent.map(content=><RestaurantCard res={content}></RestaurantCard>)
    //         }else if(currentComponent==="REVI"){
    //             return currentContent.map(content=><SimpleRevCard review={content}></SimpleRevCard>)
    //         }else if (currentComponent==="USER"){
    //             return currentContent.map(content=><SimpleUserCard user_or_review={content}></SimpleUserCard>)
    //         }else if (currentComponent==="CREA"){
    //             return currentContent.map(content=><CreateReview user_or_review={content}></CreateReview>)
    //         }
    //     }
    // })

    // useEffect(()=>{
    //     console.log("search page: about to run fetch content again")
    //     fetchContent()

    // },[currentComponent])

  return (
        <EntirePageDiv>
            <Navbar/>
            {/* <SearchBarInput onChange={(e) => setSearchField(e.target.value)}/> */}
            <SearchBarInput/>
            <NavigationDiv>
                <SubNavigationDiv>
                    {/* <h3 onClick={goToRestaurants}>Restaurants</h3> */}
                    <h3>RESTAURANTS</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    {/* <h3 onClick={goToReviews}>Reviews</h3> */}
                    <h3>REVIEWS</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    {/* <h3 onClick={goToUsers}>Users</h3> */}
                    <h3>USERS</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    {/* <h3 onClick={goToCreateReview}>Create Review</h3> */}
                    {/* <h3>goToCreatereview</h3> */}
                </SubNavigationDiv>
            </NavigationDiv>
            <SearchPageContentDiv>
            </SearchPageContentDiv>
            <Footer/>
        </EntirePageDiv>
  );
}

export default SearchPage;
