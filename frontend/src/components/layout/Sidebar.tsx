"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuOpen, Menu, Folder, GridView, Widgets } from "@mui/icons-material";
import { useState } from "react";

const navItems = [
  {
    name: "Systems",
    href: "/systems",
    icon: <Folder sx={{ fontSize: 20 }} />,
    children: [
      {
        name: "System Code",
        href: "/systems/system-code",
        icon: <Widgets sx={{ fontSize: 20 }} />,
      },
      {
        name: "Properties",
        href: "/systems/properties",
        icon: <GridView sx={{ fontSize: 20 }} />,
      },
      {
        name: "Menus",
        href: "/systems/menus",
        icon: <Widgets sx={{ fontSize: 20 }} />,
      },
      {
        name: "API List",
        href: "/systems/api-list",
        icon: <GridView sx={{ fontSize: 20 }} />,
      },
    ],
  },
  {
    name: "Users & Groups",
    href: "/users",
    icon: <Folder sx={{ fontSize: 20 }} />,
    children: [],
  },
  {
    name: "Competition",
    href: "/competition",
    icon: <Folder sx={{ fontSize: 20 }} />,
    children: [],
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-5 left-5 bg-blue_gray_900 p-3 rounded-full text-white shadow-lg"
        >
          <Menu sx={{ fontSize: 30 }} />
        </button>
      )}

      {isOpen && (
        <aside className="h-[95vh] w-64 bg-blue_gray_900 text-white fixed top-5 left-5 rounded-3xl overflow-hidden shadow-lg transition-all">
          <div className="flex justify-between p-4 text-xl font-bold mb-2">
            <Link href={"/"}>
              <Image src="/Images/Logo.svg" alt="Logo" width={70} height={21} />
            </Link>
            <MenuOpen className="cursor-pointer" onClick={toggleSidebar} />
          </div>

          <nav>
            <ul>
              {navItems.map((item) => {
                const isParentOpen =
                  openDropdown === item.name ||
                  item.children.some((child) => pathName === child.href);
                const parentClass = isParentOpen
                  ? "bg-blue_gray_800 pt-2 pb-2 m-4 rounded-2xl"
                  : "";
                const parentTextClass = isParentOpen
                  ? "text-white"
                  : "text-blue_gray_500";

                return (
                  <div
                    key={item.href}
                    className={`flex flex-col mb-2 ${parentClass}`}
                  >
                    <li>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-gray-700 ${parentTextClass}`}
                      >
                        {item.icon}
                        <span className={`${!isOpen ? "hidden" : ""} ml-3`}>
                          {item.name}
                        </span>
                      </button>

                      {isParentOpen && item.children.length > 0 && (
                        <ul className="rounded-2xl bg-gray-800">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`flex items-center p-3 hover:bg-lime_green-200 rounded-lg ${
                                  pathName === child.href
                                    ? "text-black bg-lime_green_400"
                                    : "text-blue_gray_500"
                                }`}
                              >
                                {child.icon}
                                <span className="ml-3">{child.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
}
