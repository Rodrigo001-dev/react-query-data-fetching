import { Route, Routes } from "react-router-dom";

import { Repos } from "./pages/Repos";
import { Repo } from "./pages/Repo";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repo" element={<Repo />} />
    </Routes>
  );
};