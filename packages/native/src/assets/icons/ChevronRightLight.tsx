import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ChevronRightLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.164 19.968l.84.864L16.836 12 8.004 3.168l-.84.84L15.132 12l-7.968 7.968z"
        fill={color}
      />
    </Svg>
  );
}

export default ChevronRightLight;
