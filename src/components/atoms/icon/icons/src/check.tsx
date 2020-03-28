export const Check = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill={color}
  >
    <title>check</title>
    <polygon points="19.06 5.28 9.88 14.46 4.94 9.52 2.81 11.65 7.75 16.59 7.76 16.6 9.88 18.72 21.19 7.41 19.06 5.28" />
  </svg>
);
