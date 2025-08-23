"use client";

import Image from "next/image";
import Button from "./Button";

const services = [
  {
    img: "/images/asian-cleaning.jpg",
    icon: "🏠", // Você pode trocar por SVG
    title: "Home Cleaning",
    desc: "Enjoy a spotless and comfortable home with our thorough cleaning services.",
  },
  {
    img: "/images/cleaning-keyboard.jpg",
    icon: "🏢",
    title: "Office Cleaning",
    desc: "Keep your workspace clean and organized for a more productive environment.",
  },
  {
    img: "/images/cleaning-photo.jpg",
    icon: "📦",
    title: "Move-In Cleaning",
    desc: "Move into a fresh, welcoming home without the stress of cleaning.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-sky-500 mb-12">
        Our Cleaning Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-sky-600 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            {/* Imagem */}
            <div className="relative">
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-tr-[40px]"
              />
              {/* Ícone sobreposto */}
              <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-sky-300 flex items-center justify-center text-2xl shadow">
                {service.icon}
              </div>
            </div>

            {/* Texto */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-white/90 mb-6 flex-1">{service.desc}</p>

              <Button />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
