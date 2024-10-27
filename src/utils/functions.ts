import { ClassValue, clsx } from "clsx";
import { BusFront, CarFront, Plane, Zap } from "lucide-react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const listCalc = [
  { label: "Carro", icon: CarFront, },
  { label: "Ônibus", icon: BusFront },
  { label: "Voos", icon: Plane },
  { label: "Eletricidade", icon: Zap },
  { label: "Eletricidade", icon: Zap },
  { label: "Eletricidade", icon: Zap },
  { label: "Eletricidade", icon: Zap },
  { label: "Eletricidade", icon: Zap },
]


export {
  cn,
  listCalc
}