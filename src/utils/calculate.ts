// Arquivo dedicado a funções de cálculo de emissões de carbono

interface ICar {
  tipoCombustivel: "gasolina" | "alcool" | "diesel" | "gas natural" | "eletrico";
  consumo: number;
  distancia: number;
}

function calcCar({ tipoCombustivel, consumo, distancia }: ICar): number {
  // Emissões =  Distancia (KM) / Consumo (KM/L) * Fator de emissão (KgCO2/L);
  // cilindrada -> 1.0, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0
  // tipoCombustivel -> gasolina, alcool, diesel, gas natural, eletrico

  let fatorEmissao = 0;
  switch (tipoCombustivel) {
    case 'gasolina':
      fatorEmissao = 2.392;
      break;
    case 'alcool':
      fatorEmissao = 1.721;
      break;
    case 'diesel':
      fatorEmissao = 2.687;
      break;
    case 'gas natural':
      fatorEmissao = 1.6;
      break;
    case 'eletrico':
      fatorEmissao = 0;
      break;
    default:
      fatorEmissao = 0;
  }

  return distancia / consumo * fatorEmissao;
}

// Onibus
interface IBus {
  distancia: number;
}

function calcBus({ distancia }: IBus): number {
  // 
  // Emissões =  Distancia (KM) * Fator de emissão (KgCO2/L);
  // Fator de emissão -> 0.03
  return distancia * 0.03;
}

// Moto
interface IMoto {
  distancia: number;
  // Enum;
  cilindrada: "0" | "1" | "2";
}

function calcMoto({ cilindrada, distancia }: IMoto): number {
  // Emissòes = Distancia (KM) / Consumo (KM/L) * Fator de emissão (KgCO2/L);
  // Fator de emissão -> 2.3kgCO2/L
  // Cilindradas -> Até 150, 150 a 300, acima de 500.
  // Consumo Médio -> Até 150: 30, 150 a 300: 25, acima de 500: 20

  const fatorEmissao = 2.3;
  let consumo = 0;
  switch (cilindrada) {
    case "0":
      consumo = 30;
      break;
    case "1":
      consumo = 25;
      break;
    case "2":
      consumo = 20;
      break;
    default:
      consumo = 0;
  }

  return distancia / consumo * fatorEmissao;
}

// Avião
interface IAviao {
  distancia: number;
}

function calcAviao({ distancia }: IAviao): number {
  // Emissões =  Distancia (KM) * Fator de emissão (KgCO2/L);
  // Fator de emissão -> 0.285
  return distancia * 0.285;
}

// Trem

interface ITrem {
  distancia: number;
}

function calcTrem({ distancia }: ITrem): number {
  // Emissões =  Distancia (KM) * Fator de emissão (KgCO2/L);
  // Fator de emissão -> 0.05
  return distancia * 0.05;
}




// Exportanto a função
export {
  calcCar,
  calcMoto
}