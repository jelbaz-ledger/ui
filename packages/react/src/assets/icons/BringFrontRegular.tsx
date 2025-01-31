import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BringFrontRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6 21.24H21.24V12.6H18.36V14.064H19.776V19.776H14.064V18.36H12.6V21.24ZM2.76001 11.4H5.64001V9.93601H4.22401V4.22401H10.056V5.64001H11.52V2.76001H2.76001V11.4ZM7.68001 16.32H16.32V7.68001H7.68001V16.32ZM9.14401 14.856V9.14401H14.856V14.856H9.14401Z"
        fill={color}
      />
    </svg>
  );
}

export default BringFrontRegular;
