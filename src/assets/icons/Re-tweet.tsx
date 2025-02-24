const Retweet = ({ className }: { className: string }) => {
  return (
    <svg
      width={29}
      height={18}
      viewBox="0 0 29 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.0122 0L12.0244 6.12H7.42683V14.76H16.622L19.4512 17.64H7.42683C6.67646 17.64 5.95682 17.3366 5.42623 16.7965C4.89564 16.2564 4.59756 15.5238 4.59756 14.76V6.12H0L6.0122 0ZM22.9878 18L16.9756 11.88H21.5732V3.24H12.378L9.54878 0.36H21.5732C22.3235 0.36 23.0432 0.663428 23.5738 1.20353C24.1044 1.74364 24.4024 2.47618 24.4024 3.24V11.88H29L22.9878 18Z"
        fill="white"
      />
    </svg>
  );
};

export default Retweet;
