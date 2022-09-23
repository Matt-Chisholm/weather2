import { useState } from "react";
import React from 'react';
import LocationSearch from "./LocationSearch";
import './App.css';

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://foreca-weather.p.rapidapi.com/current/106174041',
  params: {alt: '0', tempunit: 'C', windunit: 'MS', tz: 'Vancouver', lang: 'en'},
  headers: {
    'X-RapidAPI-Key': '1412b37728msh10138129aac7035p1f1d48jsn04de011cc0c4',
    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



export default function App() {
    return (
        <>
            <div>Weather Bandit</div>
           <LocationSearch />
        </>
    )
}
