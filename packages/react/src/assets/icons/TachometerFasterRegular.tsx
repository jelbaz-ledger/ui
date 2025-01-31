import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerFasterRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.06813 20.124H19.8601C20.7001 19.188 21.4441 17.7 21.7801 16.284H20.1481C19.9081 17.1 19.5481 17.892 19.1161 18.564H4.86013C3.99613 17.244 3.49213 15.66 3.49213 13.956C3.49213 9.25198 7.30813 5.43598 11.9881 5.43598C15.8761 5.43598 19.1401 8.05198 20.1481 11.604H21.7801C20.7241 7.18798 16.7401 3.87598 11.9881 3.87598C6.44413 3.87598 1.93213 8.41198 1.93213 13.956C1.93213 16.284 2.74813 18.444 4.06813 20.124ZM11.2201 13.956C11.2201 14.388 11.5561 14.724 11.9881 14.724H22.0681V13.164H11.9881C11.5561 13.164 11.2201 13.524 11.2201 13.956Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerFasterRegular;
