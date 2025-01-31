import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ChevronRightMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.78 19.728l1.344 1.344L17.22 12 8.124 2.928 6.78 4.272 14.484 12 6.78 19.728z"
        fill={color}
      />
    </Svg>
  );
}

export default ChevronRightMedium;
