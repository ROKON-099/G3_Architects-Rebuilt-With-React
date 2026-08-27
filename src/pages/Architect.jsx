import { useState, useEffect } from "react";
import Spinner from "../components/LoadingSpinner";

import image1 from "../assets/architect/image-1.jpg";
import image2 from "../assets/architect/image-2.jpg";
import image3 from "../assets/architect/image-3.jpg";
import image4 from "../assets/architect/image-4.jpg";
import image5 from "../assets/architect/image-5.jpg";
import image6 from "../assets/architect/image-6.jpg";

const architects = [
  {
    id: 1,
    name: "Frank Lloyd Wright",
    specialty: "Organic Architecture",
    image: image1,
    description:
      "Known for integrating buildings with their natural surroundings and creating timeless architectural designs.",
  },
  {
    id: 2,
    name: "Zaha Hadid",
    specialty: "Contemporary Architecture",
    image: image2,
    description:
      "Famous for futuristic forms, flowing curves, and innovative architectural concepts.",
  },
  {
    id: 3,
    name: "Le Corbusier",
    specialty: "Modern Architecture",
    image: image3,
    description:
      "A pioneer of modern architecture who focused on functionality, simplicity, and geometric forms.",
  },
  {
    id: 4,
    name: "Norman Foster",
    specialty: "High-Tech Architecture",
    image: image4,
    description:
      "Recognized for elegant structures combining advanced engineering with modern architectural design.",
  },
  {
    id: 5,
    name: "Tadao Ando",
    specialty: "Minimalist Architecture",
    image: image5,
    description:
      "Known for minimalist concrete structures, natural light, and peaceful architectural spaces.",
  },
  {
    id: 6,
    name: "Bjarke Ingels",
    specialty: "Innovative Architecture",
    image: image6,
    description:
      "Creates innovative and sustainable buildings that combine functionality with creative design.",
  },
];

const Architect = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-2">
            Our Architects
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore More Architects
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
            Discover talented architects and their unique approaches to
            modern, sustainable, and innovative architectural design.
          </p>
        </div>

        {/* Architect Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {architects.map((architect) => (
            <div
              key={architect.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={architect.image}
                  alt={architect.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-orange-500 text-sm font-semibold mb-2">
                  {architect.specialty}
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {architect.name}
                </h2>

                <p className="text-gray-500 text-sm leading-6">
                  {architect.description}
                </p>

                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Architect;