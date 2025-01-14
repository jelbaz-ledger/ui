import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledMediRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 16.704c1.944 0 3.264-1.296 3.264-3.072 0-1.752-1.248-3.072-2.928-3.072-.72 0-1.32.264-1.704.672h-.216l.288-2.304h4.056V7.584H9.48l-.456 5.16h1.392c.24-.576.648-.864 1.536-.864h.096c1.152 0 1.656.456 1.656 1.464v.528c0 1.008-.48 1.464-1.656 1.464h-.096c-1.224 0-1.704-.48-1.728-1.584H8.688c0 1.68 1.368 2.952 3.312 2.952zM5.76 21.24h12.48v-1.56H5.76v1.56zm0-16.92h12.48V2.76H5.76v1.56z"
        fill={color}
      />
    </Svg>
  );
}

export default FiveCircledMediRegular;
