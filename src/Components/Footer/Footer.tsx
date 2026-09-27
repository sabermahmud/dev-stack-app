import logo from "/logo-text.png";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-12 mx-4">
      <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <img
            src={logo}
            alt="Dev Stack logo"
            className="mb-4 w-32"
          />

          <p className="max-w-md text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for
            developers building modern software.
          </p>

          <div className="mt-5 flex gap-4">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-pink-500"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-pink-500"
            >
              Twitter
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-pink-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="mb-4 font-bold">PRODUCT</h3>

          <ul className="space-y-3 text-sm text-gray-500">
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
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-bold">COMPANY</h3>

          <ul className="space-y-3 text-sm text-gray-500">
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

            <li>
              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-4 font-bold">LEGAL</h3>

          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-3 border-t border-gray-200 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-500">
            Privacy
          </a>

          <a href="#" className="hover:text-pink-500">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}