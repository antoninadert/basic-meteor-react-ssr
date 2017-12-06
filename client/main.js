import { Meteor } from 'meteor/meteor';
import { hydrate } from 'react-dom';
import React from 'react'; //React needed for the <Component /> Syntax
import App from '/imports/App';
import UniversalRouter from 'universal-router';
import createHistory from 'history/createBrowserHistory'

const routes = [
    {
      path: '',
      action() {
        return {
          component:  <App />
        };
      }
    }]
    const History = createHistory()
    const location = History.location
    const router = new UniversalRouter(routes);

    function renderLocation(location) {
        router.resolve({pathname: location.pathname}).then(route  => { 
          //route is what our action() returns for a specific path
          document.title = route.title;
          hydrate(route.component, document.getElementById("app"));
        });
      }
      
      //Initialize the first page render with current History
      renderLocation(location);
      //listen to URL(location) changes and render the new layout based on URL automatically
      History.listen((anylocation) => {renderLocation(anylocation)});


Meteor.startup(() => {
});
