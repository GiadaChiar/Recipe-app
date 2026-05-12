//import { BrowserRouter} from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Menu from "./components/menu";
import NavigationRoots from "./router/router";




function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <NavigationRoots/>
      </HashRouter>
    </>
  );
}

export default App;