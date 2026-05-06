import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu"
import HomePage from "./pages/home";
import Search from "./pages/search";
import Recipe from "./pages/recipe";


function App(){
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;