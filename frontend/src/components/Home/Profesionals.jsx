import React from "react";

const professionals = [
  {
    id: 1,
    name: "Dr. Alberto Lorenzatti",
    specialty: "Cardiología",
    country: "Argentina",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Daniel Piskorz",
    specialty: "Cardiología",
    country: "Argentina",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 3,
    name: "Dr. Ricardo Lopez Santi",
    specialty: "Cardiología",
    country: "Argentina",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 4,
    name: "Dr. Fernando Wyss",
    specialty: "Cardiología",
    country: "Argentina",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 5,
    name: "Dr. Osiris Valdez Tiburcio",
    specialty: "Cardiología",
    country: "Rep. Dominicana",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const Profesionals = () => {
  return (
    <section className="w-full py-16">
      <h2 className="text-4xl font-bold text-center text-[#23395d] mb-12">
        Equipo de expertos
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {professionals.map((prof, idx) => (
          <div
            key={prof.id}
            className={`w-[240px] h-[340px] rounded-2xl shadow-lg overflow-hidden flex flex-col justify-end relative ${
              idx === 1 ? "bg-[#4669a5]" : "bg-gray-100"
            }`}
          >
            <img
              src={prof.image}
              alt={prof.name}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[70%] object-cover"
            />
            <div
              className={`absolute inset-0 ${
                idx === 1
                  ? "bg-gradient-to-t from-[#4669a5] via-[#4669a5]/60 to-transparent"
                  : "bg-gradient-to-t from-gray-100 via-gray-100/60 to-transparent"
              }`}
            ></div>
            <div
              className={`relative z-10 p-6 text-left ${
                idx === 1 ? "text-white" : "text-[#23395d]"
              }`}
            >
              <div className="font-bold text-lg mb-1">{prof.name}</div>
              <div className="text-sm font-semibold">
                {prof.specialty} - {prof.country}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profesionals;
