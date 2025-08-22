"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Lado esquerdo */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Logo */}
          <Image
            src="/logo.png" // troque para o caminho da sua imagem
            alt="Bubble Cleaning Services"
            width={350}
            height={300}
            className="relative z-10"
          />

          {/* Bolha redonda */}
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-sky-500 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-lg">
            <span className="text-2xl">4+</span>
            <span className="text-sm font-normal">Years Experience</span>
          </div>
        </div>

        {/* Lado direito */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">
            About Us
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-6">
            Trusted Cleaning Experts
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At Bubble Cleaning Service, we believe that a clean home is a happy
            home. With over 4 years of experience, we have helped countless
            homeowners enjoy spotless and fresh spaces without lifting a finger.
            Our mission is simple: to provide top-tier cleaning services with
            professionalism, efficiency, and attention to detail. We treat every
            home as if it were our own, ensuring our clients are always
            satisfied. Your comfort and satisfaction are our priority!
          </p>
        </div>
      </div>

      {/* Efeito bolinhas no canto inferior direito */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_#93c5fd_1px,_transparent_1px)] [background-size:16px_16px] opacity-30" />
    </section>
  );
}
