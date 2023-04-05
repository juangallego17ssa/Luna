import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"
import StarRating from "../../Componets/StarsRating/starsRating";
import { WriteReviewDiv, 
    WriteReviewForm, 
    WriteReviewRating, 
    WriteReviewStars,
    WriteReviewStarsLabel, 
    WriteReviewContent, 
    WriteReviewFoot, 
    SubmitButton, 
    RequiredField} from "./writeReview.styled";
import { axiosWithToken } from "../../Axios/axios";
// import { axiosWithToken } from "../../Axios/axios";






const RestaurantWriteReview = () => {


    //// controlled form
    // rating input
    const [rating, setRating] = useState();
    const handleRatingChange = event => {
        setRating(event.target.value);
    };
    // review input
    const [review, setReview] = useState("");
    const handleReviewChange = event => {
        setReview(event.target.value);
    };
    // required alert
    const [showRequired, setShowRequired] = useState(false);

    // get the id
    const [showMap, setShowMap, restaurantID] = useOutletContext();
    setShowMap(false)

    //// handle the button submit
    const navigate = useNavigate()
    const handleSubmit = async(event) => {
        
        event.preventDefault();


        // Check the form
        if (review === "") {
            setShowRequired(true)
            return
        }
        
        // Prepare the request for login in and getting the token
        const myBody = JSON.stringify({
            text_content: review,
            rating: 5,
        });
        const myConfig = {
            method: "post",
            data: myBody,
        };


        // Fetch the data and save the token in the local storage
        try {
            const response = (await axiosWithToken(`/reviews/new/${restaurantID}/`, myConfig)).data;
            setShowMap(true)
            navigate(`/restaurant/${restaurantID}`)
        } catch (exception) {
            window.alert("Error!")
            console.log(exception)
        }
    
        console.log("Submit")
    
    
    }



    return (
        <WriteReviewDiv>

            <WriteReviewForm onSubmit= {(event)=>event.preventDefault()}>

                <WriteReviewRating>
                    <WriteReviewStars><StarRating onChange={handleRatingChange}></StarRating></WriteReviewStars>
                    <WriteReviewStarsLabel>Select your rating</WriteReviewStarsLabel>
                </WriteReviewRating>    
                <WriteReviewContent onChange={handleReviewChange}></WriteReviewContent>
                <WriteReviewFoot>
                    <div>{ showRequired ? <RequiredField>This field is required</RequiredField> : <></>} </div>
                    <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
                </WriteReviewFoot>
            
            </WriteReviewForm>
        
        </WriteReviewDiv>
    )
}

export default RestaurantWriteReview;