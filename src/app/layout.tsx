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
  ]   },
  { href: "/chiang-mai", label: "Chiang Mai", subLinks: [
    { href: "/chiang-mai/shopping", label: "Shopping" },
    { href: "/chiang-mai/restaurants", label: "Restaurants" },
  ]  },
  { href: "/krabi", label: "Krabi", subLinks: [
    { href: "/krabi/shopping", label: "Shopping" },
    { href: "/krabi/restaurants", label: "Restaurants" },
  ]   },
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
          <nav className="container mx-auto px-4 py-8">
            {links.map((link) => (
              <div key={link.label} className="mb-4">
                <Link
                  href={link.href}
                  className={clsx("text-white hover:text-gray-200 block", {
                    "font-bold": pathname.startsWith(link.href),
                  })}
                >
                  <p>{link.label}</p>
                </Link>
                {link.subLinks && (
                  <div className="ml-4">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className={clsx("text-white hover:text-gray-200 block", {
                          "font-bold": pathname === subLink.href,
                        })}
                      >
                        <p>{subLink.label}</p>
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
