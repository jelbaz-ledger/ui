import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DevicesLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.63984 21.36H12.4318V20.208H5.73584C5.32784 20.208 5.03984 19.944 5.03984 19.536V4.46401C5.03984 4.05601 5.32784 3.76801 5.73584 3.76801H15.5278C15.9358 3.76801 16.1998 4.05601 16.1998 4.46401V6.76801H17.3998V4.44001C17.3998 3.45601 16.5838 2.64001 15.5998 2.64001H5.63984C4.65584 2.64001 3.83984 3.45601 3.83984 4.44001V19.56C3.83984 20.544 4.65584 21.36 5.63984 21.36ZM14.2798 21.36H20.1598V8.64002H14.2798V21.36ZM15.4318 20.208V9.76802H19.0318V20.208H15.4318Z"
        fill={color}
      />
    </svg>
  );
}

export default DevicesLight;
