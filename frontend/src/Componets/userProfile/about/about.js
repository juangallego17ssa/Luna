import React, { useState, useEffect } from "react";
import { AboutWrapper, AboutText } from "./about.styled.js";
import { axiosWithToken, axiosWithoutToken } from "../../../Axios/axios";

export default function About() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axiosWithToken
      .get("me/")
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (profile.date_joined) {
    const date = new Date(profile.date_joined);
    const options = { year: "numeric", month: "long" };
    console.log("EXAMPLE");
    profile.date_joined = date.toLocaleString("en-US", options);
  }
  return (
    <>
      <AboutText
        firstName={profile.first_name ? profile.first_name : ""}
        location={profile.location ? profile.location : ""}
        joined_date={profile.date_joined ? profile.date_joined : ""}
        things_i_love={profile.things_i_love ? profile.things_i_love : ""}
        description={profile.description ? profile.description : ""}
      />
    </>
  );
}
