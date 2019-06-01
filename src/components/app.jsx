// react
import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
// components
import Home from '../pages/home';
import SearchPage from '../pages/searchPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage}/>
        </Switch>
    </BrowserRouter>
)

export default App;

