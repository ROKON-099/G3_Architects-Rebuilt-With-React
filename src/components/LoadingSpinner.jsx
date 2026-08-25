const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="flex flex-col items-center gap-5">
        
        {/* -----------------Spinner -----------------*/}
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>

          {/* Spinner ring */}
          <div className="relative h-full w-full rounded-full border-4 border-gray-200 dark:border-gray-800">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-blue-400 animate-spin"></div>
          </div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-blue-600 animate-pulse"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Loading
            <span className="inline-flex ml-1">
              <span className="animate-bounce [animation-delay:0ms]">.</span>
              <span className="animate-bounce [animation-delay:150ms]">.</span>
              <span className="animate-bounce [animation-delay:300ms]">.</span>
            </span>
          </p>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Please wait a moment
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoadingSpinner;