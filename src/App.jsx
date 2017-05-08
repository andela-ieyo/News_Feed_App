import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import NewsSources from './components/NewsSources.jsx';
import NewsArticles from './components/NewsArticles.jsx';
import NotFound from './components/NotFound.jsx';
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
    throw err;
  });
};

const App = () =>
   (
      <div>
        <Router history={browserHistory}>
          <Route path="/" onEnter={onEnter} component={Home} />
           <Route component={Header}>
             <Route path="/home" onEnter={onEnter} component={NewsSources} />
             <Route path="/articles/:id/:sort" onEnter={onEnter} component={NewsArticles} />
             <Route path="*" component={NotFound} />
           </Route>
         </Router>
         <Footer />
       </div>
  );

export default App;
