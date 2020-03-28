export const LeftArrow = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 11"
    className={className}
    fill={color}
  >
    <g fill="none" fill-rule="evenodd">
      <path fill="#FFF" d="M5.663 0L0 5.5 5.663 11 7 9.702 2.65 5.5 7 1.298z" />
      <path stroke="#FFF" stroke-width="2" d="M2.022 5.458h16" />
    </g>
  </svg>
);
