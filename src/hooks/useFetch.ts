import { useState, useEffect } from "react";
import axios from "axios";

// o generic do TS nada mais é como se tivesse passando um parâmetro pra essa
// função mas esse parâmetro não é um valor e sim um tipo, uma tipagem(T)
// eu coloquei ele porque como vou utilizar esse hoook para qualquer chamada a
// API a tipagem Repository não é mais valida porque eu não vou estar mais
// buscando somente repositórios
export function useFetch<T = unknown>(url: string) {

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      });
  }, []);

  return { data };
};