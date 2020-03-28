export const PremiumMemberIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={className}
  >
    <defs>
      <linearGradient id="a" x1="33.48%" x2="153.275%" y1="100%" y2="-105.737%">
        <stop offset="0%" stop-color="#65E619" />
        <stop offset="29.802%" stop-color="#28E7DC" />
        <stop offset="100%" stop-color="#2201D3" />
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect width="20" height="20" fill="url(#a)" rx="4" />
      <path
        fill="#282C33"
        fill-rule="nonzero"
        stroke="#282C33"
        d="M13.351 13.459l.881-2.38c-.397.12-.812.181-1.234.181-1.352 0-2.566-.93-3.385-2.31-.82 1.38-2.033 2.31-3.386 2.31-.423 0-.838-.06-1.234-.178l.881 2.377h7.477zm.555 1.504h-8.6c.076 0 .136.061.136.121 0 .076-.061.136-.136.136h8.6c-.076 0-.136-.061-.136-.121 0-.076.06-.136.136-.136zM9.614 6.705a.602.602 0 1 0 0-1.205.602.602 0 0 0 0 1.205zM3.709 9.224a.209.209 0 1 0 0-.417.209.209 0 0 0 0 .417zm11.81 0a.209.209 0 1 0 0-.417.209.209 0 0 0 0 .417z"
      />
    </g>
  </svg>
);
