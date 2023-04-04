import React, { useState } from "react";
import { AboutWrapper, AboutText } from "./about.styled.js";

export default function About() {
  const [banner, setBanner] = useState("");
  const [firstName, setFirstName] = useState("Laurent");
  const [lastName, setLasttName] = useState("Heron");
  const [location, setLocation] = useState("Zurich, CH");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [thingsIlove, setNumberComments] = useState(["baking", "coking"]);
  const [joinedDate, setNumberReviews] = useState("April, 2018");

  return (
    <>
      <AboutText
        firstName={firstName}
        location={location}
        joined_date={joinedDate}
        things_i_love={thingsIlove}
        description={description}
      />
    </>
  );
}
