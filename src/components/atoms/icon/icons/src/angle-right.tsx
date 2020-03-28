export const AngleRight = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="13"
    viewBox="0 0 8 13"
    className={className}
    fill={color}
  >
    <defs>
      <linearGradient
        id="a"
        x1="4.364%"
        x2="106.184%"
        y1="135.159%"
        y2="-9.442%"
      >
        <stop offset="0%" stop-color="#43E7A2" />
        <stop offset="100%" stop-color="#004BFF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fill-rule="evenodd"
      d="M55.528 0L62 6.472l-6.472 6.473L54 11.417l4.97-4.945L54 1.528z"
      transform="translate(-54)"
    />
  </svg>
);
