const Spinner = ({ size = "md" }) => {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-16 w-16 sm:h-20 sm:w-20",
    lg: "h-24 w-24",
  };

  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className={`relative ${sizes[size]}`}>
        {/* Outer spinning ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-orange-100 border-t-orange-500 duration-700"></div>

        {/* Inner circle with ping */}
        <div className="absolute inset-3 flex items-center justify-center rounded-full bg-orange-500 shadow-lg shadow-orange-300/50">
          <div className="h-3 w-3 animate-ping rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;