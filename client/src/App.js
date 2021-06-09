import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Registration from "./views/Registration/Registration";
import Projets from "./views/Projects/Projects";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Projets" component={Projets} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Registration" component={Registration} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
