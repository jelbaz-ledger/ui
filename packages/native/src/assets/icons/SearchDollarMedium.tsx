import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function SearchDollarMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.168 16.608L20.76 22.2l1.44-1.44-5.592-5.592a8.215 8.215 0 001.752-5.088c0-4.56-3.72-8.28-8.28-8.28-4.56 0-8.28 3.72-8.28 8.28 0 4.56 3.72 8.28 8.28 8.28 1.92 0 3.672-.648 5.088-1.752zM3.72 10.08c0-3.504 2.856-6.36 6.36-6.36 3.504 0 6.36 2.856 6.36 6.36 0 3.504-2.856 6.36-6.36 6.36-3.504 0-6.36-2.856-6.36-6.36zm3.312 1.056c-.048 1.416.96 2.496 2.448 2.712v.96h1.2v-.96c1.44-.216 2.472-1.2 2.472-2.4 0-1.176-.816-1.872-2.184-2.064l-1.272-.168c-.72-.096-.984-.288-.984-.84 0-.696.456-.912 1.392-.912 1.056 0 1.32.24 1.296 1.2h1.584c0-1.248-.984-2.256-2.304-2.496v-.96h-1.2v.96c-1.344.216-2.232 1.152-2.232 2.328 0 1.152.72 1.824 1.968 1.968l1.224.144c.84.096 1.128.312 1.128.936 0 .768-.384 1.008-1.488 1.008-1.248 0-1.536-.288-1.536-1.416H7.032z"
        fill={color}
      />
    </Svg>
  );
}

export default SearchDollarMedium;
