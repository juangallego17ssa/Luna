// BASE IMPORTS
import { React, useEffect, useState } from "react";

// STYLED IMPORTS
import { UserGrid } from "./userPage.styled";

// COMPONENTS IMPORTS
import RestaurantCard from "../../../Componets/restaurant/restaurantCard";
import { axiosWithToken } from "../../../Axios/axios";
import { v4 as uuid } from "uuid";
import UserCard from "../../../Componets/userCard/userCard";



// eslint-disable-next-line react-hooks/rules-of-hooks
function UserPage() {
  const [userData, setUserData] = useState([]);
  

  const getAllUsers = async () => {
    try {
      const response = await axiosWithToken.get(`users/list/`);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      return;
    }

    getAllUsers();
  }, []);

  return (
    <UserGrid>
      {userData.map((user) => {
        return <UserCard key={uuid()} user={user} />;
      })}
    </UserGrid>
  );
}

export default UserPage;
