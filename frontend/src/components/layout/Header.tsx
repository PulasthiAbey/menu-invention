"use client";
import { usePathname } from "next/navigation";
import { Folder } from "@mui/icons-material";

export default function Header() {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter((seg) => seg);

  return (
    <header className="w-full h-16 text-blue_gray_900 flex items-center px-4">
      <h1 className="text-lg ">
        {pathSegments.length === 0 ? (
          "DASHBOARD"
        ) : (
          <nav className="p-4 ml-4">
            <ul className="flex space-x-2 text-gray-600">
              {pathSegments.map((seg, index) => (
                <li key={index} className="flex items-center">
                  <span className="mx-2">/</span>
                  {seg === "systems" ||
                  seg === "user" ||
                  seg === "competition" ? (
                    <a href={`/${seg}`}>
                      <Folder sx={{ fontSize: 20 }} />
                    </a>
                  ) : (
                    <a href={`/${seg}`} className="hover:underline capitalize">
                      {seg.split("-").join(" ")}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </h1>
    </header>
  );
}
