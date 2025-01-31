import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledUpUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.592 8.208V17.04H12.408V8.184C13.032 8.832 13.632 9.432 14.256 10.056L15.816 11.616L16.344 11.064L12 6.72L7.656 11.064L8.208 11.616L9.744 10.056C10.368 9.456 10.968 8.832 11.592 8.208ZM3 12C3 17.04 6.96 21 12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12ZM3.84 12C3.84 7.416 7.44 3.84 12 3.84C16.584 3.84 20.16 7.416 20.16 12C20.16 16.44 16.584 20.16 12 20.16C7.44 20.16 3.84 16.56 3.84 12Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledUpUltraLight;
