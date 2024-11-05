import { ClassValue, clsx } from "clsx";
import { Bike, BusFront, CarFront, Plane, TrainFront, Zap } from "lucide-react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const listCalc = [
  { label: "Carro", icon: CarFront, type: "car" },
  { label: "Ônibus", icon: BusFront, type: "bus" },
  { label: "Voos", icon: Plane, type: "voos" },
  { label: "Eletricidade", icon: Zap, type: "eletricidade" },
  { label: "Trem", icon: TrainFront, type: "trem" },
  { label: "E-Bike", icon: Bike, type:"ebike" },
]


export {
  cn,
  listCalc
}