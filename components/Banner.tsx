"use client"

import { BsFillTelephoneFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function Banner() {
  const images = [
    { imgUrl: "/slide/woman-cleaning.jpg" },
    { imgUrl: "/slide/woman-mopping.jpg" },
    { imgUrl: "/slide/man-cleaning.jpg" },
  ]

  return (
    <div
      className="relative min-h-[500px] md:h-[600px] text-white pb-10
                 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221440%22%20height=%22560%22%20viewBox=%220%200%201440%20560%22%3E%3Crect%20width=%221440%22%20height=%22560%22%20fill=%22%23008fdc%22/%3E%3Ccircle%20cx=%2230%22%20cy=%2280%22%20r=%2230%22%20fill=%22rgba(255,255,255,0.2)%22/%3E%3Ccircle%20cx=%22200%22%20cy=%22150%22%20r=%2250%22%20fill=%22rgba(255,255,255,0.15)%22/%3E%3Ccircle%20cx=%22400%22%20cy=%2290%22%20r=%2240%22%20fill=%22rgba(255,255,255,0.1)%22/%3E%3Ccircle%20cx=%22600%22%20cy=%22200%22%20r=%2270%22%20fill=%22rgba(255,255,255,0.2)%22/%3E%3Ccircle%20cx=%22800%22%20cy=%22100%22%20r=%2250%22%20fill=%22rgba(255,255,255,0.15)%22/%3E%3Ccircle%20cx=%221000%22%20cy=%22200%22%20r=%2240%22%20fill=%22rgba(255,255,255,0.1)%22/%3E%3Ccircle%20cx=%221200%22%20cy=%22120%22%20r=%2260%22%20fill=%22rgba(255,255,255,0.2)%22/%3E%3C/svg%3E')] 
                 bg-cover bg-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
  {/* Slider */}
  <div className="order-1 md:order-2 h-full w-full">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay
      className="h-full"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img.imgUrl}
            alt="Cleaning service"
            className="h-full w-full object-cover md:rounded-bl-[150px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Texto */}
  <div className="order-2 md:order-1 flex flex-col justify-center pt-6 md:px-10 text-center md:text-left max-w-xl mx-auto md:mx-0">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Bubble Cleaning Service
    </h1>
    <p className="mb-6 text-lg md:text-xl">
      Leave the cleaning to Bubble Cleaning Service and enjoy a spotless
      home without the hassle. Our expert team ensures every corner is
      organized, and impeccably clean!
    </p>
    <button className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded-md shadow-lg w-full md:w-auto mx-auto md:mx-0">
      <BsFillTelephoneFill />
      Book now
    </button>
  </div>
</div>

    </div>
  )
}
