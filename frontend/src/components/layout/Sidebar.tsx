"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, Users, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
  { name: "Menus", href: "/menus", icon: <List size={20} /> },
  { name: "Users & Groups", href: "/users", icon: <Users size={20} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-4 text-xl font-bold">CLOIT</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center p-3 hover:bg-gray-700 ${
                  pathName === item.href ? "bg-gray-700" : ""
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
