import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
</div>
  );
}

export default App;
