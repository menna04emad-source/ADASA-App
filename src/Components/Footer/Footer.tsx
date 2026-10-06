
export default function Footer() {
  return (
    <>
    <footer className="bg-black text-white">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Logo / Description */}
      <div className="lg:col-span-2">

        <h2 className="text-3xl font-bold">
          ADASA
        </h2>

        <p className="mt-6 max-w-md text-gray-400 leading-7">
          We create meaningful digital experiences through
          thoughtful design, technology and creativity.
        </p>

      </div>

      {/* Links */}
      <div>
        <h3 className="text-lg font-semibold mb-6">
          Navigation
        </h3>

        <div className="flex flex-col gap-4">

          <a href="#" className="text-gray-400 hover:text-white transition">
            Home
          </a>

          <a href="#" className="text-gray-400 hover:text-white transition">
            About
          </a>

          <a href="#" className="text-gray-400 hover:text-white transition">
            Services
          </a>

          <a href="#" className="text-gray-400 hover:text-white transition">
            Projects
          </a>

        </div>
      </div>

      {/* Contact */}
      <div>

        <h3 className="text-lg font-semibold mb-6">
          Contact
        </h3>

        <div className="flex flex-col gap-4 text-gray-400">

          <a
            href="mailto:hello@example.com"
            className="hover:text-white transition"
          >
            hello@example.com
          </a>

          <a
            href="tel:+201000000000"
            className="hover:text-white transition"
          >
            +20 100 000 0000
          </a>

          <p>
            Cairo, Egypt
          </p>

        </div>

      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-sm text-gray-500">
        © 2026 ADASA. All rights reserved.
      </p>

      <div className="flex gap-6">

        <a href="#" className="text-sm text-gray-500 hover:text-white transition">
          Instagram
        </a>

        <a href="#" className="text-sm text-gray-500 hover:text-white transition">
          Facebook
        </a>

        <a href="#" className="text-sm text-gray-500 hover:text-white transition">
          LinkedIn
        </a>

      </div>

    </div>

  </div>

</footer>
    
    </>
  )
}
