"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bannerImg from "@/assests/syncro-logo.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import NavLink from "./NavLink";
import { FaTimes, FaBars } from "react-icons/fa";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/contract",
    title: "Contact",
  },
  {
    path: "/about",
    title: "About Us",
  },
];

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full z-50 2xl:px-0 px-5 lg:px-7 ${
        scrollY > "35"
          ? "py-4 bg-neutral bg-opacity-70 top-0 fixed"
          : "py-5 md:py-8 top-0 absolute"
      }`}
    >
      <div className="max-container flex items-center justify-between relative z-[100]">
        {/* menu icon */}
        <div className="md:hidden">
          <FaBars
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className={`w-6 h-6 text-gray-300  ${
              isOpenMenu && "hidden"
            }`}
          ></FaBars>
          
        </div>
        {/* mobile responsive menu here */}
        <div className={`md:hidden absolute -top-5 -left-5 h-[100vh] p-7 z-[100] bg-black ${isOpenMenu ? 'md:hidden translate-x-0 duration-500' : '-left-[100%]'}`}>
        <FaTimes
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className={`w-6 h-6 text-gray-300  ${
              isOpenMenu || "hidden"
            }`}
          ></FaTimes>
          <ul className="text-lg space-y-3 md:space-x-auto text-white font-medium mb-5 mt-10">
            {navLinks.map(({ path, title }) => (
              <li key={path}>
                <NavLink
                  exact={path === "/"}
                  activeClassName="text-primary font-semibold"
                  href={path}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="" onClick={() => window.my_modal_2.showModal()}>
            <ButtonPrimary>Free Register</ButtonPrimary>
          </span>
        </div>
        <div className="w-fit flex justify-center gap-2 items-center">
          <Image src={bannerImg} alt="logo" fill={false}></Image>
          <h1 className="text-2xl font-extrabold text-white">
            Syncro<span className="text-primary">Biz</span>
          </h1>
        </div>
        <ul className="md:flex hidden items-center gap-6 text-lg text-white font-medium">
          {navLinks.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                exact={path === "/"}
                activeClassName="text-primary font-semibold"
                href={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <span className="hidden md:inline-block" onClick={() => window.my_modal_2.showModal()}>
          <ButtonPrimary>Free Register</ButtonPrimary>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
