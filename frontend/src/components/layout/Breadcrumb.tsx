"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter((seg) => seg);

  return (
    <nav className="p-4">
      <ul className="flex space-x-2 text-gray-600">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        {pathSegments.map((seg, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            <a href={`/${seg}`} className="hover:underline capitalize">
              {seg}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
