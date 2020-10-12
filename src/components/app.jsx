// react
import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
// components
import Home from '../pages/home';
import SearchPage from '../pages/searchPage';
import AboutPage from '../pages/about';
// contexts
import { ThemeContextHOC } from '../contexts/themeColor';

const App = () => (
    <ThemeContextHOC>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </BrowserRouter>
    </ThemeContextHOC>
)

export default App;

