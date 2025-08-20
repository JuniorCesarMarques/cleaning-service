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
    <nav className="p-4 flex items-center justify-between">
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
            <li>CONTACT US</li>
          </ul>
        </PopoverContent>
      </Popover>

      <button className="uppercase bg-primary text-white px-6 py-2 rounded font-bold">
        Contact us
      </button>
    </nav>
  )
}
