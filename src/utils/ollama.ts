import { Ollama } from 'ollama';
// import { config } from 'dotenv';
// config();

const ollama = new Ollama({
    host: import.meta.env.VITE_OLLAMA_URL,
});

export {
    ollama 
};