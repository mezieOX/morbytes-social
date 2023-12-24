const Menu = ({ className }: { className: string }) => {
  return (
    <svg
      width={5}
      height={19}
      viewBox="0 0 5 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="rotate(90 2.5 2.5)"
        fill="#D9D9D9"
      />
      <circle
        cx="2.5"
        cy="9.5"
        r="2.5"
        transform="rotate(90 2.5 9.5)"
        fill="#D9D9D9"
      />
      <circle
        cx="2.5"
        cy="16.5"
        r="2.5"
        transform="rotate(90 2.5 16.5)"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export default Menu;
