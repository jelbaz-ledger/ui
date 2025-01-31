import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.56 22.32c.768 0 1.488-.288 2.04-.84l9.336-9.36c.384.072.744.12 1.104.12 2.904 0 5.28-2.376 5.28-5.28 0-2.904-2.376-5.28-5.28-5.28-2.904 0-5.28 2.376-5.28 5.28 0 .36.048.72.12 1.104L2.52 17.4a2.849 2.849 0 00-.84 2.04 2.888 2.888 0 002.88 2.88zm-1.08-2.88c0-.288.096-.552.312-.768L13.944 8.544a3.508 3.508 0 01-.384-1.584c0-1.92 1.56-3.48 3.48-3.48.6 0 1.176.168 1.68.432L16.2 6.456 17.544 7.8l2.544-2.52a3.64 3.64 0 01.432 1.68c0 1.92-1.56 3.48-3.48 3.48a3.508 3.508 0 01-1.584-.384L5.328 20.208a1.05 1.05 0 01-.768.312c-.6 0-1.08-.48-1.08-1.08z"
        fill={color}
      />
    </Svg>
  );
}

export default ToolMedium;
