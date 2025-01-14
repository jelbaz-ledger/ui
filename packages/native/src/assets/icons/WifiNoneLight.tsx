import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function WifiNoneLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.548 21.204l.816-.816L7.236 7.26 6.3 6.3 2.772 2.796l-.816.816 3.216 3.216A14.41 14.41 0 001.956 9.18l.864.888c.984-.936 2.064-1.728 3.264-2.328l2.712 2.712c-1.392.456-2.64 1.2-3.72 2.112l.84.96c1.176-1.008 2.424-1.704 3.912-2.04l3.384 3.384a6.615 6.615 0 00-1.224-.12c-1.44 0-2.712.528-3.72 1.368l3.72 4.128 3.144-3.456 4.416 4.416zM8.7 5.508l1.056 1.056a13.57 13.57 0 012.232-.168c3.72 0 6.816 1.392 9.168 3.672l.888-.888a14.38 14.38 0 00-10.056-4.056c-1.128 0-2.256.144-3.288.384zm4.536 4.536l1.752 1.776c1.152.336 2.184.936 3.096 1.704l.816-.96c-1.56-1.32-3.504-2.256-5.664-2.52z"
        fill={color}
      />
    </Svg>
  );
}

export default WifiNoneLight;
