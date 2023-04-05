import React, { useState, useEffect } from "react";
import UserProfile from "../userProfile/userProfile";

const ProfileEdit = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return <div>Edit Profile</div>;
};
export default ProfileEdit;
