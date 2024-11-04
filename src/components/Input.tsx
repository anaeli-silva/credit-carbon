import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...rest }: InputProps) {
    return <input {...rest} className={twMerge("border-b-2 border-zinc-200 outline-none disabled:cursor-not-allowed", className)} />
}