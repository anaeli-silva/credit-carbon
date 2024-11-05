import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_OLLAMA_URL,
});

export {
    api
}

