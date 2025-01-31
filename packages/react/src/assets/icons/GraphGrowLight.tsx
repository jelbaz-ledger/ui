import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function GraphGrowLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.98779 14.4L7.71579 9.696H15.2278L19.9558 4.968C19.9318 5.832 19.9318 6.672 19.9318 7.512V9.288H21.0118L20.9878 3.12H14.8438V4.2H16.6198C17.4598 4.2 18.2998 4.2 19.1398 4.176L14.7238 8.568H7.23579L2.98779 12.792V14.4ZM2.98779 20.88H4.23579V17.952H2.98779V20.88ZM7.16379 20.88H8.43579V16.056H7.16379V20.88ZM11.3638 20.88H12.6118V12.96H11.3638V20.88ZM15.5398 20.88H16.8118V15.12H15.5398V20.88ZM19.7158 20.88H20.9878V12H19.7158V20.88Z"
        fill={color}
      />
    </svg>
  );
}

export default GraphGrowLight;
