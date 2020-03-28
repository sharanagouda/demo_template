export const Logout = ({
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
    viewBox="0 0 16 16"
  >
    <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round">
      <path stroke-width="1.8" d="M3.805 2.396a7 7 0 1 0 8.4.007" />
      <path stroke-width="2" d="M7.981 1.44L8 6.5" />
    </g>
  </svg>
);
