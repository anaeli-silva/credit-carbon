
interface Message {
    role: string;
    content: string;
}

interface ChatRequest {
    model: string;
    messages?: Message[];
    stream?: boolean;
    format?: string;
    keep_alive?: string | number;
    tools?: Tool[];
    options?: Partial<Options>;
}