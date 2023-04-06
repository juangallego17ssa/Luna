import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavbarContDiv,
  NavbarLogoContDiv,
  NavbarButtonsContDiv,
  NavbarLogoPageTabsDiv,
  NavbarSignUpButtonGroupsDiv,
} from "../Header/navbar.styles";

function Navbar() {
  const [activePage, setActivePage] = useState("/");
  const currentURL = window.location.href;
  useEffect(() => {
    // console.log("use effect on the navbar triggered")
    if (currentURL.includes("search")) {
      console.log("current active page: search");
      setActivePage("Search");
    } else if (currentURL.includes("profile")) {
      console.log("current active page: profile");
      setActivePage("Profile");
    } else if (currentURL.includes("createRestaurant")) {
      console.log("current active page: create new res");
      setActivePage("createRestaurant");
    } else {
      console.log("current active page: Home");
      setActivePage("/");
    }
  }, [activePage, currentURL]);

  const navigate = useNavigate();

  const handleNavHome = () => navigate("/");
  const handleNavSearch = () => navigate("/search/restaurant");
  const handleNavProfile = () => navigate("/profile");

  const handleLogout = () => {
    
    localStorage.removeItem("access-token");
    console.log(
      "I am from the Local Storage after logout" +
        localStorage.getItem("access-token")
    );
    navigate("/");
  };


  // Render
  return (
    <NavbarContDiv>
      <NavbarLogoContDiv>
        <img
          alt="Luna Logo"
          src={require("../../../Assets/svg/logo.svg").default}
        />
      </NavbarLogoContDiv>
      <NavbarButtonsContDiv>
        <NavbarLogoPageTabsDiv
          onClick={() => navigate("/createRestaurant")}
          className={
            activePage === "createRestaurant" ? "active" : "not-active"
          }
        >
          <span>Create Restaurant</span>
        </NavbarLogoPageTabsDiv>
        <NavbarLogoPageTabsDiv
          onClick={handleNavHome}
          className={activePage === "/" ? "active" : "not-active"}
        >
          <span>Home</span>
        </NavbarLogoPageTabsDiv>
        <NavbarLogoPageTabsDiv
          onClick={handleNavSearch}
          className={activePage === "Search" ? "active" : "not-active"}
        >
          <span>Search</span>
        </NavbarLogoPageTabsDiv>
        <NavbarLogoPageTabsDiv
          onClick={handleNavProfile}
          className={activePage === "Profile" ? "active" : "not-active"}
        >
          <span>Profile</span>
        </NavbarLogoPageTabsDiv>
        <NavbarSignUpButtonGroupsDiv>
          <button onClick={() => navigate("/registration")}>SIGNUP</button>
          {!localStorage.getItem("access-token") ? (
            <button onClick={() => navigate("/login")}>LOGIN</button>
          ) : (
            <button onClick={handleLogout}>LOGOUT</button>
          )}
        </NavbarSignUpButtonGroupsDiv>
      </NavbarButtonsContDiv>
    </NavbarContDiv>
  );
}

export default Navbar;
