import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PhoneRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0719 21.6L21.5999 17.928L15.9839 12.864L11.7119 17.04C10.8239 16.392 9.9599 15.648 9.1439 14.856C8.3519 14.04 7.6079 13.176 6.9599 12.288L11.1359 8.01602L6.0719 2.40002L2.3999 5.95202C3.1199 9.60002 5.3039 13.152 8.0639 15.936C10.8719 18.72 14.3759 20.904 18.0719 21.6ZM4.1039 6.45602L5.9999 4.63202L8.9999 7.99202L6.0719 10.968C5.1839 9.52802 4.5119 8.01602 4.1039 6.45602ZM13.0319 17.928L16.0079 15L19.3679 18L17.5439 19.896C15.9599 19.488 14.4479 18.816 13.0319 17.928Z"
        fill={color}
      />
    </svg>
  );
}

export default PhoneRegular;
