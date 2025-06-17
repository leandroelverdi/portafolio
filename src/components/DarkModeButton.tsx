"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

export default function DarkModeButton() {
  // Hook para manejar el tema
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Boton dark mode"
      onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-none border-none cursor-pointer"
    >
      {theme === "dark" ? (
        <SunIcon size={50} color="#FFD700" />
      ) : (
        <MoonIcon size={50} color="#333" />
      )}
    </button>
  );
}

