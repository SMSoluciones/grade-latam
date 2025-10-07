import React, { useEffect, useState } from "react";

const mockEvents = [
	{
		id: 1,
		month: "APR",
		day: "14",
		title: "Título 1",
		description: "We’ll get you directly seated and inside for you to enjoy the show."
	},
	{
		id: 2,
		month: "MAY",
		day: "22",
		title: "Título 2",
		description: "Evento especial para profesionales de la salud."
	},
	{
		id: 3,
		month: "JUN",
		day: "05",
		title: "Título 3",
		description: "Actualización científica y networking."
	},
	{
		id: 4,
		month: "JUL",
		day: "18",
		title: "Título 4",
		description: "Conferencia internacional de cardiología."
	},
	{
		id: 5,
		month: "AUG",
		day: "30",
		title: "Título 5",
		description: "Curso avanzado de cardiometabolismo."
	},
	{
		id: 6,
		month: "SEP",
		day: "10",
		title: "Título 6",
		description: "Seminario de investigación clínica."
	}
];

const EventGrid = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Simula fetch a base de datos
		setTimeout(() => {
			setEvents(mockEvents);
		}, 500);
	}, []);

	return (
		<section className="w-full flex flex-col items-center py-16">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4">
				{events.map((event) => (
								<div
									key={event.id}
									className="bg-[#f5f8ff] rounded-2xl shadow-xl flex flex-col justify-end h-80 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10"
									style={{ transitionDelay: '120ms' }}
								>
						<div className="flex flex-col justify-end h-full p-0">
							<div className="bg-white rounded-b-2xl px-6 py-6 flex flex-col gap-2">
								<div className="flex items-center gap-4">
									<div className="flex flex-col items-center justify-center mr-2">
										<span className="text-[#20446C] font-bold text-sm">{event.month}</span>
										<span className="text-[#20446C] font-bold text-3xl leading-none">{event.day}</span>
									</div>
									<div>
										<span className="font-bold text-lg text-[#23395d]">{event.title}</span>
										<p className="text-gray-500 text-sm mt-2">{event.description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default EventGrid;
