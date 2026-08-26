import sponsor1 from "../assets/sponsors/spotify.png";
import sponsor2 from "../assets/sponsors/amazon.png";
import sponsor3 from "../assets/sponsors/google.png";
import sponsor4 from "../assets/sponsors/telerama.png";
import sponsor5 from "../assets/sponsors/figma.png";

const Sponsors = () => {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title + Subtitle - Center */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Our Sponsors
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-5">
            There are many variations of passages of Lorem Ipsum available, <br className="hidden sm:block"/>
            but the majority have suffered alteration.
          </p>
        </div>

        {/* 5 Sponsor Logos in one row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {sponsors.map((logo, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              <img 
                src={logo} 
                alt={`Sponsor ${index + 1}`} 
                className="h-6 sm:h-10 object-contain" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sponsors;