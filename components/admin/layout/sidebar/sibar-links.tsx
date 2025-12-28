"use client";
import { cn } from "@/utils/tw-merge.util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
const links = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: <RiDashboardHorizontalFill size={24} />,
  },
  {
    label: "Brands",
    link: "/admin/brands",
    icon: <RiDashboardHorizontalFill size={24} />,
  },
  {
    label: "Categories",
    link: "/admin/categories",
    icon: <RiDashboardHorizontalFill size={24} />,
  },
  {
    label: "Products",
    link: "/admin/products",
    icon: <RiDashboardHorizontalFill size={24} />,
  },
  {
    label: "Users",
    link: "/admin/users",
    icon: <IoIosPeople size={24} />,
  },
  {
    label: "Orders",
    link: "/admin/orders",
    icon: <RiDashboardHorizontalFill size={24} />,
  },
];

const SidebarLinks = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col gap-1 mt-2 px-1">
      {links.map((item) => {
        const isActive = pathName === item.link;
        return (
          <Link key={item.link} href={item.link}>
            <div
              className={cn(
                "flex items-center gap-1 px-1 py-3 text-gray-800 border border-gray-300 hover:bg-blue-500 hover:text-white rounded-sm transition-all duration-300",
                isActive ? "bg-blue-600 text-white" : ""
              )}
            >
              {item.icon}
              <span className="text-lg font-bold">{item.label}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
