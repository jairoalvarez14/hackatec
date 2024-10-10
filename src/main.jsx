import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Header";
import Welcome from "./components/welcome";
import WhyMexico from "./components/whyMexico";
import InterestPlaces from "./components/interesPlaces";
import Points from "./components/Points";
import Reviews from "./components/Reviews";
import LoginSignup from "./components/LoginSignup";
import Quiz from "./components/Quiz";
import Membership from "./components/Membership";

import Mazamitla from "./components/categories/pueblosmagicos/Mazamitla";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginSignup />
    <Header />
    <Welcome />
    <Quiz />
    <hr className="text-black" />
    <InterestPlaces />
    <Mazamitla />
    <WhyMexico />
    <Membership />
    <Points />
    <Reviews />
  </StrictMode>
);
