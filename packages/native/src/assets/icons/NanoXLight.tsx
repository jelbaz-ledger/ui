import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoXLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.856 22.32l4.464-4.464L6.144 1.68 1.68 6.144 17.856 22.32zM3.216 6.144l2.928-2.952 6.84 6.84c-.744-.024-1.512.264-2.112.84a2.87 2.87 0 00-.816 2.112l-6.84-6.84zm1.752-.024c0 .648.528 1.176 1.176 1.176.624 0 1.176-.528 1.176-1.176 0-.648-.552-1.176-1.176-1.176-.648 0-1.176.528-1.176 1.176zm6.624 8.4c-.768-.768-.744-2.064.048-2.88.816-.792 2.112-.792 2.88-.048l6.288 6.264-2.952 2.952-6.264-6.288zm.432-1.344c0 .648.528 1.176 1.152 1.176.648 0 1.176-.528 1.176-1.176 0-.648-.528-1.176-1.176-1.176-.624 0-1.152.528-1.152 1.176z"
        fill={color}
      />
    </Svg>
  );
}

export default NanoXLight;
