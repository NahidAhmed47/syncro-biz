"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bannerImg from "@/assests/syncro-logo.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import NavLink from "./NavLink";

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
    <div className={`w-full z-50 ${scrollY > '35' ? 'py-4 bg-neutral bg-opacity-70 top-0 fixed' : 'py-5 md:py-8 top-0 absolute'}`}>
      <div className="max-container flex items-center justify-between">
        <div className="w-fit flex justify-center gap-2 items-center">
          <Image src={bannerImg} alt="logo" fill={false}></Image>
          <h1 className="text-2xl font-extrabold text-white">
            Syncro<span className="text-primary">Biz</span>
          </h1>
        </div>
        <ul className="flex items-center gap-6 text-lg text-white font-medium">
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
        <ButtonPrimary>Free Register</ButtonPrimary>
      </div>
    </div>
  );
};

export default Navbar;
