import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...rest }: InputProps) {
    return <input {...rest} className={twMerge("border-b-2 border-zinc-200 outline-none disabled:cursor-not-allowed dark:bg-transparent p-2 rounded-md border-1 dark:border-zinc-500", className)} />
}