"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

export default function DarkModeButton() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      aria-label="Boton dark mode"
      onClick={toggleTheme}
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