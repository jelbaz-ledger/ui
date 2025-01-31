import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ChevronBottomRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.152 6.972L3.048 8.076 12 17.028l8.952-8.952-1.104-1.104L12 14.82 4.152 6.972z"
        fill={color}
      />
    </Svg>
  );
}

export default ChevronBottomRegular;
