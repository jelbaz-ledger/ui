import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function PlusMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.4 10.968h-7.368V3.6h-2.04v7.368H3.6v2.04h7.392V20.4h2.04v-7.392H20.4v-2.04z"
        fill={color}
      />
    </Svg>
  );
}

export default PlusMedium;
