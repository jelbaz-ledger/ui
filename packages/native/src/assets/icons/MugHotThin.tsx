import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function MugHotThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.184 20.88h2.952c1.608 0 3-.6 3.984-1.896a3.81 3.81 0 00.528-.84h.48c2.712 0 4.752-1.8 4.752-4.296 0-2.568-2.04-4.368-4.752-4.368H3.12V15c0 1.824.336 3.024 1.104 3.984 1.008 1.296 2.352 1.896 3.96 1.896zM3.6 15V9.96h12.12V15c0 3.168-1.464 5.4-4.584 5.4H8.184c-3 0-4.584-2.136-4.584-5.4zm3.456-7.08h.48c-.144-1.248.696-1.896 2.184-2.088l1.704-.216c1.608-.216 2.712-1.032 2.616-2.496h-.48c.096 1.2-.744 1.824-2.184 2.016l-1.704.216c-1.656.216-2.76 1.056-2.616 2.568zm8.784 9.744c.264-.72.36-1.584.36-2.664V9.96c2.472.024 4.2 1.536 4.2 3.864v.048c0 2.28-1.752 3.792-4.272 3.792h-.288z"
        fill={color}
      />
    </Svg>
  );
}

export default MugHotThin;
