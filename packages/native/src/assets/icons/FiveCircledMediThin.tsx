import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledMediThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 16.704c1.896 0 3.072-1.32 3.072-3.096 0-1.824-1.248-3.096-3-3.096-.96 0-1.752.432-2.232 1.128h-.024l.336-3.576h4.416v-.48H9.72l-.48 5.16h.48c.312-1.056 1.08-1.752 2.328-1.752h.048c1.536 0 2.496 1.008 2.496 2.592v.048c0 1.584-.912 2.592-2.568 2.592h-.048c-1.656 0-2.568-1.032-2.568-2.472h-.48c0 1.632 1.176 2.952 3.072 2.952zM5.76 20.88h12.48v-.48H5.76v.48zm0-17.28h12.48v-.48H5.76v.48z"
        fill={color}
      />
    </Svg>
  );
}

export default FiveCircledMediThin;
