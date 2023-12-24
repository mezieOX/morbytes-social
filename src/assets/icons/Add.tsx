const Add = ({ className }: { className: string }) => {
  return (
    <svg
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={21} cy={21} r={18} stroke="white" strokeWidth="4.09091" />
      <path
        d="M21 12L21 30"
        stroke="white"
        strokeWidth="4.09091"
        strokeLinecap="round"
      />
      <path
        d="M30 21L12 21"
        stroke="white"
        strokeWidth="4.09091"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Add;
