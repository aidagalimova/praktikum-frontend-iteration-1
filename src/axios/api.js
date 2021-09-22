import axios from "axios";

export default axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
  }
});