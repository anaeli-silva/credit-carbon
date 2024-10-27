import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import React from "react";
// import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";


interface HeaderProps {
    className?: string;
}

// const isActive = ({ isActive }: NavLinkRenderProps) => `hover:after:opacity-100 hover:after:w-full after:bg-red-400 after:absolute after:opacity-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 after:left-0 after:bottom-0 ${isActive && "after:w-full after:opacity-100"}`;

export function Header({ className }: HeaderProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={twMerge("w-full p-2 text-zinc-100 text-base fixed bg-zinc-900 bg-opacity-75", className)}>
            <div className="flex items-center justify-between  max-w-7xl mx-auto">
                <img src="/logo.svg" alt="logo" width={48} height={48}/>

                <nav>
                    <ul className="flex items-center gap-2 uppercase">
                        <li>
                            <a href="./">Inicio</a>
                        </li>
                        <li>
                            <a href="./#calculator">Calculadora</a>
                        </li>
                        <li>
                            <a href="./about">Sobre nós</a>
                        </li>
                    </ul>
                </nav>

                {/* <div className="w-12" /> */}
                <div>
                    <button
                        onClick={toggleTheme}
                    >
                        {theme == "light" ? <Moon size={23} /> : <Sun size={23} />}
                    </button>
                </div>
            </div>
        </header>
    )
}