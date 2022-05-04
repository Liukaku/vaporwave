import React, { useState } from "react";

interface Props {
  label: String;
  onClickFunc: Function;
}

const StyledButton = (props: Props) => {
  const [clickState, toggleClick] = useState<Boolean>(false);

  return (
    <button
      onMouseDown={() => toggleClick(true)}
      onMouseUp={() => toggleClick(false)}
      className={`h-6 w-6 ${
        clickState
          ? `bg-gray-400 border-t-gray-700 border-r-gray-700 border-l-gray-200 border-b-gray-200`
          : `bg-gray-300 border-t-gray-100 border-r-gray-100 border-l-gray-600 border-b-gray-600`
      } float-right border-2  font-black text-base cursor-pointer leading-none text-black`}
      onClick={() => props.onClickFunc()}
    >
      {props.label}
    </button>
  );
};

export default StyledButton;
