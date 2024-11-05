import { ClassValue, clsx } from "clsx";
import { Bike, BusFront, CarFront, Plane, TrainFront, Zap } from "lucide-react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const listCalc = [
  { label: "Carro", icon: CarFront, },
  { label: "Ônibus", icon: BusFront },
  { label: "Voos", icon: Plane },
  { label: "Eletricidade", icon: Zap },
  { label: "Trem", icon: TrainFront },
  { label: "E-Bike", icon: Bike },
]


export {
  cn,
  listCalc
}