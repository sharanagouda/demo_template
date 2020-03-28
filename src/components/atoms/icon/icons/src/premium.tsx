export const Premium = ({
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
    viewBox="0 0 24 24"
  >
    <g fill="none" fill-rule="evenodd">
      <rect width="24" height="24" fill="#8445FF" rx="11.182" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M10.206 5.905l-2.61 4.568-3.888-.723 3.186-3.845h3.312zm-6.371 4.52l3.592.669 3.625 9.434-7.217-10.102zm8.332.074H8.319l2.624-4.594h2.471l2.624 4.594h-3.871zm.012.642h4.05L12.4 21.253l-.194.498-4.076-10.61h4.048zm1.221 9.254l3.53-9.301 3.593-.668-7.123 9.97zm.752-14.49h3.312l3.185 3.845-3.888.723-2.61-4.568z"
      />
    </g>
  </svg>
);
