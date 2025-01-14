import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function OthersThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.96 12.72h1.44v-1.44h-1.44v1.44zm-15.36 0h1.44v-1.44H3.6v1.44zm7.68 0h1.44v-1.44h-1.44v1.44z"
        fill={color}
      />
    </Svg>
  );
}

export default OthersThin;
