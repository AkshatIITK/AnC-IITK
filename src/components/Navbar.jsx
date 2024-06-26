import React, { useEffect, useState } from "react";
import Logo from "../assets/anc-logo.png";
import "../output.css";

export const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) =>{
    if(e.target.checked){
        setTheme("dark")
    } else{
        setTheme("light")
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  const navlinks = [
    // {link : "Home", path: "home"},
    { link: "Academics", path: "academics" },
    { link: "Research", path: "research" },
    { link: "Int. Relation", path: "intrelation" },
    { link: "Career Dev", path: "careerdev" },
    { link: "Blogs", path: "blogs" },
    { link: "Interest Groups", path: "interestgroups" },
    { link: "Portals", path: "portals" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <div className=" z-[1000] bg-white/100 dark:bg-[#0F336D]   md:opacity-95 fixed w-[100%] border-b-2 dark:border-b-gray-400">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" bg-white/100 dark:bg-[#0F336D] menu p-4 w-80 min-h-full">
          {/* Sidebar content here */}
          <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          {navlinks.map(({ link, path }) => (
            <a
              className="roboto-slab  hover:text-white hover:bg-nav-links   px-3 py-2 rounded-xl  text-xl font-semibold transition-all duration-300"
              key={link}
              href={path}
            >
              {link}
            </a>
          ))}
        </ul>
      </div>
      <nav className="flex w-[96%] mx-auto z-[1000] justify-between">
        <div className="flex justify-center items-center">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="md:w-[60px] w-[50px] md:mx-4 mx-2 my-1">
            <a href="#">
              <img src={Logo} className=""></img>
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className=" h-full m-auto lg:flex hidden ">
          <ul className="text-center flex justify-between items-center gap-1 m-auto flex-wrap  w-[100%] h-[100%]">
            {navlinks.map(({ link, path }) => (
              <a
                className="roboto-slab dark:text-white  hover:text-white hover:bg-nav-links  px-3 py-2 rounded-xl  text-xl font-semibold transition-all duration-300"
                key={link}
                href={path}
              >
                {link}
              </a>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true}/>

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </div>
  );
};
