import Image from "next/image";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer>

      <div className="bg-sky-700 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Logo + Social */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <Image
          className="text-white"
            src="/logo.png" // troque pelo seu logo branco
            alt="Bubble Cleaning Services"
            width={200}
            height={80}
          />
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/bubblecleaningservice1"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sky-700 hover:bg-sky-100 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/bubblecleaning.services"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sky-700 hover:bg-sky-100 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Residential Cleaning</li>
            <li>Office Cleaning</li>
            <li>Appliance Cleaning</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
              <Mail className="text-white" size={20} />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Email Support</p>
              <p>contact@mrbubblecleaning.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
              <Phone className="text-white" size={20} />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Need more help?</p>
              <p>+1 (508) 665-7196</p>
              <p>+1 (781) 568-1771</p>
            </div>
          </div>
        </div>
      </div>

      {/* Efeito de bolhas no canto direito */}
      <div className="absolute inset-0 bg-[url('/footer-bg.png')] bg-cover bg-right opacity-20 pointer-events-none" />
    </div>


      <div className="bg-[#cce0ff] py-4 text-center">
        <p className="text-sm font-medium text-gray-800">
          Copyright ©2025 Mr Bubble Cleaning Services, All rights reserved. Powered by{" "}
          <span className="font-bold">Junior.</span>
        </p>
        <div className="mt-2 flex justify-center space-x-6 text-sm font-medium text-gray-800">
          <a href="#" className="hover:underline">
            Term of services
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
