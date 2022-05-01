import React from "react";

interface Props {
  name: String;
}

const Modal = (props: Props) => {
  return (
    <div className="w-4/6 bg-slate-400 border-2 border-pink-300">
      <div className="bg-pink-300 h-6">{props.name}</div>
      <p>Fack off</p>
    </div>
  );
};

export default Modal;
