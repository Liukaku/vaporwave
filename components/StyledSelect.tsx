import React, { useContext } from "react";
import CTX from "./util/store";

interface Props {
  mapArr: Array<String>;
}

const StyledSelect = (props: Props) => {
  const [theme, selectTheme] = useContext(CTX);

  return (
    <select className="" name="themeOption">
      {props.mapArr.map((val, i) => {
        return (
          <option className="" value={i}>
            {i}
          </option>
        );
      })}
    </select>
  );
};

export default StyledSelect;
