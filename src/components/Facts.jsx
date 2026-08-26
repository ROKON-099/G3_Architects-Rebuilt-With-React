import ribbonIcon from "../assets/icons/ribon.png";
import projectsIcon from "../assets/icons/projects.png";
import customersIcon from "../assets/icons/customers.png";
import emailIcon from "../assets/icons/email.png";

const Facts = () => {
  const facts = [
    {
      icon: ribbonIcon,
      number: "54",
      label: "Awards Won",
    },
    {
      icon: projectsIcon,
      number: "1458",
      label: "Project Finished",
    },
    {
      icon: customersIcon,
      number: "590",
      label: "Clients Worked",
    },
    {
      icon: emailIcon,
      number: "22578",
      label: "Email Send",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Title + Subtitle - Center */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Some Facts
        </h2>
        <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-5">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>

      {/* 4 Cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white border-2 border-orange-200 rounded-lg p-8 
            flex flex-col items-center justify-center text-center gap-3
            hover:border-orange-500 hover:shadow-lg transition-all duration-300"
          >
            {/* Logo - Centered */}
            <img src={fact.icon} alt={fact.label} className="w-12 h-12 object-contain mb-2" />

            {/* Number */}
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {fact.number}
            </h3>

            {/* Sub title */}
            <p className="text-sm font-medium text-gray-500">
              {fact.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facts;