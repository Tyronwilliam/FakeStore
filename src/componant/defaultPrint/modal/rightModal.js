import React, { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/outline";

function RightModal(props) {
  return (
    <div className={props.className}>
      <div className="flex justify-between items-center">
        <h1 className="text-lg">{props.content}</h1>
        <XCircleIcon
          className="w-6 h-6  top-[35px] right-24 text-orange-500 cursor-pointer"
          onClick={() => {
            props.handle(props.value);
          }}
        />
      </div>
    </div>
  );
}

export default RightModal;
