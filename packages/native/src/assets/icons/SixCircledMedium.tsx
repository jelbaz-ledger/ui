import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21.36c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36 0 5.232 4.128 9.36 9.36 9.36zM4.56 12c0-4.176 3.264-7.44 7.44-7.44s7.44 3.264 7.44 7.44c0 4.056-3.264 7.44-7.44 7.44S4.56 16.176 4.56 12zm3.744.144c.024 2.856 1.368 4.56 3.648 4.56 1.968 0 3.312-1.32 3.312-3.096s-1.368-3.072-3-3.072c-.696 0-1.392.24-1.824.696h-.288C10.2 9.696 10.728 9 11.976 9c.864 0 1.416.288 1.512.984h1.752C15 8.376 13.776 7.344 12 7.344c-2.376 0-3.72 1.872-3.696 4.8zm2.088 1.8v-.768c0-.744.408-1.056 1.392-1.056h.24c.984 0 1.392.312 1.392 1.056v.768c0 .744-.408 1.056-1.392 1.056h-.24c-.984 0-1.392-.312-1.392-1.056z"
        fill={color}
      />
    </Svg>
  );
}

export default SixCircledMedium;
