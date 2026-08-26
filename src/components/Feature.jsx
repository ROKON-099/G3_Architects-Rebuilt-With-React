import Team1 from "../assets/banner/team1.png";
import Team2 from "../assets/banner/team2.png";
import Team3 from "../assets/banner/team3.png";
import Team4 from "../assets/banner/team4.png";

const Feature = () => {
  const images = [Team1, Team2, Team3, Team4];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left - 2x2 Images */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Feature ${index + 1}`}
                className="w-full h-52 sm:h-60 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Right - Content */}
        <div className="space-y-5">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Quick list of <span className="text-black font-bold">Our</span>{" "}
            <span className="text-orange-500 font-bold">Features</span>
          </h2>
          <p className="text-sm leading-6 text-gray-500 max-w-lg">
            We provide modern and innovative solutions designed to make your
            projects easier, faster, and more efficient. Our features combine
            quality, creativity, and functionality in one place.
          </p>

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white
            font-semibold text-sm px-6 py-3 rounded-md
            transition duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
