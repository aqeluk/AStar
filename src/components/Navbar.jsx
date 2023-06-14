import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [colour, setColour] = useState("transparent");
  const [textColour, setTextColour] = useState("white");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 90) {
        setColour("#ffffff");
        setTextColour("#000000");
      } else {
        setColour("transparent");
        setTextColour("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColour);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${colour}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="flex items-center" onClick={handleLinkClick}>
          <Image
            src="/images/Header.png"
            alt="A Star"
            width={300}
            height={125}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
        </Link>
        <ul style={{ color: `${textColour}` }} className="hidden sm:flex">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/services", label: "Services" },
            { href: "/register", label: "Pre-Register" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href} className="p-4">
              <Link
                href={href}
                className="hover:text-blue-500 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineCloseCircle
              size={40}
              style={{ color: `${textColour}` }}
            />
          ) : (
            <BsFillMenuButtonWideFill
              size={40}
              style={{ color: `${textColour}` }}
            />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/register", label: "Pre-Register" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href} className="p-4 text-4xl hover:text-gray-500">
                <Link
                  href={href}
                  className="transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
