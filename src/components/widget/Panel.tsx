import { motion } from 'framer-motion'
import { Info, SendHorizonal, X } from 'lucide-react'
import { Input } from '@/components/Input'
import { Button } from '@/components/button'
import { FormEventHandler, useState } from 'react'
import { useChatBox } from '@/hooks/useChatBox.tsx'
import toast from 'react-hot-toast'
import { MessageContainer } from '../message'

export function Panel() {
    const { onMessage, isOpen, setIsOpen, isLoading, messages } = useChatBox();
    const [message, setMessage] = useState<Message>({} as Message);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(!message) return toast('Digite uma mensagem para enviar', {
            position: "top-right",
            icon: <X color='red' />,
        });

        e.currentTarget.reset();
        onMessage(message);
    }
    
    return (
        <motion.div
            initial={{ opacity: 0, height: 0, display: 'none' }}
            animate={isOpen ? { opacity: 1, height: 'auto', display: 'block' } : { opacity: 0, height: 0, display: 'none' }}
            transition={{ duration: 0.25 }}
            variants={{
                open: { opacity: 1, height: 'auto', display: 'block' },
                closed: { opacity: 0, height: 0, display: 'none' },
            }}
        >
            <div className='fixed bottom-24 right-4 max-w-96 min-h-96 w-full h-2/3 bg-white rounded-lg shadow-sm border-1'>
                <div className='flex flex-col h-full'>
                    <div className='flex items-center justify-between w-full p-2 border-b-1'>
                        <span>Ianni</span>

                        <button type='button' className='ml-auto' onClick={() => setIsOpen(false)}>
                            <X size={18} />
                        </button>
                    </div>

                    <div className='h-full px-2 bg-slate-100 overflow-y-auto py-2 overflow-x-hidden'>
                        <p className='text-sm text-justify text-slate-400'>
                            <Info size={14} className='mx-auto mb-2' />
                            Aviso: As respostas deste chat são geradas por uma IA e podem conter erros ou imprecisões. Para informações confiáveis, consulte fontes especializadas.
                        </p>

                        {messages.map((msg, i) => (
                            <MessageContainer
                                key={i}
                                isBot={msg.role === 'bot'}
                                message={msg}
                            />
                        ))}
                    </div>
                    
                    <div className='border-t-1'>
                        <form onSubmit={handleSubmit} className='flex items-center gap-2 w-full p-2 pt-1'>
                            <Input 
                                disabled={isLoading}
                                onInput={(e) => setMessage({
                                    role: 'user',
                                    content: e.currentTarget.value
                                })} 
                                className='p-1 w-full' 
                                placeholder='Insirá o texto' 
                            />

                            <Button 
                                type='submit'
                                className='bg-transparent hover:shadow-transparent p-1' 
                                leftIcon={<SendHorizonal />}
                                disabled={isLoading}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}