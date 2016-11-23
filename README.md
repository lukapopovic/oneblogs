# Oneblogs

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Development notes

Time needed to finish it: 3.5h

Things done: 

Service for getting the data,
2 Components for displaying the lists and the details view,
Styling,
Tests (e2e and unit).

For styling purposes, flexbox is used.

The logic itself consists of BlogDataService which is fetching the data from the API, and two components BlogListComponent and BlogDetailComponent.
BlogDetailComponent is child component of the list. Every time when the one of the entries in the list is clicked, it will pass the input property
to the BlogDetailComponent which will then render the details view. This could be also achieved with routing methods, but I find it to be overengineering
in this particular case.

Tests for the service should be implemented differently in the real world scenario, with the mocked API to avoid failures in case of API not being available.
I did manipulate the data object to provide the favorite property in it when someone marks the blog entry as favorite. In the real world example this kind of
data would come from the backend, so I guess this is OK for the visual impressions. :)

Font Awesome css library is used for the heart icon, and it is provided from the simplicity perspective in the index.html from the CDN.

To install it, run npm install in the root folder. You should have angular-cli installed globally.

To start it, just run the ng serve inside of the root folder, as stated above. Have fun! :)
