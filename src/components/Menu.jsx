import React from "react";

import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
function Menu() {
  return (
    <section className="bg-[#121212] w-[320px] h-[150px] fixed top-0 left-0 m-2 rounded-[5px] flex  px-[20px] ">
      <div className="flex flex-col justify-center  gap-4">
        <div className="flex flex-row gap-5 items-center cursor-pointer">
          <AiFillHome size={25} className="text-[#b3b3b3]" />
          <p className="text-[#b3b3b3] text-[18px] font-bold hover:text-white">
            Home
          </p>
        </div>

        <div className="flex flex-row gap-5 items-center  cursor-pointer">
          <AiOutlineSearch size={25} className="text-[#b3b3b3]" />
          <p className="text-[#b3b3b3] text-[18px] font-bold hover:text-white">
            Search
          </p>
        </div>
        <a href="">
          <div className="flex flex-row gap-5 items-center  cursor-pointer ">
            <FaGithub size={25} className="text-[#b3b3b3]" />
            <p className="text-[#b3b3b3] text-[18px] font-bold hover:text-white">
              Código{" "}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Menu;
