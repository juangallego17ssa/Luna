import React, { useState } from "react";
import { EditUserProfileWrapper, SubmitButton } from "./editprofile.styled";

const EditUserProfile = ({ onSave }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [things_i_love, setThings] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      location: location,
      phone: phone,
      things_i_love: things_i_love,
      description: description,
    });
  };
  return (
    <EditUserProfileWrapper>
      <h1 className="title">EDIT USERPROFILE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <h1 className="subtitle">Username</h1>
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="first-name">
          <h1 className="subtitle">First name</h1>
        </label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">
          <h1 className="subtitle">Last name</h1>
        </label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">
          <h1 className="subtitle">E-Mail</h1>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="location">
          <h1 className="subtitle">Location</h1>
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="phone">
          <h1 className="subtitle">Phone</h1>
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="things-i-love">
          <h1 className="subtitle">Things I love</h1>
        </label>
        <input
          type="text"
          id="things-i-love"
          value={things_i_love}
          onChange={(e) => setThings(e.target.value)}
        />

        <label htmlFor="description">
          <h1 className="subtitle">Description</h1>
        </label>
        <h1
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <SubmitButton  type="submit">Save</SubmitButton >
      </form>
    </EditUserProfileWrapper>
  );
};
export default EditUserProfile;
