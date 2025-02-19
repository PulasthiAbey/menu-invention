"use client";
import { usePathname } from "next/navigation";
import { Folder } from "@mui/icons-material";

export default function Header() {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter((seg) => seg);

  return (
    <header className="w-full h-16 text-blue_gray_900 flex items-center px-12">
      <h1 className="text-lg">
        {pathSegments.length === 0 ? (
          "DASHBOARD"
        ) : (
          <nav>
            <ul className="flex text-gray-600">
              {pathSegments.map((seg, index) => (
                <li key={index} className="flex items-center">
                  {seg === "systems" ||
                  seg === "user" ||
                  seg === "competition" ? (
                    <div className="text-blue_gray_300">
                      <a href={`/${seg}`}>
                        <Folder sx={{ fontSize: 24 }} />
                      </a>
                      <span className="mx-2 text-blue_gray_300">/</span>
                    </div>
                  ) : (
                    <a href={`/${seg}`} className="hover:underline capitalize text-base">
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
