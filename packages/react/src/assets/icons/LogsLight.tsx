import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LogsLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.76001 13.08H21.24V11.88H2.76001V13.08ZM2.76001 18.6H16.44V17.4H2.76001V18.6ZM2.76001 8.49602L5.25601 6.96002L2.76001 5.40002V8.49602ZM7.44001 7.56002H21.24V6.36002H7.44001V7.56002Z"
        fill={color}
      />
    </svg>
  );
}

export default LogsLight;
