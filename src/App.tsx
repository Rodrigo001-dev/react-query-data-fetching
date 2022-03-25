import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  // essa url vai retorna uma lista de repositórios
  const { data: repositores } = useFetch<Repository[]>('https://api.github.com/users/Rodrigo001-de/repos');

  return (
    <ul>
      {
        /* 
          tem que ter o ? porque eu determinei que o data pode ser nulo quando
          a requisição a Api não finalizou e quando já carregou ele é presente
        */
      }
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
