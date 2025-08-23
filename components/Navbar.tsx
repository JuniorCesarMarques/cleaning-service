"use client"

import { useState } from "react"
import { IoIosMenu } from "react-icons/io"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Span } from "next/dist/trace";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-zinc-100">
        {/* Desktop menu */}
        <div className="hidden lg:flex items-center justify-between w-full p-5">
            <ul className="flex gap-2 text-primary font-bold uppercase">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <button className="uppercase bg-primary text-white px-6 py-2 rounded font-bold">
                 Contact us
             </button>
        </div>
        {/* Mobile menu */}
      <div className="lg:hidden flex justify-between w-full p-4">
          <Popover>
            <PopoverTrigger asChild>
              <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 flex justify-center items-center bg-primary rounded text-white">
                {!isOpen ? <IoIosMenu size={28} /> : <span className="text-2xl font-bold">X</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <ul>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>ABOUT US</li>
                <a href="tel:+15086657196">
                  <li>CONTACT US</li>
                </a>
              </ul>
            </PopoverContent>
          </Popover>

      <a href="tel:+15086657196">
        <button className="uppercase bg-primary text-white px-6 py-2 rounded font-bold">
          Contact us
        </button>
      </a>
    </div>


    </nav>
  )
}
