import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledMediMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.7039C13.944 16.7039 15.336 15.4079 15.336 13.6319C15.336 11.9279 14.088 10.5839 12.408 10.5839C11.784 10.5839 11.256 10.7759 10.896 11.1119H10.608L10.896 9.21589H14.808V7.58389H9.40801L8.95201 12.7439H10.632C10.848 12.3359 11.16 12.1919 11.904 12.1919H12.024C13.056 12.1919 13.416 12.4559 13.416 13.2719V13.9439C13.416 14.7839 13.08 15.0479 12.048 15.0479H11.928C10.848 15.0479 10.536 14.7359 10.488 13.7519H8.59201C8.59201 15.4559 10.032 16.7039 12 16.7039ZM5.76001 21.3599H18.24V19.4399H5.76001V21.3599ZM5.76001 4.55989H18.24V2.63989H5.76001V4.55989Z"
        fill={color}
      />
    </svg>
  );
}

export default FiveCircledMediMedium;
