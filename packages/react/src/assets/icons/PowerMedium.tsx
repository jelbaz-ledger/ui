import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PowerMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.188 22.344L20.292 9.36001H13.788V1.65601L3.70801 14.64H10.188V22.344ZM7.21201 12.96L11.988 6.84001V11.04H16.74L11.988 17.16V12.96H7.21201Z"
        fill={color}
      />
    </svg>
  );
}

export default PowerMedium;
