'use client';
import { LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-transparent h-24 gap-2 border-t">
            <a href="http://mailto:leandroelverdi@gmail.com">leandroelverdi@gmail.com</a>
            <a href="http://www.linkedin.com/in/leandro-elverdi-8a3367213" target="_black"><LinkedinLogoIcon size={32} color="#0077b5" /></a>
        </footer>
    )
}