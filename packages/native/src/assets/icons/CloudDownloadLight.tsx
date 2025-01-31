import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function CloudDownloadLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.808 16.188v1.152c2.472-.288 4.272-2.232 4.272-4.608 0-2.328-1.704-4.176-3.888-4.536-.384-2.832-2.856-4.92-5.688-4.92-2.112 0-4.008 1.128-4.992 2.88-3 .024-5.592 2.472-5.592 5.592 0 2.52 1.656 4.68 4.056 5.4v-1.224c-1.68-.624-2.856-2.232-2.856-4.176 0-2.784 2.472-4.824 5.184-4.368.624-1.8 2.256-2.952 4.2-2.952 2.592 0 4.728 2.112 4.488 4.848 2.136-.168 3.888 1.32 3.888 3.456 0 1.776-1.296 3.192-3.072 3.456zm-10.176.192l4.344 4.344 4.344-4.344-.768-.768-1.464 1.464a97.129 97.129 0 00-1.536 1.584v-7.296H11.4v7.32c-.504-.552-1.032-1.08-1.536-1.608l-1.488-1.464-.744.768z"
        fill={color}
      />
    </Svg>
  );
}

export default CloudDownloadLight;
