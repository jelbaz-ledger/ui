import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FacebookUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5361 21.3V14.772H8.13614V12.06H10.5361V9.972C10.5361 7.716 11.9281 6.348 14.0881 6.348C14.7601 6.348 15.4321 6.42 16.1521 6.54V8.844H14.9761C13.9681 8.844 13.4881 9.3 13.4881 10.284V12.06H16.1041L15.6481 14.772H13.4881V21.3C17.9761 20.604 21.3601 16.692 21.3601 12.06C21.3601 6.852 17.1841 2.7 12.0001 2.7C6.79214 2.7 2.64014 6.852 2.64014 12.06C2.64014 16.692 6.07214 20.604 10.5361 21.3Z"
        fill={color}
      />
    </svg>
  );
}

export default FacebookUltraLight;
