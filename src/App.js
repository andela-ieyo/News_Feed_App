import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './views/Header';
import HomeView from './views/HomeView';
import SourcesView from './views/SourcesView';
import ArticlesView from './views/ArticlesView';


// const history = createHistory();

const App = () =>
/**
* @return {object}
*/

     (
       <Router history={browserHistory}>
         <Route path="/" component={HomeView} />
         <Route component={Header}>
           <Route path="/home" component={SourcesView} />
           <Route path="/articles/:id&:sort" component={ArticlesView} />
         </Route>
       </Router>
    );

export default App;
