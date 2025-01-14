import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function DropdownRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 15.348l5.592-5.592-1.104-1.104L12 13.14 7.512 8.652 6.408 9.756 12 15.348z"
        fill={color}
      />
    </Svg>
  );
}

export default DropdownRegular;
