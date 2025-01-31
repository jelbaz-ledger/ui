import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledMediRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.92801 16.464H15.168V15.096L10.752 15.12V14.76L13.2 13.176C14.664 12.216 15.24 11.304 15.24 10.176C15.24 8.37601 13.8 7.34401 12.024 7.34401C10.056 7.34401 8.73601 8.66401 8.73601 10.176V10.464H10.272V10.2C10.272 9.24001 10.704 8.71201 11.952 8.71201H12.072C13.176 8.71201 13.68 9.14401 13.68 10.224C13.68 10.968 13.44 11.496 11.832 12.552L8.92801 14.472V16.464ZM5.76001 21.24H18.24V19.68H5.76001V21.24ZM5.76001 4.32001H18.24V2.76001H5.76001V4.32001Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledMediRegular;
