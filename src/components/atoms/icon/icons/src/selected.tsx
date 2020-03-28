export const Selected = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="22"
    viewBox="0 0 32 22"
    className={className}
    fill={color}
  >
    <path
      fill="none"
      fill-rule="evenodd"
      stroke="#FFF"
      stroke-width="4"
      d="M2 10l9 9L30 2"
    />
  </svg>
);
