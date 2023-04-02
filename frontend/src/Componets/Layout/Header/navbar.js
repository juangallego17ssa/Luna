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
  const handleNavSearch = () => navigate("/search");
  const handleNavProfile = () => navigate("/profile");

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
          <button>SIGNUP</button>
          <button onClick={() => navigate("/access")}>LOGIN</button>
        </NavbarSignUpButtonGroupsDiv>
      </NavbarButtonsContDiv>
    </NavbarContDiv>
  );
}

export default Navbar;
