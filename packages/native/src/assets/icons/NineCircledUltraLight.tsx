import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function NineCircledUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21c5.04 0 9-4.104 9-9 0-5.04-3.96-9-9-9s-9 3.96-9 9 3.96 9 9 9zm-8.16-9c0-4.584 3.6-8.16 8.16-8.16 4.584 0 8.16 3.576 8.16 8.16 0 4.44-3.576 8.16-8.16 8.16-4.56 0-8.16-3.6-8.16-8.16zm5.136 1.968c.168 1.656 1.392 2.736 3.048 2.736 2.208 0 3.456-1.872 3.432-4.8-.024-2.856-1.272-4.56-3.408-4.56-1.752 0-3.072 1.32-3.072 3.12 0 1.752 1.272 3.072 3 3.072 1.224 0 2.208-.72 2.544-1.8h.096c.096 2.304-.456 4.2-2.616 4.2-1.272 0-2.016-.696-2.208-1.968h-.816zm.84-3.432v-.216c0-1.344.816-2.184 2.208-2.184h.096c1.44 0 2.208.936 2.208 2.184v.216c0 1.344-.792 2.208-2.208 2.208h-.096c-1.392 0-2.208-.84-2.208-2.208z"
        fill={color}
      />
    </Svg>
  );
}

export default NineCircledUltraLight;
