import { Meteor } from 'meteor/meteor';
import UniversalRouter from 'universal-router/legacy';
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";
import React from 'react'; //React needed for the <Component /> Syntax
import App from '../imports/App';

const routes = [
  {
    path: '',
    action() {
      return {
        component:  <App />
      };
    }
  }]
  const router = new UniversalRouter(routes);

  function renderPage(thatSink) {
    router.resolve({pathname: thatSink.request.url.pathname}).then(route  => {
      thatSink.renderIntoElementById("app", renderToString(
        route.component
      ));
    });
  }

onPageLoad(async sink => {
  await renderPage(sink);
});
Meteor.startup(() => {
  // code to run on server at startup
});