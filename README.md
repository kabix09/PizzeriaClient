# Pizzeria Client 
![](https://shields.io/travis/kentcdodds/starwars-names.svg)

Simple API React client using pizza data from PHP [Pizzeria Server](https://github.com/kabix09/PizzeriaServer).

## Table of Contents
* [Genera Info](#general-info)
* [Technologies Used](#technologies)
* [Launch](#launch)
* [Features](#features)
* [Sources](#sources)

## General info
The purpose of writing this project was to get fully functional client application that would complement the REST API server. 
At the same time allowing me to get acquainted myself with the **react framework** and related tools like: `redux`, `saga`, `tunk` and `epic`.

## Technologies
Project is created with:
* react
* [redux](https://react-redux.js.org/)

## Launch
To run this project install **npm**. Next update dependencies and run app:
```
$ npm update
$ npm start
```
Defaultly, application should run on `localhost:3000` address.
>If you want to run your own server, it should listening on `localhost:8000` address.

## Features
* Get data from REST API server
* Place an order 
#### To do
* Add a selection of sauces 
* Using thunk to save basket in lcoal storage
* Authenticate user with JWT token

## Sources
Initially this application was written as part of a student project to pass the subject where we got fully functional rest api [server](https://github.com/DzixxxVizlib/UAM-WMI-NFW). Currently, it is a client part of another [project](https://github.com/kabix09/PizzeriaServer).