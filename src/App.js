import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './views/Header';
import Footer from './views/Footer';
import HomeView from './views/HomeView';
import SourcesView from './views/SourcesView';
import ArticlesView from './views/ArticlesView';
import NotFound from './views/NotFound.js';
import axios from 'axios';


// const history = createHistory();
const onEnter = ({ location: { pathname }}, replace, callback) => {
  const root = pathname === '/';

  axios.get('/loggedin')
  .then((res) => {
    const { user } = res.data;
    // there is no user and tying to access a loggedin route
    if(!user && !root) {
      replace('/');
    }
    // loggedin user should be redirected to home
    if(root && user){
      replace('/home');
    }
    callback();
  }, (err) => {
    replace('/');
    callback();
  })
  .catch(err => {
    console.log(err);
    callback();
  });
};

const App = () =>
   (
      <div>
        <Router history={browserHistory}>
          <Route path="/" onEnter={onEnter} component={HomeView} />
           <Route component={Header}>
             <Route path="/home" onEnter={onEnter} component={SourcesView} />
             <Route path="/articles/:id/:sort" onEnter={onEnter} component={ArticlesView} />
             <Route path="*" component={NotFound} />
           </Route>
         </Router>
         <Footer />
       </div>
  );

export default App;
