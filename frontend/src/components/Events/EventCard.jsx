import React from "react";

const EventCard = ({ image, title, date, description, link }) => (
  <div className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden shadow-lg bg-white w-full max-w-5xl mx-auto card-lift border border-slate-100">
    <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full max-h-[320px]"
        loading="lazy"
      />
    </div>
    <div className="md:w-1/2 w-full bg-gradient-to-br from-primary to-secondary-light text-white p-8 md:p-10 flex flex-col justify-between">
      <div>
        <div className="flex justify-end">
          <div className="bg-white rounded-lg px-3 py-2 text-center mb-4 w-fit">
            <span className="block text-xl font-bold text-primary">
              {date.day}
            </span>
            <span className="block text-xs font-bold text-secondary">
              {date.month}
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-white rounded-full px-6 py-2 text-white font-bold hover:bg-white hover:text-primary transition w-fit self-start"
      >
        Saber más &rarr;
      </a>
    </div>
  </div>
);

export default EventCard;
