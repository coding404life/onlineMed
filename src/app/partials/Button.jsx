import Spinner from "./Spinner";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) => {
  const base =
    "rounded-lg font-bold transition cursor-pointer py-3.5 px-2 focus:outline-none flex justify-center";
  const variants = {
    primary: "bg-primary-blue text-white hover:bg-gray",
    secondary:
      "bg-white text-primary-blue border border-primary-blue hover:bg-gray",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
