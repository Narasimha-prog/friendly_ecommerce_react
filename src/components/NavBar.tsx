import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/storeConfig";
import { toggle } from "../store/theme/themeReducer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.mode);

  const changeTheme = () => {
    dispatch(toggle());
  };

  return (
    <nav className="relative bg-white dark:bg-gray-900 border-b">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          Friendly
        </Link>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>

          {/* Theme toggle */}
          <button
            onClick={changeTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>

            <Link to="/register" onClick={() => setOpen(false)}>
              Register
            </Link>

            {/* Theme toggle (mobile) */}
            <button
              onClick={() => {
                changeTheme();
                setOpen(false);
              }}
              className="flex items-center gap-2 py-2"
            >
              {theme === "dark" ? (
                <>
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                  Light Mode
                </>
              ) : (
                <>
                  <MoonIcon className="w-5 h-5" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;