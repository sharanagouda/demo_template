export const ChevronUp = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 7"
    className={className}
    fill={color}
  >
    <path
      fill="#D5D5D5"
      fill-rule="evenodd"
      d="M0 5.663L5.5 0 11 5.663 9.702 7 5.5 2.65 1.298 7z"
    />
  </svg>
);
