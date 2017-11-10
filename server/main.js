import { Meteor } from 'meteor/meteor';
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";
import React from 'react'; //React needed for the <Component /> Syntax
import App from '../imports/App';

function renderPage(thatSink) {
    thatSink.renderIntoElementById("app", renderToString(
      <App />
    ));
    const title = "<title>"+'SSR TEST'+"</title>";
    thatSink.appendToHead(title);
}

onPageLoad(async sink => {
  await renderPage(sink);
});
Meteor.startup(() => {
  // code to run on server at startup
});
