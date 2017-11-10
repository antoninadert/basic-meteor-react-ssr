import { Meteor } from 'meteor/meteor';
import { hydrate } from 'react-dom';
import React from 'react'; //React needed for the <Component /> Syntax
import App from '../imports/App';
Meteor.startup(() => {
    hydrate(<App />, document.getElementById("app"));
});
