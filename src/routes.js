import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Catalog from "./pages/Catalog";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/catalog" component={Catalog} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
