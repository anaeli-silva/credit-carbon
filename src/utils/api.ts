import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  baseURL: import.meta.env.VITE_APP_OLLAMA_URL,
=======
  baseURL: "https://b4a4-2804-7f0-14-2c35-816e-28d5-4ee2-93b4.ngrok-free.app",  
>>>>>>> 392efcabe7057435ad5a99ad31f5830eee324a75
});

// // Configure CORS
// api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export {
  api
}

