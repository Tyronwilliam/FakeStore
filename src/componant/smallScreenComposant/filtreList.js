import React from "react";

function FiltreList() {
  return (
    <div>
      <ul className="md:flex">
        <li>Prix : - au + cher</li>
        <li className="md:ml-10 mb-5 md:mb-0">Prix : + au - cher</li>
      </ul>
    </div>
  );
}

export default FiltreList;
