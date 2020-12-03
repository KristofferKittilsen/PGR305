import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import AddGame from "./pages/AddGame";
import AllGames from "./pages/AllGames";
import DeleteGames from "./pages/DeleteGames";
import EditPage from './pages/EditPage';
import GameInfoPage from './pages/GameInfoPage';
import Home from "./pages/Home";
import Ps5Page from "./pages/Ps5Page";
import XboxPage from "./pages/XboxPage";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CustomNavbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/add-game" component={AddGame}></Route>
          <Route path="/delete-game" component={DeleteGames}></Route>
          <Route path="/allgames" component={AllGames}></Route>
          <Route path="/xbox" component={XboxPage}></Route>
          <Route path="/ps" component={Ps5Page}></Route>
          <Route path="/gameInfo/:id" component={GameInfoPage}></Route>
          <Route path="/edit" component={EditPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
