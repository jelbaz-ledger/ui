import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ShieldSecurityUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21.84c6.24-2.472 9.36-6.408 9.36-11.712v-5.04C18.696 3.168 15.456 2.16 12 2.16c-3.456 0-6.696 1.008-9.36 2.928v5.04c0 5.304 3.12 9.24 9.36 11.712zM3.48 10.128V5.496c2.472-1.68 5.352-2.52 8.52-2.52 3.168 0 6.048.84 8.52 2.52v4.632c0 4.944-2.712 8.448-8.52 10.824-5.808-2.376-8.52-5.88-8.52-10.824zm3.84.936c0 .12.024.216.096.312l2.112 3.432a2.994 2.994 0 002.592 1.464c1.632 0 2.928-1.224 3.024-2.856l.12-5.592a.512.512 0 00-.504-.528.507.507 0 00-.504.504l-.072 3h-.528l.024-3.984c0-.288-.192-.528-.504-.528a.507.507 0 00-.504.504l-.024 3.768h-.528l-.024-4.272a.492.492 0 00-.504-.504.512.512 0 00-.504.528l.024 4.488h-.552l-.048-3.504a.492.492 0 00-.504-.504c-.312 0-.504.24-.504.528l.072 5.208-1.104-1.8a.596.596 0 00-.528-.312c-.36 0-.624.264-.624.648z"
        fill={color}
      />
    </Svg>
  );
}

export default ShieldSecurityUltraLight;
