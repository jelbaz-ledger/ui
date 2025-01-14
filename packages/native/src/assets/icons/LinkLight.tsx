import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.2 13.8c1.776 1.752 4.608 1.776 6.36 0l3.432-3.432a4.505 4.505 0 000-6.36 4.505 4.505 0 00-6.36 0l-2.544 2.52.888.888 2.568-2.52c1.464-1.488 3.096-1.464 4.56 0 1.488 1.488 1.488 3.096 0 4.56l-3.432 3.432c-1.488 1.512-3.12 1.536-4.608.048l-.744-.696-.84.864.72.696zm-6.192 6.192a4.505 4.505 0 006.36 0l2.544-2.52-.888-.912-2.544 2.52c-1.488 1.512-3.096 1.488-4.56 0-1.488-1.464-1.512-3.096 0-4.56l3.432-3.432c1.464-1.512 3.12-1.512 4.608-.048l.744.72.816-.864-.72-.696c-1.776-1.752-4.608-1.776-6.36 0l-3.432 3.432a4.505 4.505 0 000 6.36z"
        fill={color}
      />
    </Svg>
  );
}

export default LinkLight;
