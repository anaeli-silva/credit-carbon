import axios from 'axios';

const api = axios.create({
  baseURL: "https://b4a4-2804-7f0-14-2c35-816e-28d5-4ee2-93b4.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
    common: {
      "Access-Control-Allow-Origin": "*",
    }
  },
});

// // Configure CORS
// api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export {
  api
}

