// BASE IMPORTS
import { React, useEffect, useState } from "react";

// STYLED IMPORTS
import { ReviewGrid } from "./reviewPage.styled";

// COMPONENTS IMPORTS
import { axiosWithToken } from "../../../Axios/axios";
import { v4 as uuid } from "uuid";
import SimpleRevCard from '../../../Componets/SimpleReviewCard/SimpleRevCard'


// eslint-disable-next-line react-hooks/rules-of-hooks
function ReviewPage() {
  const [reviewtData, setReviewData] = useState([]);

  const getAllReviews = async () => {
    try {
      const response = await axiosWithToken.get(`/reviews/restaurant/1/`);
      setReviewData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      return;
    }

    getAllReviews();
  }, []);

  return (
    <ReviewGrid>
      {reviewtData.map((review) => {
        return <SimpleRevCard key={uuid()} review={review} />;
      })}
    </ReviewGrid>
  );
}

export default ReviewPage;
