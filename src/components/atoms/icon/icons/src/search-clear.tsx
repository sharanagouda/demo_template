export const SearchClear = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    className={className}
    fill={color}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 1.8L16.2 0 9 7.2 1.8 0 0 1.8 7.2 9 0 16.2 1.8 18 9 10.8l7.2 7.2 1.8-1.8L10.8 9z"
    />
  </svg>
);
