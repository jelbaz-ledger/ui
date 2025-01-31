import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PenLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.2439 21.756L8.4119 20.052L21.7559 6.75602L17.2439 2.24402L3.9479 15.588L2.2439 21.756ZM3.8759 20.124L4.9559 16.164L7.8359 19.044L3.8759 20.124ZM5.7719 15.372L14.5319 6.58802L17.4119 9.46802L8.6279 18.228L5.7719 15.372ZM15.3239 5.79602L17.2679 3.85202L20.1479 6.73202L18.2039 8.67602L15.3239 5.79602Z"
        fill={color}
      />
    </svg>
  );
}

export default PenLight;
