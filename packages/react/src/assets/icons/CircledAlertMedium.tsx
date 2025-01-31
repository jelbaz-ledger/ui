import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledAlertMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1839 13.5359H12.7919L13.0319 10.2239V6.76789H10.9679V10.2239L11.1839 13.5359ZM2.63989 11.9999C2.63989 17.2319 6.76789 21.3599 11.9999 21.3599C17.2559 21.3599 21.3599 17.0879 21.3599 11.9999C21.3599 6.76789 17.2319 2.63989 11.9999 2.63989C6.76789 2.63989 2.63989 6.76789 2.63989 11.9999ZM4.55989 11.9999C4.55989 7.82389 7.82389 4.55989 11.9999 4.55989C16.1759 4.55989 19.4399 7.82389 19.4399 11.9999C19.4399 16.0559 16.1759 19.4399 11.9999 19.4399C7.82389 19.4399 4.55989 16.1759 4.55989 11.9999ZM10.8479 17.2799H13.1519V14.9759H10.8479V17.2799Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledAlertMedium;
