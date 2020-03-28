export const Play = ({
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
    <title>play</title>
    <path d="M4.42,4l15.16,8L4.42,20Z" />
  </svg>
);
