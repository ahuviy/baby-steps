# BabySteps

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.
The front end is built with Angular 4 and the back end is built with Express.js.

## Check the project out

- View the code at: https://github.com/ahuviy/baby-steps
- Check out the site at work at: https://ahuvi-babysteps.herokuapp.com/

## Local deployment

To deploy the app locally, please clone this repository. Make sure you have the latest version of node.js installed. You can download node.js at: https://nodejs.org/en/download/. In the project directory, run the command 'node server.js' to launch the server. Navigate to `http://localhost:3000/`.

## Building the app

The app is already built and ready for deployment. However, if you wish to build it yourself, make sure you have the latest version of node.js installed. In the project directory, run 'npm install'. This will install all needed dependencies. Then run 'npm run build' to build the app and the service-worker. The built app will be located at the 'dist' directory. You can deploy by running the command 'node server.js'.

## Getting around the code

- The app initializes from main.ts: the AppModule is bootstrapped, and a service-worker is registered for offline caching of assets.
- AppModule (app.module.ts) bootstraps the AppComponent (app.component.ts), which is the root component of the app. You can see its selector in index.html (bs-app).
- From AppComponent, the component tree unfolds and the app is populated.
- Several services are used: GsapService is in charge of transition-animations; TabsService is in charge of managing the tabs-state; FriendsService is in charge of fetching and processing the friends' data from the server.
- The app styles are divided to global and local styles. The global styles are all declared in styles.scss. This file is an aggregator of several files that are all under the scss/ folder. The local styles are declared in each component in its private scss file. They are scoped to their component and their component only, and are not available globally.
- I am using sprite-sheets for the icons to minimize network requests. Check out the SASS code in _sprites.scss which generates the classes for all the icons.