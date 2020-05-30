import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./context/FavoritePokemonContext";

import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Pokemon from "./pages/Pokemon";
import UserProfilePage from "./pages/UserProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Provider>
          <Route path="/" component={Login} exact />
          <Route path="/catalog" component={Catalog} />
          <Route path="/profile" component={UserProfilePage} />
          <Route path="/pokemon/:name" component={Pokemon} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
