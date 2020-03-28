export const Close = ({
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
    <title>close</title>
    <polygon points="20 6.13 17.87 4 12 9.87 6.13 4 4 6.13 9.87 12 4 17.87 6.13 20 12 14.13 17.87 20 20 17.87 14.13 12 20 6.13" />
  </svg>
);
