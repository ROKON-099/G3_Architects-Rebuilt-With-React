import bannerImg from "../assets/banner/banner.png";

const Banner = () => {
  return (
    <section className="bg-orange-50">
      <div className="w-[92%] sm:w-[90%] max-w-7xl mx-auto text-center py-7 sm:py-9 md:py-11 lg:py-13">

        {/* Banner Text */}
        <div className="max-w-3xl mx-auto">

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            <span className="block">Brand New</span>
            <span className="block">Group of Architects</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 leading-5 sm:leading-6 max-w-xl mx-auto">
            We create innovative architectural designs that combine creativity,
            functionality, and modern technology to build beautiful spaces for
            the future.
          </p>

          {/* Explore Button */}
          <button className="mt-4 sm:mt-5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Banner Image */}
        <div className="mt-7 sm:mt-8 md:mt-10">
          <img
            src={bannerImg}
            alt="Group of Architects"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;