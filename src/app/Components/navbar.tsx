import Link from "next/link";

export default function LuxuryNavbar() {
  return (
    <nav className=" bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-white py-2">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-extrabold text-white tracking-wider">
          <Link href="/">Creators Technology</Link>
        </div>

        {/* Links Section */}
        <div className="space-x-8 text-lg font-extrabolds font-semibold shadow-sm">
          <Link
            href="/"
            className="text-white hover:text-white transition duration-300 font-extrabolds"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-white hover:text-white transition duration-300 font-extrabolds"
          >
            About
          </Link>
          <Link
            href="/Apply"
            className="text-white hover:text-white transition duration-300 font-extrabolds"
          >
            Apply
          </Link>
          <Link
            href="/Learn"
            className="text-white hover:text-white transition duration-300 font-extrabolds"
          >
            Learn & Earn
          </Link>
          <Link
            href="/More"
            className="text-white hover:text-white transition duration-300 font-extrabolds"
          >
            More
          </Link>
        </div>
      </div>
    </nav>
  );
}
