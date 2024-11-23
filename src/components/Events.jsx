"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Summer Championship",
    type: "Tournament",
    date: "July 15-16, 2024",
    location: "Central Padel Arena",
    image: "/workshop1.png",
    price: "$50",
  },
  {
    id: 2,
    title: "Beginner's Workshop",
    type: "Workshop",
    date: "June 1, 2024",
    location: "PadelHub Training Center",
    image: "/workshop1.png",
    price: "$30",
  },
  {
    id: 3,
    title: "Advanced Techniques",
    type: "Workshop",
    date: "June 8, 2024",
    location: "Padel Training Center",
    image: "/workshop1.png",
    price: "$40",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Upcoming Events & Workshops
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our exciting tournaments and skill-building workshops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover "
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {event.type}
                </div>
              </div>
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">{event.title}</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  Limited spots available
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-lg font-bold">{event.price}</span>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
