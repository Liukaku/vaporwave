import Image from "next/image";
import React, { useState } from "react";
import Icon from "../modalIcon.svg";
import Draggable from "react-draggable";

interface Props {
  name: String;
  display: Boolean;
  updateDisplay: Function;
}

const Modal = (props: Props) => {
  return (
    <Draggable handle=".headerBar">
      <div
        className={`absolute z-50 w-4/6 bg-slate-400 border-2 border-pink-300 mx-auto ${
          props.display ? `` : `hidden`
        }`}
      >
        <div className="headerBar p-1">
          <Image src={Icon} height={"20"} width={"20"} />
          {props.name}{" "}
          <button
            className="h-6 w-6 mb-1 bg-gray-300 float-right border-2 border-t-gray-100 border-r-gray-100 border-l-gray-600 border-b-gray-600"
            onClick={() => props.updateDisplay(false)}
          >
            X
          </button>
        </div>
        <div className="border-t-2 border-pink-300">
          <p>Fack off</p>
        </div>
      </div>
    </Draggable>
  );
};

export default Modal;
