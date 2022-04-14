import React from "react";
import { Link } from "react-router-dom";
function HomeModal(props) {
  return (
    <div className="absolute bg-white z-30 border rounded-sm w-[51%] top-[150%] h-52">
      <ul className="flex flex-col justify-between p-5 h-full">
        <li className="cursor-pointer">
          <Link to={`/${props.link}`}>{props.title}</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeModal;
