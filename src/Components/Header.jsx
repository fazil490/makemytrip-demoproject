import { useState } from "react";
import { BRAND_LOGO_URL } from "../constants";

const Header = () => {
  const navItems = ["Home", "About", "Flight"];
  const [hamBurderMenu, setHamburgerMenu] = useState("");
  const handleHamMenu = () => {
    setHamburgerMenu(!hamBurderMenu);
    console.log(hamBurderMenu);
  };

  const handleCloseHamMenu = () => {
    setHamburgerMenu(false);
  };

  return (
    <header className="flex items-center justify-between px-2 md:px-12 pt-8 pb-[300px] bg-gradient-to-b from-red-600 to-red-800">
      <div className="">
        <img
          className="w-[150px] md:w-[200px]"
          src={BRAND_LOGO_URL}
          alt="Brand-logo"
        />
      </div>
      <div className="hidden md:inline-block">
        <ul className="flex items-center gap-4 md:gap-12 cursor-pointer text-white font-medium lg:text-xl">
          {navItems.map((items) => (
            <li className=" hover:underline">{items}</li>
          ))}
        </ul>
      </div>
      <div className="hidden md:inline-block">
        <button className="bg-black bg-opacity-30 hover:bg-opacity-40 rounded-lg px-4 md:px-16 py-2 md:py-4 text-white">
          Login
        </button>
      </div>
      <div
        onClick={handleHamMenu}
        className="md:hidden cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-3xl p-2"
      >
        <div className="bg-white p-0.5 m-1 px-3"></div>
        <div className="bg-white p-0.5 m-1 px-3"></div>
        <div className="bg-white p-0.5 m-1 px-3"></div>
      </div>
      {hamBurderMenu && (
        <aside
          onClick={handleCloseHamMenu}
          className="w-full md:hidden z-10 fixed right-0 top-0 h-screen bg-black bg-opacity-90"
        >
          <div className="absolute  w-[55%] h-[40%] right-0 top-0 bg-white bg-opacity-60 p-4">
            <button className="px-12 py-4 text-white rounded-lg bg-gradient-to-r from-red-800 to-red-900">
              Login
            </button>
            <ul>
              {navItems.map((items) => (
                <li className="my-6 w-fit mx-1 text-2xl font-medium hover:text-red-900 border-b-2 border-red-900 cursor-pointer">
                  {items}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </header>
  );
};

export default Header;
