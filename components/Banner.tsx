"use client"

export default function Banner() {
  return (
    <div
      className=" relative min-h-[500px] md:h-[600px] flex itemm-center p-10 text-white 
                 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221440%22%20height=%22560%22%20viewBox=%220%200%201440%20560%22%3E%3Crect%20width=%221440%22%20height=%22560%22%20fill=%22%23008fdc%22/%3E%3Ccircle%20cx=%2230%22%20cy=%2280%22%20r=%2230%22%20fill=%22rgba(255,255,255,0.2)%22/%3E%3Ccircle%20cx=%22200%22%20cy=%22150%22%20r=%2250%22%20fill=%22rgba(255,255,255,0.15)%22/%3E%3Ccircle%20cx=%22400%22%20cy=%2290%22%20r=%2240%22%20fill=%22rgba(255,255,255,0.1)%22/%3E%3Ccircle%20cx=%22600%22%20cy=%22200%22%20r=%2270%22%20fill=%22rgba(255,255,255,0.2)%22/%3E%3Ccircle%20cx=%22800%22%20cy=%22100%22%20r=%2250%22%20fill=%22rgba(255,255,255,0.15)%22/%3E%3Ccircle%20cx=%221000%22%20cy=%22200%22%20r=%2240%22%20fill=%22rgba(255,255,255,0.1)%22/%3E%3Ccircle%20cx=%221200%22%20cy=%22120%22%20r=%2260%22%20fill=%22rgba(255,255,255,0.2)%22/%3E%3C/svg%3E')] 
                 bg-cover bg-left"
    >
      {/* Texto */}
      <div className="flex flex-col justify-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Bubble Cleaning Service</h1>
        <p className="max-w-2xl mb-6 text-xl">
          Leave the cleaning to Bubble Cleaning Service and enjoy a spotless home
          without the hassle. Our expert team ensures every corner is organized,
          and impeccably clean!
        </p>
        <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded-md shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.23.2 2.43.57 3.56a1 1 0 01-.24 1.05l-2.21 2.18z" />
          </svg>
          Book now
        </button>
      </div>
    </div>
  )
}
