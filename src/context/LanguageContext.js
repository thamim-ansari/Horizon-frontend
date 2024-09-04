import React from "react";

// Create a context with default values
const LanguageContext = React.createContext({
  activeLanguage: "EN", // Default active language
  changeLanguage: () => {}, // Function to change language
});

export default LanguageContext;
