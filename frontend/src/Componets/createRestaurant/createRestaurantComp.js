import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithToken, axiosWithoutToken } from "../../Axios/axios";
import {
  AuthForm,
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
  AddImageDiv,
  AddImageInput,
} from "./createRestaurantComp.styled";
import { useSelector } from "react-redux";
import { CompleteButton } from "../authComponents/verification.styled";

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

    const myNewImage = {
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
    }
    setImage(myNewImage)
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

    // declare formData
    const formData = new FormData();
    formData.append("name", name)
    formData.append("category", category)
    formData.append("country", country)
    formData.append("street", street)
    formData.append("city", city)
    formData.append("zip", zip)
    formData.append("website", website)
    formData.append("phone", phone)
    formData.append("email", email)
    formData.append("opening_hours", openingHours)
    formData.append("price_level", priceLevel)
    // formData.append("images", image.file)

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
        // data: myBody,
        data: formData,
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
            <option value="" disabled selected>Select a value...</option>
            <option value="1">Asian</option>
            <option value="2">Burgers</option>
            <option value="3">Chinese</option>
            <option value="4">Greek</option>
            <option value="5">Healthy</option>
            <option value="6">Italian</option>
            <option value="7">Mexican</option>
            <option value="8">Pizza</option>
            <option value="9">Poke</option>
            <option value="10">Sandwich</option>
            <option value="11">Sushi</option>
            <option value="12">Spanish</option>
            <option value="13">Vegan</option>
          </InputSelect>
          <InputSelect id="countryInput" onChange={handleCountry}>
            <option value="" disabled selected>Select a value...</option>
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
            <option value="" disabled selected hidden>Select a value...</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </InputSelect>
          <AddImageDiv>
                <input type="file" accept="image/*" onChange={handleImage}></input>
          </AddImageDiv>

          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          <div></div>
          <div></div>

        
        </Basic>
        
      </FormContainer>
      <CompleteButton onClick={handleCreateClick}>CREATE</CompleteButton>
    </AuthForm>
  );
}

export default CreateRestaurantComp;
