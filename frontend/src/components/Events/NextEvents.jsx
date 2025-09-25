import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const API_URL = "http://localhost:3001/api/events"; // Cambia la URL según tu backend

const NextEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular fetch con evento mockeado
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          title: "Congreso Europeo de Cardiología 2025",
          date: { day: "4", month: "OCT" },
          description: "Breve descripción acerca del evento en sí.",
          link: "#saber-mas",
        },
      ]);
      setLoading(false);
    }, 800);

    // fetch(API_URL)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setEvents(data);
    //     setLoading(false);
    //   })
    //   .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full py-16 mt-24">
      <h2 className="text-4xl font-bold text-center text-[#23395d] mb-12">
        Próximos eventos
      </h2>
      <div className="flex flex-col gap-12 items-center">
        {loading && <div className="text-center">Cargando eventos...</div>}
        {!loading && events.length === 0 && (
          <div className="text-center">No hay eventos disponibles.</div>
        )}
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date} // { day: '4', month: 'OCT' }
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="/eventos"
          className="bg-[#4669a5] text-white font-bold py-3 px-8 rounded-full text-lg shadow hover:bg-[#23395d] transition"
        >
          Todos los eventos
        </a>
      </div>
    </section>
  );
};

export default NextEvents;
