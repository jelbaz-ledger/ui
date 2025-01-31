import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function HelpUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.28 13.344H12.144C14.256 13.344 15.576 11.856 15.576 9.888C15.576 7.968 14.28 6.408 12.12 6.408C10.032 6.408 8.664 7.896 8.664 9.696V9.768H9.504V9.624C9.504 8.16 10.392 7.224 12.048 7.224H12.168C13.848 7.224 14.736 8.16 14.736 9.744V10.08C14.736 11.664 13.824 12.552 12.264 12.552H11.28V13.344ZM3 12C3 17.04 6.96 21 12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12ZM3.84 12C3.84 7.416 7.44 3.84 12 3.84C16.584 3.84 20.16 7.416 20.16 12C20.16 16.44 16.584 20.16 12 20.16C7.44 20.16 3.84 16.56 3.84 12ZM11.184 16.92H12.84V15.264H11.184V16.92Z"
        fill={color}
      />
    </svg>
  );
}

export default HelpUltraLight;
