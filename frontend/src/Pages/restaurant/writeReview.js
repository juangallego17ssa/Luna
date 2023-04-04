import { WriteReviewDiv, WriteReviewForm, WriteReviewRating, WriteReviewStars, WriteReviewStarsLabel, WriteReviewContent, WriteReviewFoot } from "./restaurant.styled";



const RestaurantWriteReview = () => {

  
    return (
        <WriteReviewDiv>

            <WriteReviewForm>

                <WriteReviewRating>
                    <WriteReviewStars></WriteReviewStars>
                    <WriteReviewStarsLabel>Select your rating</WriteReviewStarsLabel>
                </WriteReviewRating>
                <WriteReviewContent></WriteReviewContent>
                <WriteReviewFoot>
                </WriteReviewFoot>
            
            </WriteReviewForm>
        
        </WriteReviewDiv>
    )
}

export default RestaurantWriteReview;