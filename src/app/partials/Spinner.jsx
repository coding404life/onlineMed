import Image from "next/image";

const Spinner = ({ className = "", size = 20, alt = "Loading", ...props }) => (
  <Image
    src="loading-spinner.svg"
    className={`animate-spin ${className}`}
    width={size}
    height={size}
    alt={alt}
    {...props}
  />
);

export default Spinner;
