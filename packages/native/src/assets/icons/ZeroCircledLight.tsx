import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21.12c5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12 0 5.088 4.032 9.12 9.12 9.12zM4.08 12c0-4.44 3.48-7.92 7.92-7.92 4.44 0 7.92 3.48 7.92 7.92 0 4.32-3.48 7.92-7.92 7.92-4.44 0-7.92-3.48-7.92-7.92zm4.344.024c0 2.832 1.248 4.68 3.576 4.68 2.352 0 3.576-1.848 3.576-4.68 0-2.856-1.2-4.68-3.576-4.68-2.328 0-3.576 1.848-3.576 4.68zm1.248.576v-1.128c0-2.184.72-3.096 2.328-3.096.864 0 1.488.264 1.872.864l-4.08 4.632c-.096-.36-.12-.792-.12-1.272zm.432 2.184l4.104-4.632c.072.36.12.816.12 1.32V12.6c0 2.184-.72 3.072-2.328 3.072-.888 0-1.512-.264-1.896-.888z"
        fill={color}
      />
    </Svg>
  );
}

export default ZeroCircledLight;
