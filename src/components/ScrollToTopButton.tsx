"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      aria-label="Volver arriba"
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-black/70 text-white p-3 rounded-full shadow-lg hover:bg-black transition-colors z-50"
    >
      <ArrowUpIcon size={24} />
    </button>
  ) : null;
}