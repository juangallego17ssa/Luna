import React, { useState, useEffect } from "react";
import UserProfile from "../userProfile/userProfile";

const ProfileEdit = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <div>
      <UserProfile>edit profile</UserProfile>
    </div>
  );
};
export default ProfileEdit;
