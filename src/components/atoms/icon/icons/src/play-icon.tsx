export const PlayIcon = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
    fill={color}
  >
    <defs>
      <linearGradient
        id="a"
        x1="-69.49%"
        x2="197.108%"
        y1="135.159%"
        y2="-9.442%"
      >
        <stop offset="0%" stop-color="#43E7A2" />
        <stop offset="100%" stop-color="#004BFF" />
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="#FFF"
        stroke="url(#a)"
        d="M15 0c2.74 0 5.276.685 7.608 2.055a14.217 14.217 0 0 1 5.337 5.337C29.315 9.724 30 12.26 30 15c0 2.74-.685 5.276-2.055 7.608a14.217 14.217 0 0 1-5.337 5.337C20.276 29.315 17.74 30 15 30c-2.74 0-5.276-.685-7.608-2.055a14.486 14.486 0 0 1-5.337-5.373A14.686 14.686 0 0 1 0 15c0-2.716.685-5.24 2.055-7.572a14.763 14.763 0 0 1 5.373-5.373A14.686 14.686 0 0 1 15 0z"
        transform="translate(1 1)"
      />
      <path fill="#0D111D" d="M12.971 22.743L21.986 16 12.97 9.221z" />
    </g>
  </svg>
);
