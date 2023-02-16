import React from "react";
import i18n from "i18next";
import Cookies from "js-cookie";

function LanguageSelector() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set('language',lng,{expires:365})
  };

  return (
    <div className="flex justify-between items-center">
      <select className="appearance-none  bg-[#0a192f] text-blue-500" 
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option  value="en">EN</option>
        <option  value="es">ES</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
