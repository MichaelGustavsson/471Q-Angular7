# FlysharpStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Description

This is a starter template for course 2324 developed by Learning Tree International.

The template is adjusted not having to install a apache webserver for webapi calls.

Instead the template is installed with [JSON Server](https://www.npmjs.com/package/json-server) which is a full fake REST API package.

To start json-server just type
```
json-server --watch db.json
```
in the terminal or command window.

Then in a web browser just type http://localhost:3000/flights/1 and you will receive the following response.

```
{
"id": 1,
"aircraftKey": 4,
"arriveDay": "Monday",
"arriveTime": "8:00",
"departDay": "Monday",
"departTime": "4:00",
"destination": "JFK",
"flightNumber": 102,
"origin": "LAX",
"price": 99.95
}
```

## Bootstrap
The template is also prepared with Bootstrap 4 and JQuery.

To see how Boostrap and the corresponding javascript files have been added to Angular, open the angular.json file and look at the arrays Styles and Scripts.

```
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss"
            ],
"scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```

So there is no indication in the index.html about the use of Bootstrap or JQuery.

The global styles.scss has also been customized with the google font Roboto.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


