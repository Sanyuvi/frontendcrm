import React from "react";
import { useNavigate } from "react-router-dom";
import heroBackground from "../Assets/img6.jpg";
import about from "../Assets/about pic.jpg";
import con from "../Assets/con1.jpg";
import interior from "../Assets/interior.jpg";
import villa from "../Assets/villa1.jpg";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const handleLoginClick = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      <nav className=" border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="text-3xl font-bold text-yellow-500">
            BuildIt
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
            onClick={handleToggleClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0   ">
              <li>
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  onClick={handleLoginClick}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#service"
              className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Service
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleLoginClick}
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10 text-white">
          <h1 className="text-5xl font-extrabold mb-4 mt-32">
            Building Things is our Mission
          </h1>
          <p className="text-xl font-extrabold mb-4 mt-4">
            Our seasoned professionals bring decades of expertise to every
            construction endeavor, ensuring top-tier quality and precision.
          </p>
          <a
            href="#"
            className="bg-yellow-500 text-white py-2 px-6 mt-4 rounded-full text-lg hover:bg-yellow-600"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white py-16" id="about">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <img
              src={about}
              alt="About"
              className="max-w-full rounded-md shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-4xl text-zinc-800 font-bold mb-4">
              We Provide the Best Quality
              <br />
              Services Ever
            </h2>
            <p className="text-gray-700 mb-6">
              At <span className="text-yellow-500 font-bold">Build</span>
              <span className="font-bold text-gray-800">It</span>, we're
              dedicated to building a better tomorrow. With over 15 years of
              industry experience, we've honed our craft to deliver top-notch
              construction solutions. Our commitment to quality, safety, and
              innovation drives us to exceed expectations on every project. Led
              by a team of experts, we transform ideas into tangible, lasting
              structures. Choose{" "}
              <span className="text-yellow-500 font-bold">Build</span>
              <span className="font-bold text-gray-800">It</span> for
              construction that stands the test of time.
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-white py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section className="bg-white py-16" id="service">
        <div className="container mx-auto">
          <div className="text-center pb-8">
            <h2 className="text-4xl text-zinc-800 font-bold">Our Services</h2>
            <p className="text-gray-700 mt-1 ">
              At <span className="text-yellow-500 font-bold">Build</span>
              <span className="font-bold ">It</span>, we offer a diverse range
              of services to meet all your construction and design needs.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="bg-white pb-2 text-center rounded-md shadow-lg shadow-gray-700">
              <div className="text-dark p-8">
                <div className="mb-4">
                  <img
                    src={con}
                    alt="Construction"
                    className="w-96 h-64 mx-auto rounded-md"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold">
                  Construction
                </h3>
                <p className="text-gray-700">
                  Master builders, crafting your visions into reality. Quality,
                  precision, and innovation – our foundation for excellence.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg-yellow-500 text-white mt-2 py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white pb-2 text-center rounded-md shadow-lg shadow-gray-700">
              <div className="text-dark p-8">
                <div className="mb-4">
                  <img
                    src={interior}
                    alt="Interior Design"
                    className="w-96 h-64 mx-auto rounded-md"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold">
                  Interior Design
                </h3>
                <p className="text-gray-700">
                  Elevate your spaces with our expert interior design. Tailored
                  solutions that enhance aesthetics and functionality.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg-yellow-500 text-white mt-2 py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white pb-2 text-center rounded-md shadow-lg shadow-gray-700">
              <div className="text-dark p-8">
                <div className="mb-4">
                  <img
                    src={villa}
                    alt="Flat Promoters"
                    className="w-96 h-64 mx-auto rounded-md"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold">
                  Flat Promoters
                </h3>
                <p className="text-gray-700">
                  Your dream home awaits! Discover comfortable living spaces
                  designed with care and style. Welcome to a better life.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg-yellow-500 text-white  py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-zinc-800 font-bold mb-6">Contact Us</h2>
          <p className="text-gray-700 text-lg mb-8">
            Have a question, request, or inquiry? Please fill out the contact
            form below, and one of our representatives will respond to you
            promptly.
          </p>
          <form
            action="#"
            className="bg-white rounded-lg p-6 shadow-lg mx-auto max-w-screen-md"
          >
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-yellow-500"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-yellow-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="3"
                className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-yellow-500"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <a
              href="#"
              className="bg-yellow-500 text-white  py-2 px-6 rounded-full text-lg hover:bg-yellow-600"
            >
              Send Now
            </a>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">
            All Right Reserved By @www.buildit.com
          </p>
        </div>
      </footer>
    </div>
  );
}
