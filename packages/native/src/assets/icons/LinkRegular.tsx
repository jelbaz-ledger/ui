import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.08 13.944c1.896 1.824 4.872 1.848 6.72-.024l3.312-3.312c1.872-1.848 1.872-4.896 0-6.72-1.824-1.872-4.848-1.848-6.696 0l-2.472 2.424 1.152 1.176 2.472-2.448c1.56-1.536 2.856-1.536 4.392 0 1.536 1.536 1.56 2.856 0 4.392l-3.336 3.336c-1.536 1.56-2.904 1.584-4.464.072l-.72-.696-1.056 1.128.696.672zm-6.192 6.168c1.824 1.872 4.848 1.848 6.696 0l2.472-2.424-1.128-1.176-2.496 2.448c-1.536 1.536-2.856 1.536-4.392 0-1.536-1.56-1.536-2.856 0-4.392l3.336-3.336c1.56-1.56 2.904-1.584 4.464-.072l.72.696 1.056-1.128-.696-.672c-1.896-1.824-4.872-1.848-6.72.024l-3.312 3.312c-1.872 1.848-1.872 4.896 0 6.72z"
        fill={color}
      />
    </Svg>
  );
}

export default LinkRegular;
