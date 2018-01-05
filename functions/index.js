'use strict';

const App = require('actions-on-google').DialogflowApp;
const firebase = require('firebase-functions');
const http = require('http');

//constants
const WEATHER_ACTION = 'city_forecast';
const LOCATION_ARGUMENT = 'geo-city';
const DAY_ARGUMENT = 'date'
const WEATHER_API_KEY = 'e20f019fe3f44b8daf9212730172712';

exports.WeatherAssistant = firebase.https.onRequest((request, response) => {

  const app = new App({request, response});

  //log to firebase console for debugging purposes
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: '+ JSON.stringify(response.body));

  //end-point that takes the user input from Google assistant and returns the weather
  function cityForecast(app){

    let location = 'Chicago';
    let day = 'today';

    if(req.body.result.paramaters[LOCATION_ARGUMENT]){
      location = app.getArgument(LOCATION_ARGUMENT);
    }

    if(req.body.result.paramaters[DAY_ARGUMENT]){
      day = app.getArgument(DAY_ARGUMENT);
    }

    console.log('LOCATION:  ' + location);
    console.log('DAY:  ' + day);

    app.tell('You wanted weather in ' + location + 'for '+ day + 'correct?' );
  }

  //routing
  let router = new Map();
  router.set(WEATHER_ACTION, identify_weather);

  app.handleRequest(router);
});
