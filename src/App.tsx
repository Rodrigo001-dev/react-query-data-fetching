import { Route, Routes } from "react-router-dom";

import { Repos } from "./pages/Repos";
import { Repo } from "./pages/Repo";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      {/* o * é para poder aceitar qualquer coisa na rotas */}
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  );
};