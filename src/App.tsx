import { useEffect, useState } from "react";
import axios from 'axios';

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/Rodrigo001-de/repos')
      .then(response => {
        setRepositories(response.data);
      });
  }, []);
  
  return (
    <ul>
      {repositories.map(repo => {
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
