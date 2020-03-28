export const ProfileIcon = ({
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
    viewBox="0 0 46 46"
  >
    <defs>
      <circle id="a" cx="23" cy="23" r="23" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="b" fill="#fff">
        <use href="#a" />
      </mask>
      <use fill="#1B1B20" href="#a" />
      <path
        fill="#7B7D81"
        fill-rule="nonzero"
        d="M28 18.5c0-3.033-2.467-5.5-5.5-5.5a5.506 5.506 0 0 0-5.5 5.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5m4.917 12.41c.391 1.55-.655 3.09-2.074 3.09H15.157c-1.419 0-2.465-1.54-2.074-3.09.748-2.967 2.549-5.444 4.925-6.91A7.387 7.387 0 0 0 23 25.932 7.385 7.385 0 0 0 27.992 24c2.376 1.466 4.177 3.943 4.925 6.91"
        mask="url(#b)"
      />
    </g>
  </svg>
);
