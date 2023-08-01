import { useState } from "react";
import Logo from "../assets/images/logo.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Mobile Menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="p-8">
        <div className="max-w-8xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-10">
              <a href="#" className="flex items-center">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="inter-400 hidden items-center space-x-10 text-gray-500 sm:flex">
              <a href="#">Home</a>
              <a href="#">New</a>
              <a href="#">Popular</a>
              <a href="#">Trending</a>
              <a href="#">Categories</a>
            </div>
            {/* mobile button */}
            <div className="flex items-center text-black sm:hidden">
              <button onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`h-10 w-10 ${isOpen ? "hidden" : ""}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`h-10 w-10 ${isOpen ? "" : "hidden"}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`mt-6 border text-center text-black shadow-md sm:hidden ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a className="block px-4 py-2 hover:bg-gray-200" href="#">
            Home
          </a>
          <a className="block px-4 py-2 hover:bg-gray-200" href="#">
            New
          </a>
          <a className="block px-4 py-2 hover:bg-gray-200" href="#">
            Popular
          </a>
          <a className="block px-4 py-2 hover:bg-gray-200" href="#">
            Trending
          </a>
          <a className="block px-4 py-2 hover:bg-gray-200" href="#">
            Categories
          </a>
        </div>
      </nav>
    </>
  );
}
