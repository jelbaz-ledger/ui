import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ChevronLeftLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.836 19.968L8.868 12l7.968-7.992-.84-.84L7.164 12l8.832 8.832.84-.864z"
        fill={color}
      />
    </Svg>
  );
}

export default ChevronLeftLight;
