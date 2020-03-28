export const WatchLater = ({
  className,
  color
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 21"
    className={className}
    fill={color}
  >
    <path
      fill="none"
      fill-rule="evenodd"
      stroke="#FFF"
      stroke-width="1.5"
      d="M15.55 1c.187 0 .375.038.55.113.55.214.9.728.9 1.293v16.188c0 .565-.35 1.08-.9 1.293-.175.075-.363.1-.55.1-.388 0-.75-.138-1.037-.401L9 14.26l-5.513 5.325c-.287.263-.65.414-1.037.414-.187 0-.375-.038-.55-.113-.55-.214-.9-.728-.9-1.293V2.406c0-.565.35-1.08.9-1.293.175-.075.363-.113.55-.113h13.1z"
    />
  </svg>
);
