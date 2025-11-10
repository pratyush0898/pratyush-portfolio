"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles/navBar.css";

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Articles", path: "/articles" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" }
  ];

  const getActive = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(path))
      ? "nav-item active"
      : "nav-item";

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className={getActive(item.path)}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
