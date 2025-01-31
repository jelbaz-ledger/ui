import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoXAltRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.56 21.84h7.296V2.16h-7.128V9l-4.92-4.896-5.664 5.664L13.56 20.184v1.656zM5.232 9.768l3.6-3.576 10.056 10.08c.6.576.816 1.2.816 1.848a2.53 2.53 0 01-2.544 2.544c-.648 0-1.296-.24-1.872-.816L5.232 9.768zm9.936-3.96c0-1.176.936-2.112 2.16-2.112 1.128 0 2.064.936 2.064 2.112 0 1.056-.936 2.112-2.064 2.112-1.2 0-2.16-1.056-2.16-2.112zm.6 12.312c0 .744.6 1.416 1.416 1.416.768 0 1.368-.672 1.368-1.416 0-.768-.624-1.368-1.368-1.368-.816 0-1.416.6-1.416 1.368zm.264-12.312c0 .648.528 1.272 1.296 1.272.696 0 1.248-.6 1.248-1.272-.024-.72-.552-1.272-1.248-1.296-.744 0-1.296.576-1.296 1.296z"
        fill={color}
      />
    </Svg>
  );
}

export default NanoXAltRegular;
