import { Input } from '@/components/Input'
import { Banner } from '@/components/banner'
import { Card } from '@/components/Card'
import { listCalc } from '@/utils/functions'
import { motion } from 'framer-motion'
import { Activity, Building2, CreditCard, Trees } from 'lucide-react'
import { Button } from '@/components/button'
import { useEffect, useRef } from 'react'

export function Home() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const scrollToCalculator = () => {
    const { current } = calculatorRef;
    
    if (current) {
      window.scrollTo({
        top: current.offsetTop,
        behavior: 'smooth'
      });
    }
  }

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
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

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
            <p className='text-center'>Ajude a<br/>florestas.</p>
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
                <h2 className='font-bold text-center text-2xl mb-2'>Reduza seu Impacto com Créditos de Carbono</h2>
                <p className='text-base text-justify'>O Crédito de Carbono é uma solução criada para reduzir o impacto das emissões de dióxido de carbono (CO₂) na atmosfera. Cada crédito representa uma tonelada de CO₂ que foi evitada ou removida, geralmente por meio de projetos sustentáveis, como reflorestamento, energia renovável e conservação de florestas. Empresas e indivíduos podem adquirir créditos de carbono para compensar suas emissões, contribuindo diretamente para o combate às mudanças climáticas. Dessa forma, os créditos de carbono permitem uma ação concreta na direção de um futuro mais sustentável.</p>
                <Button 
                  label='Veja mais'
                  className='w-full mt-4'
                />
              </Card>
            </div>
          </div>
        </div>


        <div className='px-5 py-4 max-w-[624px] mx-auto mt-12' ref={calculatorRef}>
          <h2 className='text-center text-2xl font-bold mb-4'>Calcule suas emissões</h2>
          <div className='flex flex-row justify-start flex-wrap mt-3'>
            {
              listCalc.map((item, i) => (
                <button key={i} className='flex-[0_0_20%] flex flex-col items-center hover:bg-gray-100 rounded-xl transition duration-200'>
                  <div className='flex flex-col items-center text-center w-full p-4 rounded-xl'>
                    <item.icon size={32} />
                    <p>{item.label}</p>
                  </div>
                </button>
              ))
            }
          </div>

          <motion.div 
            className='mt-16'
          >
            <h2 className='text-center text-2xl font-bold mb-4'>Informe suas emissões</h2>
            <div className='flex'>
              <form onSubmit={onSubmit} className='flex flex-col gap-3 flex-[0_0_50%] w-full'>
                <label className='flex flex-col'>
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
                </label>

                <Button 
                  label='Calcular'
                  className='mt-4'
                />
              </form>

              <div className='flex flex-col flex-[0_0_50%] border-l-[1px] border-zinc-200 pl-2 ml-4'>
                <h4 className='font-semibold text-center text-xl w-full'>Resultado</h4>

                <div className='w-full'>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
