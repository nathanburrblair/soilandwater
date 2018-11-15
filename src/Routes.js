import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Plants from './components/Plants/Plants';
import Design from './components/Design/Design';
import Containers from './components/Containers/Containers';
import MainNav from './components/MainNav/MainNav';
import Slider from './components/Slider/Slider';
import LeftArrow from './components/Arrows/LeftArrow';

export default <Switch>
    <Route exact path='/' component={Home} />
    <Route path="/plants" component={Plants} />
    <Route path="/containers" component={Containers} />
    <Route path="/design" component={Design} />
    <Route path="/mainnav" component={MainNav} />
    <Route path="/slider" component={Slider} />
    <Route path="/leftarrow" component={LeftArrow} />
</Switch>