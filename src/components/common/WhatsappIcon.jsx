import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { companyDetails } from "../../constant";

const WhatsappIcon = () => {
  return (
    <Link
      to={`https://api.whatsapp.com/send?phone=${companyDetails.whatsapp}&text=Hello%20Alfox%20AI,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
      rel="noopener noreferrer"
      target="_blank"
      className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full fixed bottom-4 left-4 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 cursor-pointer"
    >
      <FaWhatsapp size={45} />
    </Link>
  );
};

export default WhatsappIcon;
