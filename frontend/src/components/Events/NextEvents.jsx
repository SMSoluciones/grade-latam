import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import AOS from "aos";
import "aos/dist/aos.css";

const API_URL = "http://localhost:3001/api/events";

const NextEvents = ({ hideAllEventsButton = false }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

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
      <h2
        className="text-4xl font-bold text-center text-[#23395d] mb-12"
        data-aos="fade-up"
      >
        Próximos eventos
      </h2>
      <div className="flex flex-col gap-12 items-center">
        {loading && (
          <div className="text-center" data-aos="fade-up">
            Cargando eventos...
          </div>
        )}
        {!loading && events.length === 0 && (
          <div className="text-center" data-aos="fade-up">
            No hay eventos disponibles.
          </div>
        )}
        {events.map((event, index) => (
          <div
            key={event.id}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Añade un retraso progresivo para cada cuadro
          >
            <EventCard
              image={event.image}
              title={event.title}
              date={event.date} // { day: '4', month: 'OCT' }
              description={event.description}
              link={event.link}
            />
          </div>
        ))}
      </div>
        {/* Botón de todos los eventos condicional */}
        {!hideAllEventsButton && (
          <div className="flex justify-center mt-10" data-aos="fade-up">
            <a
              href="/eventos"
              className="bg-[#4669a5] text-white font-bold py-3 px-8 rounded-full text-lg shadow hover:bg-[#23395d] transition"
            >
              Todos los eventos
            </a>
          </div>
        )}
    </section>
  );
};

export default NextEvents;
