"use client";

import { cn } from "@/utils/tw-merge.util";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
];

const NavLinks = () => {
  const pathName = usePathname();
  return (
    <div className="flex gap-2 tracking-wider">
      {links.map((item, index) => {
        const isActive = pathName === item.link;

        return (
          <Link href={item.link} key={index}>
            <span
              className={cn(
                "text-lg font-semibold text-gray-700 hover:text-blue-500",
                isActive ? "text-blue-600" : ""
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
