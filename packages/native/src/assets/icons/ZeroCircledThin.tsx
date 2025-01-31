import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 20.88c4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88 0 4.968 3.912 8.88 8.88 8.88zM3.6 12c0-4.704 3.696-8.4 8.4-8.4 4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4-4.704 0-8.4-3.696-8.4-8.4zm5.04.024c0 2.832 1.152 4.68 3.36 4.68s3.36-1.848 3.36-4.68-1.128-4.68-3.36-4.68c-2.208 0-3.36 1.848-3.36 4.68zm.48.024V12c0-2.688.936-4.176 2.88-4.176 1.056 0 1.8.432 2.28 1.224l-4.8 5.424c-.24-.648-.36-1.464-.36-2.424zm.576 2.904l4.8-5.424c.264.648.384 1.464.384 2.472v.048c0 2.688-.936 4.176-2.88 4.176-1.056 0-1.824-.432-2.304-1.272z"
        fill={color}
      />
    </Svg>
  );
}

export default ZeroCircledThin;
