import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Plants from "./components/Plants/Plants";
import Design from "./components/Design/Design";
import Containers from "./components/Containers/Containers";
import MainNav from "./components/MainNav/MainNav";
import Slider from "./components/Slider/Slider";
import LeftArrow from "./components/Arrows/LeftArrow";
import PlantCategories from "./components/PlantCategories/PlantCategories";
import ProductPage from "./components/ProductPage/ProductPage";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/plants" component={Plants} />
    <Route
      exact
      path="/plants/:category"
      render={props => (
        <PlantCategories {...props} key={props.match.params.category} />
      )}
    />
    <Route path="/plants/:category/:id" component={ProductPage} />
    <Route path="/containers" component={Containers} />
    <Route path="/design" component={Design} />
    <Route path="/mainnav" component={MainNav} />
    <Route path="/slider" component={Slider} />
    <Route path="/leftarrow" component={LeftArrow} />
  </Switch>
);

//gave the category route a unique key -the category name- so the component would re-render when the path changes
