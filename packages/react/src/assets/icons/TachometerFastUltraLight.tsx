import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerFastUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.26004 19.572H19.716C20.844 18.036 21.564 16.068 21.564 14.004C21.564 11.988 20.916 10.14 19.86 8.58001L19.26 9.20401C20.172 10.572 20.724 12.228 20.724 14.004C20.724 15.732 20.172 17.364 19.284 18.732H4.69204C3.80404 17.364 3.27604 15.732 3.27604 14.004C3.27604 9.18001 7.18804 5.26801 11.988 5.26801C13.764 5.26801 15.42 5.82001 16.788 6.73201L17.412 6.13201C15.852 5.07601 14.004 4.42801 11.988 4.42801C6.70804 4.42801 2.43604 8.72401 2.43604 14.004C2.43604 16.068 3.13204 18.036 4.26004 19.572ZM11.58 14.004C11.58 14.244 11.748 14.412 11.988 14.412C12.108 14.412 12.204 14.388 12.276 14.292L19.068 7.52401L18.468 6.92401L11.7 13.716C11.604 13.788 11.58 13.884 11.58 14.004Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerFastUltraLight;
