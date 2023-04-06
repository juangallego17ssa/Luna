import React, { useState, useEffect } from "react";
import {
  EditUserProfileWrapper,
  SubmitButton,
  InputText,
  DescriptionContent,
  RequiredField,
} from "./editprofile.styled";
import { axiosWithToken, axiosWithoutToken } from "../../../Axios/axios";

const EditUserProfile = ({ onSave }) => {
  //const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  const [showRequired, setShowRequired] = useState(false);

  useEffect(() => {
    axiosWithToken
      .get("me/")
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("profile");
    console.log(profile);

    // Check the form
    if (profile.username === "") {
      setShowRequired(true);
      return;
    }

    const myBody = JSON.stringify({
      username: profile.username,
      first_name: profile.first_name,
      last_name: profile.last_name,
      email: profile.email,
      location: profile.location,
      phone: profile.phone,
      things_i_love: profile.things_i_love,
      description: profile.description,
    });
    console.log("my body");
    console.log(myBody);
    const myConfig = {
      method: "patch",
      data: myBody,
    };

    // Fetch the data and save the token in the local storage
    try {
      const response = (await axiosWithToken(`/me/`, myConfig)).data;
      // setShowMap(true);
      // navigate(`/restaurant/${restaurantID}`);
    } catch (exception) {
      window.alert("Error!");
      console.log(exception);
    }

    console.log("Submit");
  };

  const handleTodoChange = (event) => {
    let newProfileCopy = { ...profile };
    newProfileCopy[event.target.id] = event.target.value;
    setProfile(newProfileCopy);
  };

  return (
    <EditUserProfileWrapper>
      <h1 className="title">EDIT USERPROFILE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <h1 className="subtitle">Username</h1>
          {showRequired ? (
            <RequiredField>This field is required</RequiredField>
          ) : (
            <></>
          )}
        </label>
        <input
          type="text"
          id="username"
          value={profile.username ? profile.username : ""}
          placeholder={profile.username ? profile.username : ""}
          onChange={(event) => handleTodoChange(event)}
        />

        <label htmlFor="first-name">
          <h1 className="subtitle">First name</h1>
        </label>
        <input
          type="text"
          id="first_name"
          value={profile.first_name ? profile.first_name : ""}
          placeholder={profile.first_name ? profile.first_name : ""}
          onChange={(event) => handleTodoChange(event)}
        />

        <label htmlFor="last-name">
          <h1 className="subtitle">Last name</h1>
        </label>
        <input
          type="text"
          id="last_name"
          value={profile.last_name ? profile.last_name : ""}
          placeholder={profile.last_name ? profile.last_name : ""}
          onChange={(event) => handleTodoChange(event)}
        />

        <label htmlFor="email">
          <h1 className="subtitle">E-Mail</h1>
        </label>
        <input
          type="email"
          id="email"
          value={profile.email ? profile.email : ""}
          placeholder={profile.email ? profile.email : ""}
          onChange={(event) => handleTodoChange(event)}
        />

        <label htmlFor="location">
          <h1 className="subtitle">Location</h1>
        </label>
        <input
          type="text"
          id="location"
          value={profile.location ? profile.location : ""}
          placeholder={profile.location ? profile.location : ""}
          onChange={(event) => handleTodoChange(event)}
        />

        <label htmlFor="phone">
          <h1 className="subtitle">Phone</h1>
        </label>
        <input
          type="text"
          id="phone"
          value={profile.phone ? profile.phone : ""}
          placeholder={profile.phone ? profile.phone : ""}
          onChange={(event) => handleTodoChange(event)}
        />

        <label htmlFor="things-i-love">
          <h1 className="subtitle">Things I love</h1>
        </label>
        <input
          type="text"
          id="things_i_love"
          value={profile.things_i_love ? profile.things_i_love : ""}
          placeholder={profile.things_i_love ? profile.things_i_love : ""}
          onChange={(event) => handleTodoChange(event)}
        />

        <label htmlFor="description">
          <h1 className="subtitle">Description</h1>
        </label>
        <DescriptionContent
          id="description"
          name="description"
          rows="2"
          cols="20"
          value={profile.description ? profile.description : ""}
          placeholder={profile.description ? profile.description : ""}
          onChange={(event) => handleTodoChange(event)}
        ></DescriptionContent>

        <div>
          <SubmitButton type="submit" onClick={handleSubmit}>
            Save
          </SubmitButton>
        </div>
      </form>
    </EditUserProfileWrapper>
  );
};
export default EditUserProfile;
