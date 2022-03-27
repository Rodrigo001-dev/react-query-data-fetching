import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {
  // o primeiro parâmetro do useQuery não é a rota que eu quero consumir, o 
  // primeiro parâmetro é basicamente uma chave de cache, uma maneira de eu
  // identificar essa requisição unicamente, exclusivamente como de fosse um ID
  // e nesse parâmetro eu posso colocar qualquer coisa que me ajude a lembrar
  // que requisição é essa
  // como segundo parâmetro é passado uma função que vai fazer a chamada a API
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/Rodrigo001-de/repos');

    return response.data;
  }, {
    // o staleTime é o quanto de tempo eu quero manter os dados em cache até eu
    // falar que eles estão obsoletos, ou seja, quanto tempo demora para eu
    // considerar os dados da listagem de repositórios obsoleto, ou seja, quanto
    // quanto tempo para eu buscar esses dados de novo
    staleTime: 1000 * 60, // 1 minuto
  });
  // essa url vai retorna uma lista de repositórios
  // const { data: repositores, isFetching } = 
  // useFetch<Repository[]>('/users/Rodrigo001-de/repos');

  return (
    <ul>
      {
        /* 
          tem que ter o ? porque eu determinei que o data pode ser nulo quando
          a requisição a Api não finalizou e quando já carregou ele é presente
        */
      }
      { isFetching && <p>Carregando...</p> }
      {data?.map(repo => {
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>
              {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
