"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: "📱", // pode trocar por SVG
    text: "Talk to us and make your reservation",
  },
  {
    icon: "📝",
    text: "Choose the best day and time for you",
  },
  {
    icon: "🧴",
    text: "Your cleaning will be carried out according to your needs",
  },
  {
    icon: "🏡",
    text: "Impeccable cleaning and your home shining",
  },
];

export default function StepsSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-sky-600 to-sky-500 overflow-hidden">
      {/* Bolhas decorativas */}
      <div className="absolute top-10 left-20 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-32 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Four Steps to a Clean House
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center relative"
            >
              {/* Ícone circular */}
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg text-4xl text-sky-600 relative">
                {step.icon}
              </div>

              {/* Texto */}
              <p className="text-white mt-4 max-w-[200px] text-sm md:text-base font-medium">
                {step.text}
              </p>

              {/* Seta exceto no último */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-[-70px]">
                  <ArrowRight
                    size={40}
                    className="text-white stroke-[1.5] animate-pulse"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
