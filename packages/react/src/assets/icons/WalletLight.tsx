import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function WalletLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.79988 20.16H21.1199V7.19997H6.35988V8.32797H19.9919V19.008H4.79988C4.29588 19.008 4.03188 18.744 4.03188 18.24V5.75997C4.03188 5.23197 4.29588 4.96797 4.79988 4.96797H19.1279C18.9359 4.29597 18.3119 3.83997 17.5199 3.83997H4.79988C3.69588 3.83997 2.87988 4.65597 2.87988 5.75997V18.24C2.87988 19.344 3.69588 20.16 4.79988 20.16ZM15.2639 13.776C15.2639 14.352 15.7439 14.856 16.3439 14.856C16.8959 14.856 17.3759 14.352 17.3759 13.776C17.3759 13.224 16.8959 12.744 16.3439 12.744C15.7439 12.744 15.2639 13.224 15.2639 13.776Z"
        fill={color}
      />
    </svg>
  );
}

export default WalletLight;
