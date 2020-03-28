export const PlayButton = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 42"
    className={className}
    fill={color}
  >
    <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
      <circle
        cx="20"
        cy="20"
        r="20"
        fill="#1B1B1B"
        fill-opacity=".8"
        fill-rule="nonzero"
        stroke="#FFF"
        stroke-width="1.7"
      />
      <path
        fill="#FFF"
        d="M29.296 18.383c.386.298.58.678.58 1.14 0 .464-.194.844-.58 1.142l-14.661 8.234c-.211.099-.404.149-.58.149-.282 0-.528-.1-.739-.298a.925.925 0 0 1-.316-.694V10.992c0-.264.105-.496.316-.694.211-.199.457-.298.739-.298.21 0 .404.05.58.149l14.66 8.234z"
      />
    </g>
  </svg>
);
