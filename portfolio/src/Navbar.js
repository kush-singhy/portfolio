import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl">Kush Singhy</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
