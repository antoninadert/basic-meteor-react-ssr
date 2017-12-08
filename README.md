# basic-meteor-react-ssr
A basic page showing SSR in React + Meteor. There is a known issue of performance on the last version of Meteor with Universal Router.

The server-render package now has trouble to render in time when being done in the Router.resolve callback of Universal router, while it worked fine in 1.5.2.2

Checkout the minimal branch to have a simple repro. Then update it to Meteor 1.6 to see the performance problem

to start:
`git clone https://github.com/antoninadert/basic-meteor-react-ssr.git`

`cd basic-meteor-react-ssr/`

`git checkout minimal`

`meteor npm install`

`meteor`

Then try an Audit of Chrome lighthouse (time to first paint is around 1400 - 2200 ms on my machine, while time to first interactive is about 8000 ms)

To test the performance problem with SSR on windows or macOS

`meteor update`

`meteor`

Then try an Audit of Chrome lighthouse (time to first paint should be considerably slower around 8000 ms, the same as time to interactive, it is almost like if SSR was non existent and everything was rendered client side)

Licence
-------------
Apache 2.0 Licence (see LICENCE file)

Copyright © Antonin Adert 2017 All Rights Reserved.
