import axios from "axios";

let baseURL = "https://lunateam3.propulsion-learn.ch/backend/api/";

// ability to set a baseURL on base of which environement is running of the frontend
if (process.env.NODE_ENV === "development") {
  baseURL = "https://motion.propulsion-home.ch/backend/api/";
  // uncomment this as soon the local backend is created
  // baseURL = "localhost:8000/backend/api/"
}


export const axiosWithoutToken = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axiosWithToken = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    "Content-Type": "application/json",
  },
});
