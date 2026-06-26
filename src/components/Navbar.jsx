import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-slate-950/70
      border-b
      border-slate-800
      "
    >
      <div className="section-container">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}

          <Link to="/" className="leading-none">

            <h1
              className="
              text-xl
              md:text-2xl
              font-black
              tracking-wider
              "
            >
              RASOOL
            </h1>

            <p
              className="
              text-xs
              text-purple-400
              tracking-[0.35em]
              uppercase
              "
            >
              Academy
            </p>

          </Link>

          {/* DESKTOP MENU */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            font-medium
            "
          >

            <Link
              to="/"
              className="
              hover:text-purple-400
              transition
              "
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="
              hover:text-purple-400
              transition
              "
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="
              hover:text-purple-400
              transition
              "
            >
              About
            </Link>

            <Link
              to="/contact"
              className="
              hover:text-purple-400
              transition
              "
            >
              Contact
            </Link>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-4
            "
          >

            <Link
              to="/login"
              className="
              text-slate-300
              hover:text-white
              "
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
              px-5
              py-2.5
              rounded-xl
              bg-purple-600
              hover:bg-purple-700
              transition
              font-semibold
              "
            >
              Get Started
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            className="md:hidden"
            onClick={() =>
              setOpen(!open)
            }
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}

        {open && (
          <div
            className="
            md:hidden
            py-6
            flex
            flex-col
            gap-4
            border-t
            border-slate-800
            "
          >

            <Link to="/">Home</Link>

            <Link to="/courses">
              Courses
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <Link
              to="/login"
              className="mt-2"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
              bg-purple-600
              px-4
              py-3
              rounded-xl
              text-center
              "
            >
              Get Started
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;