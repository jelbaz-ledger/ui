import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledMediUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.976 16.704c1.8 0 3.072-1.32 3.072-3.096s-1.272-3.096-3-3.096c-1.224 0-2.208.72-2.568 1.776h-.072c-.096-2.28.432-4.176 2.616-4.176 1.248 0 2.016.648 2.208 1.896h.792c-.216-1.608-1.368-2.664-3-2.664-2.208 0-3.48 1.872-3.456 4.8.024 2.856 1.272 4.56 3.408 4.56zM5.76 21h12.48v-.84H5.76V21zm0-17.16h12.48V3H5.76v.84zm3.912 9.864v-.216c0-1.344.816-2.208 2.232-2.208H12c1.416 0 2.232.84 2.232 2.208v.216c0 1.368-.816 2.208-2.232 2.208h-.096c-1.44 0-2.232-.96-2.232-2.208z"
        fill={color}
      />
    </Svg>
  );
}

export default SixCircledMediUltraLight;
