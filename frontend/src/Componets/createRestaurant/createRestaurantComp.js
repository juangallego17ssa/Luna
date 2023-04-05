import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithToken, axiosWithoutToken } from "../../Axios/axios";
import {
  AuthForm,
  CompleteButton,
  FormContainer,
  FormTitle,
  InputCode,
  InputContainer,
  InputField,
  ProgressCirclesContainer,
  ErrorMessage,
  RequiredField,
  InputText,
  InputSelect,
  Basic,
  LabelText,
} from "./createRestaurantComp.styled";
import { useSelector } from "react-redux";

function CreateRestaurantComp() {
  const registrationEmail = useSelector(
    (state) => state.signupemail.signupemail
  );
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [priceLevel, setPriceLevel] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const [showRequired, setShowRequired] = useState(false);

  //store typed name
  const handleName = (e) => {
    setName(e.target.value);
  };

  //store selected category
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  //store selected country
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  //store typed street
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };

  //store typed firstname
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  //store typed zip
  const handleZip = (e) => {
    setZip(e.target.value);
  };

  //store typed website
  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  };

  //store typed phone
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  //store typed email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //store typed opening hours
  const handleOpeningHours = (e) => {
    setOpeningHours(e.target.value);
  };
  
    //store selected price level
    const handlePriceLevel = (e) => {
      setPriceLevel(e.target.value);
    };

  //store selected image
  const handleImage = (e) => {
    setImage(e.target.value);
  };

  //validation
  const handleCreateClick = async (e) => {
    e.preventDefault();

    if (!name ||
        !category ||
        !country ||
        !street ||
        !city ||
        !phone ||
        !openingHours) {
      setShowRequired(true);
      return;
    }

    // Prepare the request for login in and getting the token
    const myBody = JSON.stringify({
      "name": name,
      "category": category,
      "country": country,
      "street": street,
      "city": city,
      "zip": zip,
      "website": website,
      "phone": phone,
      "email": email,
      "opening_hours": openingHours,
      "price_level": priceLevel
    });
    const myConfig = {
        method: "post",
        data: myBody,
    };

    // Fetch the data and save the token in the local storage
    try {
      console.log(myConfig)
      const response = (await axiosWithToken("/restaurants/new/", myConfig)).data;
      console.log("hey")
      console.log(response)
      // navigate(`/`)
    } catch (exception) {
      console.log(exception)
        window.alert("Error!")
    }

    console.log("Submit")


  }

  return (
    <AuthForm className="createRestarant-form">
      <FormTitle>CREATE NEW RESTAURANT</FormTitle>
      <FormContainer>
        <Basic>Basic
          <div></div>
          <div></div>
          <LabelText htmlFor="nameInput">Name*</LabelText>
          <LabelText htmlFor="categoryInput">Category*</LabelText>
          <LabelText htmlFor="countryInput">Country*</LabelText>
          
          <InputText id="nameInput" onChange={handleName}/>
          <InputSelect id="categoryInput" onChange={handleCategory}>
            <option value="" disabled defaultValue>Select a value...</option>
            <option value="1">Asian</option>
            <option value="2">Burgers</option>
            <option value="3">Chinese</option>
            <option value="3">Greek</option>
            <option value="4">Healthy</option>
            <option value="5">Italian</option>
            <option value="6">Mexican</option>
            <option value="7">Pizza</option>
            <option value="8">Poke</option>
            <option value="9">Sandwich</option>
            <option value="10">Sushi</option>
            <option value="11">Spanish</option>
            <option value="12">Vegan</option>
          </InputSelect>
          <InputSelect id="countryInput" onChange={handleCountry}>
            <option value="" disabled defaultValue>Select a value...</option>
            <option value="AT">Austria</option>
            <option value="DE">Germany</option>
            <option value="CH">Switzerland</option>
          </InputSelect>

          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
        
        </Basic>

        <Basic>Address
          <div></div>
          <div></div>
          <LabelText htmlFor="streetInput">Street*</LabelText>
          <LabelText htmlFor="cityInput">City*</LabelText>
          <LabelText htmlFor="zipInput">Zip</LabelText>
          
          <InputText id="streetInput" onChange={handleStreet}/>
          <InputText id="cityInput" onChange={handleCity}/>
          <InputText id="zipInput" onChange={handleZip}/>

          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          <div></div>
        
        </Basic>

        <Basic>Contact
          <div></div>
          <div></div>
          <LabelText htmlFor="websiteInput">Website</LabelText>
          <LabelText htmlFor="phoneInput">Phone*</LabelText>
          <LabelText htmlFor="emailInput">Email</LabelText>
          
          <InputText id="websiteInput" onChange={handleWebsite}/>
          <InputText id="phoneInput" onChange={handlePhone} />
          <InputText id="emailInput" onChange={handleEmail}/>

          <div></div>
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          <div></div>
        
        </Basic>


        <Basic>Details
          <div></div>
          <div></div>
          <LabelText htmlFor="openingInput">Opening hours*</LabelText>
          <LabelText htmlFor="priceInput">Price level</LabelText>
          <LabelText htmlFor="imageInput">Image</LabelText>
          
          <InputText id="openingInput" onChange={handleOpeningHours}/>
          <InputSelect id="priceInput" onChange={handlePriceLevel} >
            <option value="" disabled defaultValue hidden>Select a value...</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </InputSelect>
          <InputSelect id="imageInput" onChange={handleCountry}/>

          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}

        
        </Basic>
        
{/*         
        <InputContainer>
          <InputField
            placeholder="Email"
            type="email"
            value={userEmail}
            onChange={handleEmailInput}
          />
          <InputField
            placeholder="Username"
            value={userName}
            onChange={handleUserNameInput}
          />
          <InputField
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameInput}
          />
          <InputField
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameInput}
          />
          <InputField
            placeholder="Password"
            type="password"
            value={userPassword}
            onChange={handlePasswordInput}
          />
          <InputField
            placeholder="Repeat Password"
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordInput}
          />
        </InputContainer>
        <p
          style={
            passwordMatch ? { visibility: "hidden" } : { visibility: "visible" }
          }
        >
          The passwords don't match
        </p> */}
      </FormContainer>
      <CompleteButton onClick={handleCreateClick}>CREATE</CompleteButton>
    </AuthForm>
  );
}

export default CreateRestaurantComp;
