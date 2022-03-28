import React from "react";
import Logo from "../asset/logo.png";
function Partner() {
  return (
    <div className="flex max-w-[1024px] lg:px-10 mx-auto px-5 justify-between flex-wrap gap-5">
      <img src={Logo} alt="" className="w-20 h-20" />
      <img src={Logo} alt="" className="w-20 h-20" />
      <img src={Logo} alt="" className="w-20 h-20" />
      <img src={Logo} alt="" className="w-20 h-20" />
      <img src={Logo} alt="" className="w-20 h-20" />
      <img src={Logo} alt="" className="w-20 h-20" />
    </div>
  );
}

export default Partner;
