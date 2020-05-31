import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./context/FavoritePokemonContext";

import LoginPage from "./pages/LoginPage";
import Catalog from "./pages/Catalog";
import PokemonPage from "./pages/PokemonPage";
import UserProfilePage from "./pages/UserProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Provider>
          <Route path="/" component={LoginPage} exact />
          <Route path="/catalog" component={Catalog} />
          <Route path="/profile" component={UserProfilePage} />
          <Route path="/pokemon/:name" component={PokemonPage} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
