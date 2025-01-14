import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function SupportThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.776 20.88h2.448c.672 0 1.224-.48 1.176-1.368 1.944-.696 3.384-2.424 3.672-4.488h.48c1.584 0 2.808-1.224 2.808-2.808v-.912c0-1.584-1.224-2.808-2.808-2.808h-.456C17.688 5.472 15.12 3.12 12 3.12S6.312 5.472 5.904 8.496h-.456c-1.584 0-2.808 1.224-2.808 2.808v.912c0 1.584 1.224 2.808 2.808 2.808h.888V9.312C6.336 6.168 8.856 3.6 12 3.6c3.144 0 5.664 2.568 5.664 5.712v4.872a5.19 5.19 0 01-3.264 4.824c.048-.816-.504-1.344-1.176-1.344h-2.448c-.672 0-1.176.504-1.176 1.176v.864c0 .672.504 1.176 1.176 1.176zM3.12 12.216v-.912c0-1.392.936-2.328 2.328-2.328h.408v5.568h-.408c-1.392 0-2.328-.936-2.328-2.328zm6.96 7.488v-.864c0-.48.216-.696.696-.696h2.448c.48 0 .696.216.696.696v.864c0 .48-.216.696-.696.696h-2.448c-.48 0-.696-.216-.696-.696zm8.064-5.16V8.976h.408c1.392 0 2.328.936 2.328 2.328v.912c0 1.392-.936 2.328-2.328 2.328h-.408z"
        fill={color}
      />
    </Svg>
  );
}

export default SupportThin;
