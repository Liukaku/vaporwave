import Image from "next/image";
import React, { useState } from "react";
import Icon from "../modalIcon.svg";
import Draggable from "react-draggable";
import { motion } from "framer-motion";

interface Props {
  name: String;
  display: Boolean;
  updateDisplay: Function;
}

const Modal = (props: Props) => {
  const toggleMouse = (e: React.MouseEvent, upDown: Boolean) => {
    const target = e.target as HTMLDivElement;
    console.log(e.target);
    if (upDown) {
      target.classList.add("cursor-grabbing");
      target.classList.remove("cursor-grab");
    } else {
      target.classList.remove("cursor-grabbing");
      target.classList.add("cursor-grab");
    }
  };

  return (
    <Draggable handle=".headerBar">
      <div>
        <motion.div
          initial={{ y: 1080, x: 100, opacity: 0, width: 0 }}
          animate={{ y: 0, x: 0, opacity: 100, width: "100%" }}
          exit={{ y: 1080, x: 100, opacity: 0, width: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`absolute z-50 w-4/6 p-0.5  mx-auto  bg-pink-300 border-2 border-t-pink-200 border-r-pink-200 border-l-pink-400 border-b-pink-400 ${
            props.display ? `` : `hidden`
          }`}
        >
          <div
            className="headerBar cursor-grab p-1 text-xl leading-none"
            onMouseDown={(e) => {
              toggleMouse(e, true);
            }}
            onMouseUp={(e) => {
              toggleMouse(e, false);
            }}
          >
            <Image className="mr-10" src={Icon} height={"25"} width={"25"} />
            {props.name}

            <button
              className="h-6 w-6 bg-gray-300 float-right border-2 border-t-gray-100 border-r-gray-100 border-l-gray-600 border-b-gray-600 font-black text-base leading-none"
              onClick={() => props.updateDisplay(false)}
            >
              X
            </button>
          </div>
          <div className="border-t-2 border-pink-300 bg-slate-400">
            <p>Fack off</p>
          </div>
        </motion.div>
      </div>
    </Draggable>
  );
};

export default Modal;
