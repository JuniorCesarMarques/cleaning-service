export default function Button() {
  return (
    <>
      <a
        href="tel:+15086657196"
        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-md text-white font-medium shadow w-full md:w-auto animate-[pulse-scale_1.5s_ease-in-out_infinite]"
      >
        📞 Call Now
      </a>

      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
}
