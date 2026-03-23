import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3001/api/events";

const NextEvents = ({ hideAllEventsButton = false }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEvents([
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        title: "Congreso Europeo de Cardiología 2025",
        date: { day: "4", month: "OCT" },
        description: "Breve descripción acerca del evento en sí.",
        link: "#saber-mas",
      },
    ]);
    setLoading(false);

    // fetch(API_URL)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setEvents(data);
    //     setLoading(false);
    //   })
    //   .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full py-16 mt-20 section-shell">
      <h2
        className="headline-md text-center text-primary mb-12"
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
            <Link
              to="/events"
              className="cta-primary text-lg"
            >
              Todos los eventos
            </Link>
          </div>
        )}
    </section>
  );
};

export default NextEvents;
