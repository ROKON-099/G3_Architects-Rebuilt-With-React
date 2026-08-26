import architectImage from "../assets/banner/architect.png";

const Review = () => {
  const reviews = [
    {
      title: "Creative Design",
      text: "Our creative designs are carefully planned to make every project unique, attractive, and functional.",
    },
    {
      title: "Quality Materials",
      text: "We always focus on using quality materials to ensure durability, safety, and long-lasting performance.",
    },
    {
      title: "Expert Team",
      text: "Our experienced team works with dedication and attention to detail to deliver excellent results.",
    },
    {
      title: "Smart Solutions",
      text: "We provide smart and modern solutions that make your project simple, efficient, and successful.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Title */}
          <div className="border-l-4 border-orange-500 pl-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Features you will
              <br />
              love & enjoy
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 leading-6 max-w-lg mb-8">
            Discover powerful features designed to make your experience
            easier, faster, and more enjoyable. We combine modern ideas,
            quality, and functionality to deliver the best results.
          </p>

          {/* 4 Cards - 1 Column */}
          <div className="grid grid-cols-1 gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md
                hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
                  {review.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-5">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative h-full">
          <img
            src={architectImage}
            alt="Architect"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Experience Card */}
          <div
            className="absolute -bottom-6 -left-6
            bg-orange-500 text-white
            px-8 py-6 rounded-lg shadow-2xl
            text-center"
          >
            <h3 className="text-4xl font-bold">
              10+ Years
            </h3>

            <p className="text-sm font-semibold">
               Experience
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Review;