import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params['*'] as string;

  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    /*
      se o usuario mudar a descrição do repo, quando ele voltar para a pagina
      ele vai querer ver atulaizado, por isso eu faço uma invalidação de cache
      porque se não passou 1 minuto ele fazer uma requisição novamente a API
      para poder apresente os dados em tela mais atualizado possivel
      await queryClient.invalidateQueries(['repos']); // repos é a chave de cache
    */
    // o previousRepo vai básicamente me retornar a lista de repositórios que eu
    // tenho armazenado no meu cache 
    const previousRepos = queryClient.getQueryData<Repository[]>('repos'); // repos é a chave de cache

    if (previousRepos) {
      // eu estou manipulando o cahce do react-query sem precisar fazer uma nova
      // chamada a API
      const nextRepos = previousRepos.map(repo => {
        // se o o full_name do repo for igual ao nome do repositório que eu
        // estou alterando a descrição(currentRepository)
        if (repo.full_name === currentRepository) {
          return { ...repo, description: 'Testando' }
        } else {
          return repo;
        }
      });

      queryClient.setQueryData('repos', nextRepos);
    };
  };

  
  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Alterar descrição</button>
    </div>
  );
};