import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledFinaMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.296 16.464h6.36v-1.656l-4.104.024v-.312l2.232-1.368c1.416-.864 1.992-1.8 1.992-2.928 0-1.8-1.464-2.88-3.312-2.88-1.992 0-3.384 1.296-3.384 2.808v.312h1.896V10.2c0-.864.288-1.176 1.392-1.176h.168c1.008 0 1.32.312 1.32 1.248 0 .672-.168 1.176-1.776 2.184l-2.784 1.752v2.256zM4.2 21.36h6.24c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36H4.2v1.92h6.24c4.176 0 7.44 3.264 7.44 7.44 0 4.056-3.264 7.44-7.44 7.44H4.2v1.92z"
        fill={color}
      />
    </Svg>
  );
}

export default TwoCircledFinaMedium;
