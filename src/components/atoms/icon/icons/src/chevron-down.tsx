export const ChevronDown = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill={color}
    viewBox="0 0 11 7"
  >
    <path
      fill="#D5D5D5"
      fill-rule="evenodd"
      d="M11 1.337L5.5 7 0 1.337 1.298 0 5.5 4.35 9.702 0z"
    />
  </svg>
);
