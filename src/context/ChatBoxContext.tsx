import { api } from '@/utils/api';
import { createContext, useEffect, useState } from 'react';

// interface 

interface ChatBoxContextType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    messages: Message[];
    onMessage: (message: Message) => void;
    isLoading: boolean;
    error: string | null;
}

const ChatBoxContext = createContext({} as ChatBoxContextType);

function ChatBoxProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function onMessage(message: Message) {
        setMessages((prev) => [...prev, message]);

        try {
            setIsLoading(true);
            setError(null);

            api.post("/api/chat", { 
                model: "Ianni",
                messages: [...messages.slice(-5), message],
                stream: false,
                options: {
                    top_p: 0.8,
                }
            })
                .then(({ data }: { data: ChatRequest }) => {
                    setMessages((prev) => {
                        localStorage.setItem('messages', JSON.stringify([...prev, data.message!]));
                        return [...prev, data.message!]
                    })
                })
                    .catch((err) => {
                        throw new Error(err);
                    })
        } catch (error: any) {
            console.error(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const messages = localStorage.getItem('messages');
        if(messages) {
            setMessages(JSON.parse(messages));
        }
    }, [])

    return (
        <ChatBoxContext.Provider value={{ 
            isOpen, messages, isLoading, error,
            setIsOpen,
            onMessage,
        }}>
            {children}
        </ChatBoxContext.Provider>
    );
}


export { ChatBoxContext, ChatBoxProvider };