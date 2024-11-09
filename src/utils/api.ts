import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_OLLAMA_URL,
});

// // Configure CORS
// api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export {
  api
}

