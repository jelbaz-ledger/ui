import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.536 22.08c.672 0 1.344-.24 1.848-.768l9.48-9.504c.408.12.792.168 1.2.168 2.76 0 5.016-2.256 5.016-5.04a5.03 5.03 0 00-5.016-5.016c-2.784 0-5.04 2.256-5.04 5.016 0 .408.048.792.168 1.2l-9.504 9.48a2.618 2.618 0 00-.768 1.848 2.622 2.622 0 002.616 2.616zm-1.152-2.616c0-.288.12-.576.336-.816L13.872 8.52a3.492 3.492 0 01-.36-1.584 3.56 3.56 0 013.552-3.552c.576 0 1.152.144 1.632.432L16.08 6.432l1.488 1.488 2.616-2.616c.288.48.432 1.056.432 1.632a3.56 3.56 0 01-3.552 3.552c-.576 0-1.104-.12-1.584-.36L5.352 20.28c-.24.24-.528.336-.816.336a1.152 1.152 0 01-1.152-1.152z"
        fill={color}
      />
    </Svg>
  );
}

export default ToolRegular;
