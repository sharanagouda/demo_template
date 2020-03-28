export const PremiumFill = ({
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
    viewBox="0 0 10 10"
  >
    <path
      fill="#8445FF"
      fill-rule="nonzero"
      d="M3.836 0l-1.54 2.696L0 2.27 1.88 0h1.956zM.075 2.669l2.12.394 2.14 5.569-4.26-5.963zm4.918.043H2.722L4.27 0h1.458l1.55 2.712H4.992zM5 3.091h2.39L5.131 9.06l-.114.294L2.61 3.09H5zm.72 5.463l2.085-5.491 2.12-.394-4.204 5.885zM6.165 0H8.12L10 2.27l-2.295.426L6.165 0z"
    />
  </svg>
);
