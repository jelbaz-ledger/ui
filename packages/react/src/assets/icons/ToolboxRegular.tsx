import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolboxRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.76001 20.22H21.24V11.1L18.6 8.46003H16.824V5.55603C16.824 4.54803 16.056 3.78003 15.072 3.78003H8.92801C7.94401 3.78003 7.17601 4.54803 7.17601 5.55603V8.46003H5.40001L2.76001 11.1V20.22ZM4.29601 18.756V15.444H7.77601V16.716H9.26401V15.444H14.736V16.716H16.224V15.444H19.728V18.756H4.29601ZM4.29601 13.956V11.7L6.04801 9.92403H17.952L19.728 11.7V13.956H16.224V12.636H14.736V13.956H9.26401V12.636H7.77601V13.956H4.29601ZM8.64001 8.46003V5.60403C8.64001 5.38803 8.78401 5.24403 9.00001 5.24403H15C15.216 5.24403 15.36 5.38803 15.36 5.60403V8.46003H8.64001Z"
        fill={color}
      />
    </svg>
  );
}

export default ToolboxRegular;
