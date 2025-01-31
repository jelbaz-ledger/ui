import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.704C13.92 16.704 15.144 15.384 15.144 13.608C15.144 11.808 13.896 10.536 12.168 10.536C11.28 10.536 10.56 10.896 10.104 11.496H10.008L10.344 8.352H14.64V7.584H9.64801L9.16801 12.744H9.96001C10.248 11.856 10.896 11.28 12.024 11.28H12.072C13.488 11.28 14.304 12.12 14.304 13.512V13.704C14.304 15.096 13.536 15.936 12.024 15.936H11.976C10.464 15.936 9.69601 15.072 9.67201 13.752H8.85601C8.85601 15.408 10.08 16.704 12 16.704ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84Z"
        fill={color}
      />
    </svg>
  );
}

export default FiveCircledMediUltraLight;
