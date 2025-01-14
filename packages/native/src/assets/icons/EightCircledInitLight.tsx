import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function EightCircledInitLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.212 16.704h.048c1.92 0 3.312-1.152 3.312-2.664 0-.984-.6-1.776-1.56-2.112v-.168c.792-.312 1.296-1.032 1.296-1.92 0-1.416-1.32-2.496-3.048-2.496h-.048c-1.728 0-3.048 1.08-3.048 2.496 0 .888.504 1.632 1.32 1.944v.144C10.5 12.24 9.9 13.056 9.9 14.04c0 1.512 1.392 2.664 3.312 2.664zM4.116 12c0 5.088 4.032 9.12 9.12 9.12h6.648v-1.2h-6.648c-4.44 0-7.92-3.48-7.92-7.92 0-4.32 3.48-7.92 7.92-7.92h6.648v-1.2h-6.648c-5.112 0-9.12 4.152-9.12 9.12zm7.056 2.16v-.312c0-.912.648-1.416 2.016-1.416h.144c1.368 0 2.016.504 2.016 1.416v.312c0 .936-.672 1.464-2.016 1.464h-.144c-1.344 0-2.016-.528-2.016-1.464zm.144-4.08v-.312c0-.84.624-1.344 1.848-1.344h.144c1.2 0 1.848.504 1.848 1.344v.312c0 .84-.624 1.32-1.848 1.32h-.144c-1.248 0-1.848-.48-1.848-1.32z"
        fill={color}
      />
    </Svg>
  );
}

export default EightCircledInitLight;
