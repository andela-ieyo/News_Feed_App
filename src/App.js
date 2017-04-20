import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header.js';
import SourcesView from './views/SourcesView.js';
import ArticlesView from './views/ArticlesView.js';
// import HomeView from './views/HomeView.js';


const history = createHistory();

function App() {
/**
* @return {object}
*/

  return (
    <Router history={history}>
      <div>
        <Header />

        {/* <Route path="/" component={HomeView} />*/}
        <Route exact path="/" component={SourcesView} />
        <Route path="/articles/:id&:sort" component={ArticlesView} />
      </div>
    </Router>
  );
}

export default App;
