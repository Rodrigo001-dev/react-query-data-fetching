import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  // essa url vai retorna uma lista de repositórios
  const { data: repositores, isFetching } = 
  useFetch<Repository[]>('/users/Rodrigo001-de/repos');

  return (
    <ul>
      {
        /* 
          tem que ter o ? porque eu determinei que o data pode ser nulo quando
          a requisição a Api não finalizou e quando já carregou ele é presente
        */
      }
      { isFetching && <p>Carregando...</p> }
      {repositores?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
