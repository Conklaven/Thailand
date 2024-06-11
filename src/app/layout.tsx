'use client';
import "./globals.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/bangkok", label: "Bangkok", subLinks: [
      { href: "/bangkok/shopping", label: "Shopping" },
      { href: "/bangkok/restaurants", label: "Restaurants" },
    ] },
  { href: "/phuket", label: "Phuket", subLinks: [
    { href: "/phuket/shopping", label: "Shopping" },
    { href: "/phuket/restaurants", label: "Restaurants" },
  ] },
  { href: "/chiang-mai", label: "Chiang Mai", subLinks: [
    { href: "/chiang-mai/shopping", label: "Shopping" },
    { href: "/chiang-mai/restaurants", label: "Restaurants" },
  ] },
  { href: "/krabi", label: "Krabi", subLinks: [
    { href: "/krabi/shopping", label: "Shopping" },
    { href: "/krabi/restaurants", label: "Restaurants" },
  ] },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <html lang="en">
      <body>
        <div className="gradient-overlay dark:gradient-overlay-dark">
          <nav className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                className="block md:hidden px-4 py-2"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
              <div className={clsx("mobile-menu md:flex", { show: mobileMenuOpen })}>
                {links.map((link) => (
                  <div key={link.label} className="nav-item">
                    <Link
                      href={link.href}
                      className={clsx("nav-link px-4 py-2", {
                        "font-bold": pathname.startsWith(link.href),
                      })}
                    >
                      {link.label}
                    </Link>
                    {link.subLinks && (
                      <div className="sub-menu">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className={clsx("sub-link block px-4 py-2 hover:bg-gray-200", {
                              "font-bold": pathname === subLink.href,
                            })}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
