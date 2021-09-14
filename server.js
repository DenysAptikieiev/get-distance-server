const routing = require('./routing')
const NewYork = {latitude: 40.7128, longitude: 74.0060};
const Sydney = {latitude: -33.8688, longitude: -151.2093};
const Moscow = {latitude: 55.558741, longitude: 37.6208};
const Odessa = {latitude:  46.28, longitude: 30.43};
const Hermitage = {latitude:  59.9398, longitude: 30.3146};

const express = require('express')
const app = express()
app.use((request, response, next) => {
  console.log(request.headers)
  next()
})
app.use((request, response, next) => {
  request.distance = routing.distance(Odessa, Sydney)
  next()
})
app.get('/', (request, response) => {
  response.json({
    distance: request.distance
  })
})
app.listen(3000)