import { CiSearch } from "react-icons/ci";
import { RiCameraLensLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-0.5">
<RiCameraLensLine />
          ADASA
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-sm text-gray-800 hover:text-gray-500 transition"
          >
            Home
          </Link>


          <Link
            to="/Blog"
            className="text-sm text-gray-800 hover:text-gray-500 transition"
          >
            Blog
          </Link>

          <Link
            to="/Us"
            className="text-sm text-gray-800 hover:text-gray-500 transition"
          >
           Us
          </Link>
        </div>

        {/* Button */}
<div className=" flex items-center gap-1">
<div  className=" text-blue-950 text-3xl">  <CiSearch /></div>
          <Link
            to="/Blog"
            className="hidden md:block bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition "
          >
            Get Started
          </Link>
</div>

        {/* Mobile menu icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
}