'use client';
import "./globals.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
  return (
    <html lang="en">
      <body>
        <div className="gradient-overlay dark:gradient-overlay-dark navigation">
          <nav className="container mx-6 px-6 py-8">
            {links.map((link) => (
              <div key={link.label} className="nav-item">
                <Link
                  href={link.href}
                  className={clsx("nav-link", {
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
                        className={clsx("sub-link", {
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
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
