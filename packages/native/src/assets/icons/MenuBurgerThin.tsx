import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function MenuBurgerThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.88 6.72h18.24v-.48H2.88v.48zm0 11.04h18.24v-.48H2.88v.48zm0-5.52h18.24v-.48H2.88v.48z"
        fill={color}
      />
    </Svg>
  );
}

export default MenuBurgerThin;
