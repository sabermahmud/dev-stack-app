import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import logo from "/logo-text.png";

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  const handleHiddenMenu = (): void => {
    setShow((previousShow) => !previousShow);
  };

  const closeMenu = (): void => {
    setShow(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-xl shadow ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 md:px-4">
        {/* Mobile Menu Button / Desktop Logo */}
        <div className="flex items-center">
          <button
            onClick={handleHiddenMenu}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {show ? <MdClose /> : <VscThreeBars />}
          </button>

          <img
            src={logo}
            className="hidden h-auto max-w-32 md:block"
            alt="Dev Stack logo"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a href="#home" className="hover:text-pink-500">
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="hover:text-pink-500"
            >
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-pink-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-pink-500">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Logo */}
        <img
          src={logo}
          className="block w-30 md:hidden"
          alt="Dev Stack logo"
        />

        {/* Auth Buttons */}
        <div className="flex gap-2 md:gap-4">
          <button className="rounded-full border-2 border-pink-500 px-3 py-2 text-xs md:px-4 md:text-base">
            Sign in
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-xs text-white md:px-4 md:text-base">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="border-t border-gray-100 bg-white/10 backdrop-blur-2xl px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={closeMenu}
              >
                Technologies
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}