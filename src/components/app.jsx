// react
import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
// components
import Home from '../pages/home';
import SearchPage from '../pages/searchPage';
import AboutPage from '../pages/about';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </BrowserRouter>
)

export default App;

