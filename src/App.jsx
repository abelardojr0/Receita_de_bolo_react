import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Inicio } from "./pages/Inicio";
import { Layout } from "./components/Layout";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
