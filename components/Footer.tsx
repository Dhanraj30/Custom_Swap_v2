import React from "react";
import Twitter from "./SVG/Twitter";
import Facebook from "./SVG/Facebook";
import Insta from "./SVG/Insta";
import Logo from "./SVG/Logo";
import Link from "next/link";
//import {Twitter, Facebook, Insta, Logo} from "./index";

const Footer = () => {
  const footMenu = ["Features", "Integration", "Pricing", "FAQ"];
  const footerMenu2 = ["Privacy", "Terms of Services"];

  return (
    <footer className="px-4 divide-y bg-opacity-60 bg-black backdrop-filter backdrop-blur-lg text-gray-100 rounded-lg">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black">
              <Logo />
            </div>
            <span className="self-center text-2xl font-semibold text-gray-50">
              DEX Swap
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-widest uppercase text-[#7765F3]">Product</h3>
            <ul className="space-y-1 text-gray-50">
              {footerMenu2.map((menu, i) => (
                <li key={i + 1}>
                  <Link rel="noopener noreferrer" href="#">
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-widest uppercase text-[#7765F3]">Company</h3>
            <ul className="space-y-1 text-gray-50">
              {["Privacy", "Terms of Service"].map((menu, i) => (
                <li key={i + 1}>
                  <Link rel="noopener noreferrer" href="#">
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-widest uppercase text-[#7765F3]">Developers</h3>
            <ul className="space-y-1 text-gray-50">
              {["Public API", "Documentation", "Guides"].map((menu, i) => (
                <li key={i + 1}>
                  <Link rel="noopener noreferrer" href="#">
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="tracking-widest uppercase text-[#7765F3]">Social Media</div>
            <div className="flex justify-start space-x-3 text-gray-50">
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1 hover:text-gray-300"
              >
                <Facebook />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1 hover:text-gray-300"
              >
                <Twitter />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1 hover:text-gray-300"
              >
                <Insta />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center border-t-[3px] border-[#7765F3] text-gray-400">
        @ 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
