
interface Message {
    role: string;
    content: string;
}

interface ChatRequest {
    model: string;
    message?: Message;
    stream?: boolean;
    format?: string;
    keep_alive?: string | number;
    tools?: Tool[];
    options?: Partial<Options>;
}