import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";


const api = axios.create({
  baseURL: 'https://api.github.com'
});

// o generic do TS nada mais é como se tivesse passando um parâmetro pra essa
// função mas esse parâmetro não é um valor e sim um tipo, uma tipagem(T)
// eu coloquei ele porque como vou utilizar esse hoook para qualquer chamada a
// API a tipagem Repository não é mais valida porque eu não vou estar mais
// buscando somente repositórios
export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url, options).then(response => {
      setData(response.data);
    })
    .catch(err => {
      setError(err);
    })
    // quando essa chamada a API finalizar
    .finally(() => {
      setIsFetching(false);
    });
  }, []);

  return { data, error, isFetching };
};