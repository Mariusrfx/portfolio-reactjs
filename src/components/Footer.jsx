import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
    const {t}=useTranslation();
  return (
    <div>
      {" "}
      <div className="w-full h-full text-gray-300 pb-12 bg-[#0a192f] flex justify-center items-center p-4">
        <p>{t('footdesc')}</p>
      </div>
    </div>
  );
}

export default Footer;
