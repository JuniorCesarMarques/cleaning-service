export default function Footer() {
  return (
    <footer className="bg-[#cce0ff] py-4 text-center">
      <p className="text-sm font-medium text-gray-800">
        Copyright ©2025 Mr Bubble Cleaning Services, All rights reserved. Powered by{" "}
        <span className="font-bold">MoxCreative.</span>
      </p>
      <div className="mt-2 flex justify-center space-x-6 text-sm font-medium text-gray-800">
        <a href="#" className="hover:underline">
          Term of services
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
