import { Input } from '@/components/Input'
import { Banner } from '@/components/banner'
import { Card } from '@/components/Card'
import { listCalc } from '@/utils/functions'
import { motion } from 'framer-motion'
import { Activity, Building2, CreditCard, Trees } from 'lucide-react'
import { Button } from '@/components/button'
import { useEffect, useRef, useState } from 'react'
import { calcAviao, calcBus, calcCar, calcEletricidade, calcMoto, calcTrem } from '@/utils/calculate'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const scrollToCalculator = () => {
    const { current } = calculatorRef;
    
    if (current) {
      window.scrollTo({
        top: current.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  const [showCalculator, setShowCalculator] = useState(false);
  const [typeCalculator, setTypeCaculator] = useState<"car" | "bus" | "voos" | "eletricidade" | "trem" | "ebike" | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [inputs, setInputs] = useState({
    distancia: '',
    consumo: '',
    tipoCombustivel: 'gasolina',
    cilindrada: '0'
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#calculator') {
        scrollToCalculator();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash === '#calculator') {
      scrollToCalculator();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  function onSelectTypeEmission(type: "car" | "bus" | "voos" | "eletricidade" | "trem" | "ebike") {
    setShowCalculator(true);
    setResult(null)
    setInputs({
      distancia: '',
      consumo: '',
      tipoCombustivel: 'gasolina',
      cilindrada: '0',
    })
    setTypeCaculator(type);

    console.log(showCalculator)
    console.log(typeCalculator)

  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let emissionResult = 0;

    switch (typeCalculator) {
      case 'car':
        emissionResult = calcCar({
          tipoCombustivel: inputs.tipoCombustivel as "gasolina" | "alcool" | "diesel" | "gas natural" | "eletrico",
          consumo: parseFloat(inputs.consumo),
          distancia: parseFloat(inputs.distancia)
        });
        break;
      case 'bus':
        emissionResult = calcBus({ distancia: parseFloat(inputs.distancia) });
        break;
      case 'voos':
        emissionResult = calcAviao({ distancia: parseFloat(inputs.distancia) });
        break;
      case 'trem':
        emissionResult = calcTrem({ distancia: parseFloat(inputs.distancia) });
        break;
      case 'ebike':
        emissionResult = calcMoto({
          cilindrada: inputs.cilindrada as "0" | "1" | "2",
          distancia: parseFloat(inputs.distancia)
        });
        break;
      case 'eletricidade':
        emissionResult = calcEletricidade({
          consumo: parseFloat(inputs.consumo)
        })
        break;
      default:
        emissionResult = 0;
    }

    setResult(emissionResult);
  }

  const emissionPerTen = (totalEmission: number) => totalEmission * 10;
  const treesNeeded = (totalEmission: number) => Math.ceil(totalEmission / 22000);

  return (
    <>
      <Banner />
      <section className='max-w-7xl mx-auto my-8'>
        <div
          className='flex items-center justify-center flex-wrap gap-12 my-16'
        >
          <Card 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            whileHover={{ scale: 1.1 }} 
            exit={{ opacity: 0, y: -100 }}
            className='flex flex-col items-center gap-2'
          >
            <Trees size={32} />
            <p className='text-center'>Ajude as<br/>florestas.</p>
          </Card>
          <Card 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            exit={{ opacity: 0, y: 100 }}
            className='flex flex-col items-center gap-2'
          >
            <Building2 size={32} />
            <p className='text-center'>
                Seja uma
                <br />
                empresa responsável
              </p>
          </Card>
          <Card 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            whileHover={{ scale: 1.1 }} 
            exit={{ opacity: 0, y: -100 }}
            className='flex flex-col items-center gap-2'
          >
            <Activity size={32} />
            <p className='text-center'>
                Lutando
                <br />
                pelo bem
              </p>
          </Card>
          <Card
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            exit={{ opacity: 0, y: 100 }}
            className='flex flex-col items-center gap-2'
          >
            <CreditCard size={32} />
            <p className='text-center'>
                Seu dinheiro
                <br />
                bem usado
              </p>
          </Card>
        </div>


        <div className='overflow-hidden'>
          <div className='px-5 py-4'>
            <div className='flex items-center justify-center gap-7'>
              <Card
                className='max-w-[579px] max-h-[360px]'
              >
                <img src='./credit_carbon.jpg' alt='hero' className='w-full rounded-lg' width={579} height={360} />
              </Card>
              <Card
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className='font-bold text-center text-2xl mb-2 text-zinc-100'>Reduza seu Impacto com Créditos de Carbono</h2>
                <p className='text-base text-justify'>O Crédito de Carbono é uma solução criada para reduzir o impacto das emissões de dióxido de carbono (CO₂) na atmosfera. Cada crédito representa uma tonelada de CO₂ que foi evitada ou removida, geralmente por meio de projetos sustentáveis, como reflorestamento, energia renovável e conservação de florestas. Empresas e indivíduos podem adquirir créditos de carbono para compensar suas emissões, contribuindo diretamente para o combate às mudanças climáticas. Dessa forma, os créditos de carbono permitem uma ação concreta na direção de um futuro mais sustentável.</p>
                <Button 
                  label='Veja mais'
                  className='w-full mt-4'
                  onClick={() => navigate("/about")}
                />
              </Card>
            </div>
          </div>
        </div>


        <div className='px-5 py-4 max-w-[624px] mx-auto mt-12' ref={calculatorRef}>
          <h2 className='text-center text-2xl font-bold mb-4 dark:text-zinc-100'>Calcule suas emissões</h2>
          <div className='flex flex-row justify-start flex-wrap mt-3'>
            {
              listCalc.map((item, i) => (
                <button   
                  key={i} 
                  className='flex-[0_0_20%] flex flex-col items-center hover:bg-gray-100 rounded-xl transition duration-150 dark:hover:bg-[#232225] border-1 border-transparent dark:hover:border-[#3E3C41]'
                  onClick={() => onSelectTypeEmission(item.type)}
                >
                  <div className='flex flex-col items-center text-center w-full p-4 rounded-xl'>
                    <item.icon size={32} />
                    <p>{item.label}</p>
                  </div>
                </button>
              ))
            }
          </div>

          {showCalculator && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='mt-16'
            >
              <h2 className='text-center text-2xl font-bold mb-4'>Informe suas emissões</h2>
              <div className='flex flex-col gap-8'>
                <form onSubmit={onSubmit} className='flex flex-col gap-3 w-full'>
                  {typeCalculator !== "eletricidade" && (
                    <label className='flex flex-col'>
                      <span>Distância</span>
                      <Input 
                        name='distancia'
                        value={inputs.distancia}
                        onChange={handleInputChange}
                        placeholder='0.0km' 
                      />
                    </label>
                  )}

                  {typeCalculator === 'car' && (
                    <>
                      <label className='flex flex-col'>
                        <span>Consumo de combustível</span>
                        <Input 
                          name='consumo'
                          value={inputs.consumo}
                          onChange={handleInputChange}
                          placeholder='0L/km' 
                        />
                      </label>

                      <label className='flex flex-col'>
                        <span>Tipo de combustível</span>
                        <select 
                          name='tipoCombustivel'
                          value={inputs.tipoCombustivel}
                          onChange={handleInputChange}
                          className='border-1 border-zinc-200 rounded-md outline-none p-2 dark:bg-transparent dark:border-zinc-500'
                        >
                          <option value="gasolina">Gasolina</option>
                          <option value="alcool">Álcool</option>
                          <option value="diesel">Diesel</option>
                          <option value="gas natural">Gás Natural</option>
                          <option value="eletrico">Elétrico</option>
                        </select>
                      </label>
                    </>
                  )}

                  {typeCalculator === 'ebike' && (
                    <label className='flex flex-col'>
                      <span>Cilindrada</span>
                      <select 
                        name='cilindrada'
                        value={inputs.cilindrada}
                        onChange={handleInputChange}
                        className='border-2 border-zinc-200 rounded-md outline-none'
                      >
                        <option value="0">Até 150</option>
                        <option value="1">150 a 300</option>
                        <option value="2">Acima de 500</option>
                      </select>
                    </label>
                  )}

                  {typeCalculator === 'eletricidade' && (
                    <label className='flex flex-col'>
                      <span>Consumo de energia</span>
                      <Input 
                        name='consumo'
                        value={inputs.consumo}
                        onChange={handleInputChange}
                        placeholder='0kWh' 
                      />
                    </label>
                  )}

                  {/* <label className='flex flex-col'>
                    <label>Distância</label>
                    <Input placeholder='0.0km' />
                  </label>

                  <label className='flex flex-col'>
                    <label>Consumo de combustível</label>
                    <Input placeholder='0L/km' />
                  </label>

                  <label className='flex flex-col'>
                    <label>Tipo de combustível</label>
                    <select className='border-2 border-zinc-200 rounded-md outline-none'>
                      <option value="1">Biogás</option>
                      <option value="1">Diesel</option>
                      <option value="1">Gasolina</option>
                    </select>
                  </label> */}

                  <Button 
                    label='Calcular'
                    className='mt-4'
                  />
                </form>
                {result !== null && (
                  <>
                    <p className='text-center'>Você emitiu: {result.toFixed(2)} KgCO2</p>
                    <p className='text-justify'>
                    Ao realizar essa rota dez vezes, você gerará aproximadamente <span className="font-bold text-red-600">{emissionPerTen(result).toFixed(2)}</span> gramas de carbono. Para equilibrar essa emissão, seria necessário plantar pelo menos <span className="font-bold text-green-600">{treesNeeded(emissionPerTen(result))}</span> árvore(s), considerando que uma árvore adulta pode absorver cerca de <span className="font-bold text-green-600">22.000</span> gramas de CO₂ por ano. Portanto, para cada dez repetições dessa rota, o plantio de aproximadamente <span className="font-bold text-green-600">{treesNeeded(emissionPerTen(result))}</span> árvore(s) ajudaria a compensar o impacto ambiental.

                    </p>
                  </>
                )}


                {/* <div className='flex flex-col flex-[0_0_50%] border-l-[1px] border-zinc-200 pl-2 ml-4'>
                  <h4 className='font-semibold text-center text-xl w-full'>Resultado</h4>

                  <div className='w-full'>

                  </div>
                </div> */}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
