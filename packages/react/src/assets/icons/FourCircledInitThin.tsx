import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledInitThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.992 11.664V13.848H9.79198L13.632 8.064H13.992V11.664ZM4.03198 12C4.03198 16.968 7.94398 20.88 12.912 20.88H19.968V20.4H12.912C8.20798 20.4 4.51198 16.704 4.51198 12C4.51198 7.416 8.20798 3.6 12.912 3.6H19.968V3.12H12.912C7.94398 3.12 4.03198 7.152 4.03198 12ZM9.28798 14.328H13.992V16.464H14.472V14.328H15.984V13.848H14.472V7.584H13.392L9.28798 13.752V14.328Z"
        fill={color}
      />
    </svg>
  );
}

export default FourCircledInitThin;
