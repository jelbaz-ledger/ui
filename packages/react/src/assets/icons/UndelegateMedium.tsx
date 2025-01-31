import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function UndelegateMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.43594 9.88794L20.5559 22.0079L21.8519 20.7119L3.13194 1.99194L1.83594 3.28794L7.06794 8.51994C6.37194 9.52794 5.93994 10.7279 5.93994 11.9999V20.3999H7.85994V11.9999C7.85994 11.1839 8.05194 10.4879 8.43594 9.88794ZM10.2839 6.35994L11.8919 7.96794H11.9399H18.9959C18.5399 8.37594 18.1079 8.75994 17.6999 9.16794L16.6439 10.2479L17.8199 11.4239L22.1639 7.05594L17.8199 2.71194L16.6439 3.91194L17.6999 4.96794C18.0839 5.35194 18.5159 5.75994 18.9479 6.14394H11.8439C11.2919 6.14394 10.7639 6.21594 10.2839 6.35994Z"
        fill={color}
      />
    </svg>
  );
}

export default UndelegateMedium;
