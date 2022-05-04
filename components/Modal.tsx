import Image from "next/image";
import React, { useContext, useState } from "react";
import Icon from "../modalIcon.svg";
import Draggable from "react-draggable";
import { motion } from "framer-motion";
import CTX from "./util/store";
import StyledButton from "./StyledButton";

interface Props {
  name: String;
  display: Boolean;
  updateDisplay: Function;
}

const Modal = (props: Props) => {
  const [theme, selectTheme] = useContext(CTX);

  const headerStyleTheme = ["headerBarPink", "headerBarBlack", "headerBarGrey"];
  const divBorderStyle = [
    "bg-pink-300  border-t-pink-200 border-r-pink-200 border-l-pink-400 border-b-pink-400",
    "bg-zinc-700  border-t-zinc-400 border-r-zinc-400 border-l-zinc-800 border-b-zinc-800",
    "bg-zinc-300  border-t-zinc-200 border-r-zinc-200 border-l-zinc-400 border-b-zinc-400",
  ];
  const contentBorder = [
    "border-pink-300",
    "border-zinc-700",
    "border-zinc-300",
  ];

  const toggleMouse = (e: React.MouseEvent, upDown: Boolean) => {
    const target = e.target as HTMLDivElement;
    console.log(theme);
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
          initial={{ y: 600, x: 100, opacity: 0, width: 0 }}
          animate={{ y: 0, x: 0, opacity: 1, width: "100%" }}
          exit={{ y: 600, x: 100, opacity: 0, width: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`absolute z-50 w-4/6 p-0.5  mx-auto border-2 ${
            divBorderStyle[theme]
          } ${props.display ? `` : `hidden`}`}
        >
          <div
            className={`headerBar cursor-grab p-1 text-xl leading-none ${
              theme !== 0 ? "text-white" : ""
            } ${headerStyleTheme[theme]}`}
            onMouseDown={(e) => {
              toggleMouse(e, true);
            }}
            onMouseUp={(e) => {
              toggleMouse(e, false);
            }}
          >
            <Image className="mr-10" src={Icon} height={"25"} width={"25"} />
            {props.name}

            <StyledButton
              label={"X"}
              onClickFunc={() => props.updateDisplay(false)}
            />
          </div>
          <div className={`border-t-2 ${contentBorder[theme]} bg-slate-400`}>
            <p>Fack off</p>
          </div>
        </motion.div>
      </div>
    </Draggable>
  );
};

export default Modal;
