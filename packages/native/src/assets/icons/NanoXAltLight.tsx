import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoXAltLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.572 21.84h7.248V2.16h-7.08v7.104L8.652 4.176 3.18 9.648l10.392 10.416v1.776zM4.788 9.648l3.864-3.864 10.392 10.392c.6.6.864 1.248.864 1.992a2.75 2.75 0 01-2.736 2.736c-.72 0-1.416-.288-1.992-.864L4.788 9.648zm10.488-3.912c0-1.104.888-1.992 2.04-1.992 1.08 0 1.968.888 1.968 1.992 0 1.032-.888 2.04-1.968 2.04-1.128-.024-2.04-1.008-2.04-2.04zm.36 12.408c0 .84.672 1.56 1.536 1.56.84 0 1.512-.72 1.512-1.56 0-.84-.672-1.512-1.512-1.512-.864 0-1.536.672-1.536 1.512zm.384-12.408c0 .696.552 1.32 1.296 1.296.696.024 1.272-.6 1.272-1.296-.024-.696-.576-1.272-1.272-1.272a1.27 1.27 0 00-1.296 1.272z"
        fill={color}
      />
    </Svg>
  );
}

export default NanoXAltLight;
