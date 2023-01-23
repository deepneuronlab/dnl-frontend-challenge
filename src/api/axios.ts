import axios from 'axios';
const httpClient = axios.create({
  baseURL: 'https://some-domain.com/api/', // should come form env
  timeout: 1000,
  headers: { 'X-Custom-Header': 'some header' },
});

export default httpClient;
