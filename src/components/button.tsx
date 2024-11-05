import { LucideIcon } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: React.ReactElement<LucideIcon>;
    label?: string;
    rightIcon?: React.ReactElement<LucideIcon>;
}

export function Button({ label, leftIcon: LIcon, rightIcon: RIcon, className, ...rest }: ButtonProps) {
    return (
        <button {...rest} className={twMerge("bg-emerald-400 rounded-lg p-2 text-gray-700 font-medium outline-none hover:shadow-md disabled:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 transition duration-150 dark:disabled:bg-transparent", className)}>
            {LIcon && LIcon}
            {label && <span>{label}</span>}
            {RIcon && RIcon}
        </button>
    )
}