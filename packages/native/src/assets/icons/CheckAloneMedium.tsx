import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function CheckAloneMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1.68 12.936l6.72 6.72L22.32 5.784l-1.44-1.44L8.4 16.776l-5.28-5.28-1.44 1.44z"
        fill={color}
      />
    </Svg>
  );
}

export default CheckAloneMedium;
