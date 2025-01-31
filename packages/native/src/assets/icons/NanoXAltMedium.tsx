import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoXAltMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.512 21.84h7.368V2.16h-7.2v6.6L8.976 4.056 3.12 9.888l10.392 10.416v1.536zM5.664 9.888L8.976 6.6l9.744 9.744c.576.576.792 1.152.792 1.752a2.326 2.326 0 01-2.352 2.352c-.6 0-1.2-.24-1.752-.792L5.664 9.888zm9.384-4.032c0-1.224.984-2.208 2.256-2.208 1.2 0 2.184.984 2.184 2.208 0 1.104-.984 2.232-2.184 2.232-1.248-.024-2.256-1.128-2.256-2.232zm.84 12.24a1.28 1.28 0 001.272 1.272c.696 0 1.248-.6 1.248-1.272a1.24 1.24 0 00-1.248-1.248c-.72 0-1.272.552-1.272 1.248zm.144-12.24c0 .648.528 1.272 1.272 1.248.696.024 1.248-.576 1.248-1.248-.024-.696-.552-1.248-1.248-1.272-.72 0-1.272.576-1.272 1.272z"
        fill={color}
      />
    </Svg>
  );
}

export default NanoXAltMedium;
