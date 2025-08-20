import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF, FaInstagram  } from "react-icons/fa";

export default function Header() {
    return(
        <div className="bg-primary font-roboto flex flex-col sm:flex-row justify-between gap-3 p-3">
            <span className="flex justify-center items-center gap-2 font-bold text-white">
                <FaRegClock />
                Open : 9am - 5pm ( Sunday - Friday )
            </span>
            <span className="text-white flex justify-center gap-2">
                <FaFacebookF />
                <FaInstagram  />
            </span>
        </div>
    )
}