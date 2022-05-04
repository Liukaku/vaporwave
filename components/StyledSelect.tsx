import React, { useContext, useState } from "react";
import StyledButton from "./StyledButton";
import CTX from "./util/store";

interface Props {
  mapArr: Array<String>;
  selectFunc: Function;
}

const StyledSelect = (props: Props) => {
  const [theme, selectTheme] = useContext(CTX);
  const [dropDown, toggleDropDown] = useState<Boolean>(false);

  const themeType = ["Pink", "Dark", "Grey"];

  const titleTheme = [
    "bg-pink-300 border-b-pink-200 border-l-pink-200 border-t-pink-400 border-r-pink-400",
    "bg-zinc-700 border-b-zinc-400 border-l-zinc-400 border-t-zinc-900 border-r-zinc-900 text-white",
    "bg-zinc-300 border-b-zinc-200 border-l-zinc-200 border-t-zinc-400 border-r-zinc-400",
  ];

  const divTheme = [
    "bg-pink-300 border-pink-400",
    "bg-zinc-700 border-zinc-800 text-white",
    "bg-zinc-300 border-zinc-400",
  ];

  const hoverTheme = [
    "hover:bg-pink-400",
    "hover:bg-zinc-900",
    "hover:bg-zinc-400",
  ];

  const makeSelection = (option: number) => {
    props.selectFunc(option);
    toggleDropDown(false);
  };

  return (
    <div className={` border-2 ${titleTheme[theme]}`}>
      <div className="flex justify-between">
        <p className="m-0.5">Please Select</p>
        <StyledButton
          label={"V"}
          onClickFunc={() => toggleDropDown(!dropDown)}
        />
      </div>
      {dropDown ? (
        <div className={`absolute w-20 border ${divTheme[theme]}`}>
          {props.mapArr.map((val, i) => {
            return (
              <div
                className={`${hoverTheme[theme]} w-full`}
                onClick={() => makeSelection(i)}
              >
                <p
                  className={`${
                    theme === i ? `border-dotted border border-black` : ``
                  } m-0.5`}
                >
                  {i}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StyledSelect;
