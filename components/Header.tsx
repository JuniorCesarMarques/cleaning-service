import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF, FaInstagram  } from "react-icons/fa";

import { BsFillTelephoneFill } from "react-icons/bs";

export default function Header() {
    return(
        <header>
            <div className="bg-primary font-roboto flex flex-col sm:flex-row justify-between gap-3 p-3">
                <span className="flex justify-center items-center gap-2 font-bold text-white">
                    <FaRegClock />
                    Open : 9am - 5pm ( Sunday - Friday )
                </span>
                <span className="text-white flex justify-center gap-2">
                    <a target="blank" href="https://www.facebook.com/bubblecleaningservice1">
                        <FaFacebookF />
                    </a>
                    <a target="blank" href="https://www.instagram.com/bubblecleaning.services">
                        <FaInstagram  />
                    </a>
                </span>
            </div>

            <div className="hidden lg:flex items-center justify-between px-30 py-5">
                <img className="w-35" src="/logo.png" alt="" />
                <div className="flex items-center gap-6">

                    <div className="flex gap-2">
                        <BsFillTelephoneFill className="text-white bg-primary rounded-full w-10 h-10 p-2" />
                        <div className="flex flex-col items-start">
                            <p className="font-bold text-zinc-600">Call Us Anytime</p>
                            <p className="text-primary font-bold">(508) 665-7196</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <BsFillTelephoneFill className="text-white bg-primary rounded-full w-10 h-10 p-2" />
                        <div className="flex flex-col items-start">
                            <p className="font-bold text-zinc-600">contact@mrbubblecleaning.com</p>
                            <p className="text-primary font-bold">Mail to Us</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <BsFillTelephoneFill className="text-white bg-primary rounded-full w-10 h-10 p-2" />
                        <div className="flex flex-col items-start">
                            <p className="font-bold text-zinc-600">Boston MA</p>
                            <p className="text-primary font-bold">Address</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}