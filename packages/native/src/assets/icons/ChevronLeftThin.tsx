import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ChevronLeftThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.452 20.232L8.22 12l8.232-8.232-.336-.336L7.548 12l8.568 8.568.336-.336z"
        fill={color}
      />
    </Svg>
  );
}

export default ChevronLeftThin;
